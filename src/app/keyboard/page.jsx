'use client'

import React, { useState, useEffect } from 'react';

const Keyboard = () => {
  const [keyInfo, setKeyInfo] = useState({
    key: '',
    keyCode: '',
    ctrl: false,
    shift: false,
    alt: false,
  });

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeyInfo({
        key: event.key,
        keyCode: event.keyCode,
        ctrl: event.ctrlKey,
        shift: event.shiftKey,
        alt: event.altKey,
      });
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Keyboard Test</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <p className="text-xl mb-4">
          Press any key to see its information:
        </p>
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">{keyInfo.key || 'N/A'}</p>
          <p className="text-lg mb-2">
            Key Code: <span className="font-semibold">{keyInfo.keyCode || 'N/A'}</span>
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <ModifierKey active={keyInfo.ctrl}>Ctrl</ModifierKey>
            <ModifierKey active={keyInfo.shift}>Shift</ModifierKey>
            <ModifierKey active={keyInfo.alt}>Alt</ModifierKey>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModifierKey = ({ active, children }) => (
  <span className={`px-3 py-1 rounded ${active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
    {children}
  </span>
);

export default Keyboard;