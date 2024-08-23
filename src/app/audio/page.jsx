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

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
                src="/flow.mp3"
                onEnded={handleAudioEnded}
            />
            <p className="mt-4 text-gray-600">
                Click the button above to play a test sound and check your audio device.
            </p>
        </div>
    );
}