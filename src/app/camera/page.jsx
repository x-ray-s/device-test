'use client'

import React, { useState, useRef, useEffect } from 'react';


const CameraTest = () => {
  const [stream, setStream] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(mediaStream);
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Camera Test</h1>
      <div className="bg-white  dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-auto mb-4 rounded"
        />
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          This is a live camera feed using your device&apos;s camera.
        </p>

      </div>
    </div>
  );
};

export default CameraTest;