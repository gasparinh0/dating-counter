import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Música instrumental/romântica royalty-free de exemplo
    const audioUrl = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_2289c8928c.mp3?filename=romantic-piano-114408.mp3";

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Volume agradável de fundo
        }
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="absolute top-4 right-4 z-50">
            <audio ref={audioRef} src={audioUrl} loop />
            <button
                onClick={togglePlay}
                className="bg-white/20 hover:bg-white/40 backdrop-blur-md border border-rose-200/50 p-3 rounded-full shadow-lg shadow-rose-900/20 transition-all duration-300 flex items-center justify-center group"
                aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-100 drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-100 drop-shadow-md group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;