import React, { useState, useEffect } from 'react';

//Imports do firebase
import app from '../firebase/firebase.config.js';
import { getDatabase, ref, set, onValue } from 'firebase/database';

//Imports do lottieFiles
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import heart from '../animations/heart.lottie'

//Imports de imagem
import heartNotFilled from '../assets/heartNotFilled.png'

const Button = () => {
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const database = getDatabase(app);
    const likesRef = ref(database, 'likes');
    const likedUsersRef = ref(database, 'likedUsers');

    const generateUniqueId = () => {
        return `user_${Math.random().toString(36).substr(2, 9)}`;
    };

    const userId = localStorage.getItem('userId') || generateUniqueId();

    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            localStorage.setItem('userId', userId);
        }

        const unsubscribeLikes = onValue(likesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) setLikes(data);
        });

        const unsubscribeLikedUsers = onValue(likedUsersRef, (snapshot) => {
            const users = snapshot.val();
            if (users && users[userId]) {
                setHasLiked(true);
            }
        });

        return () => {
            unsubscribeLikes();
            unsubscribeLikedUsers();
        };
    }, [userId, likesRef, likedUsersRef]);

    const handleLike = () => {
        if (hasLiked) return;

        const newLikes = likes + 1;

        set(likesRef, newLikes);
        set(ref(database, `likedUsers/${userId}`), true)
            .then(() => {
                setHasLiked(true);
                setLikes(newLikes);
            })
            .catch((error) => {
                console.error("Erro ao atualizar os likes:", error);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center mt-2 w-full">
            <button
                onClick={handleLike}
                disabled={hasLiked}
                className={`group relative py-3 px-8 font-bold flex hover:scale-105 active:scale-95 flex-row items-center gap-3 transition-all duration-300 rounded-full text-white shadow-lg overflow-hidden ${
                    hasLiked
                        ? 'bg-rose-800/80 cursor-default shadow-rose-900/50'
                        : 'bg-gradient-to-r from-rose-400 via-pink-500 to-rose-500 shadow-rose-500/50 hover:shadow-rose-400/60 hover:from-rose-300 hover:to-pink-400'
                }`}
            >
                {/* Efeito de brilho no hover */}
                {!hasLiked && <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>}

                <div className='flex items-center justify-center w-8 h-8 z-10'>
                    {!hasLiked ? (
                        <img
                            src={heartNotFilled}
                            alt="Heart not filled"
                            className="w-6 h-6 object-contain drop-shadow-md group-hover:animate-pulse"
                        />
                    ) : (
                        <DotLottieReact
                            src={heart}
                            autoplay
                            className="w-10 h-10 transform scale-150"
                        />
                    )}
                </div>
                <span className="text-xl tracking-wider z-10">{likes}</span>
            </button>
            <p className="text-rose-200/70 text-xs mt-3 font-medium">Deixe seu amor aqui!</p>
        </div>
    );
};

export default Button;
