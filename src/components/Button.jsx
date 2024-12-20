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

    // Função para gerar IDs únicos
    const generateUniqueId = () => {
        return `user_${Math.random().toString(36).substr(2, 9)}`;
    };

    // Identificador do usuário (simulado com localStorage)
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
        <div>
            <button
                onClick={handleLike}
                disabled={hasLiked}
                className={`mt-5 p-1 px-3 font-bold flex hover:scale-110 flex-row items-center transition-all duration-300 rounded-xl text-white ${hasLiked ? 'bg-gray-500' : 'bg-gradient-to-r from-rose-300 to-rose-400'
                    }`}
            >
                <div className='flex items-center w-[30px] h-[30px]'>
                    {!hasLiked ? (
                        <img
                            src={heartNotFilled}
                            alt="Heart not filled"
                            style={{
                                width: '20px',
                                height: '20px',
                            }}
                        />
                    ) : (
                        <DotLottieReact
                            src={heart}
                            autoplay
                            style={{
                                width: '30px',
                                height: '30px',
                            }}
                        />
                    )}
                </div>
                {likes} 
            </button>
        </div>
    );
};

export default Button;
