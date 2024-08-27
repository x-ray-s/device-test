'use client';

import { useState, useRef } from 'react';

export default function AudioTest() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const playTestSound = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    console.log(process.env)

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div >
            <h1 className="text-3xl font-bold mb-8">Audio Device Test</h1>
            <button
                onClick={playTestSound}
                disabled={isPlaying}
                className={`px-6 py-3 rounded-lg text-white font-semibold ${isPlaying
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600'
                    }`}
            >
                {isPlaying ? 'Playing...' : 'Play Test Sound'}
            </button>
            <audio
                ref={audioRef}
                src={`${process.env.NEXT_PUBLIC_BASE_URL || ''}/flow.mp3`}
                onEnded={handleAudioEnded}
            />
            <p className="mt-4 text-gray-600 dark:text-gray-300">
                Click the button above to play a test sound and check your audio device.
            </p>
        </div>
    );
}