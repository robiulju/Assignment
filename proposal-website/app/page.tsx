"use client";

import { useState } from "react";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    // Make the "No" button move to a random position
    const randomX = Math.random() * 80;
    const randomY = Math.random() * 80;
    setNoButtonStyle({
      position: "absolute" as const,
      left: `${randomX}%`,
      top: `${randomY}%`,
      transition: "all 0.3s ease",
    });
  };

  const getNoButtonText = () => {
    const messages = [
      "No",
      "Are you sure?",
      "Really?",
      "Think again!",
      "Don't be silly!",
      "Give it a chance!",
      "Please? 🥺",
      "You're breaking my heart!",
      "Last chance!",
      "Okay, but really?",
    ];
    return messages[Math.min(noCount, messages.length - 1)];
  };

  const getYesButtonSize = () => {
    const baseSize = 1 + noCount * 0.3;
    return `${baseSize}em`;
  };

  if (yesPressed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-red-400 to-pink-600 p-4">
        <div className="text-center animate-bounce-slow">
          <div className="text-9xl mb-8 animate-pulse-slow">🎉</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Yay!!!
          </h1>
          <p className="text-2xl md:text-4xl text-white mb-8 drop-shadow-md">
            You just made me the happiest person alive! ❤️
          </p>
          <div className="flex justify-center gap-4 text-6xl animate-float">
            <span>💕</span>
            <span>💖</span>
            <span>💗</span>
            <span>💝</span>
            <span>💕</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-300 via-pink-300 to-purple-300 p-4 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center relative z-10">
        <div className="text-7xl mb-6 animate-bounce-slow">💝</div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          Will You Be My
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mt-2">
            Girlfriend?
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
          I&apos;ve been thinking about this for a while now, and I can&apos;t imagine my days without you. 
          You make everything brighter, and I want to make you smile every single day. ✨
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[100px]">
          <button
            onClick={() => setYesPressed(true)}
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-20"
            style={{ fontSize: getYesButtonSize() }}
          >
            Yes! 💕
          </button>

          <button
            onClick={handleNoClick}
            className="bg-gradient-to-r from-gray-400 to-gray-600 hover:from-gray-500 hover:to-gray-700 text-white font-bold py-4 px-12 rounded-full shadow-lg transition-all duration-300"
            style={noButtonStyle}
          >
            {getNoButtonText()}
          </button>
        </div>

        {noCount > 0 && (
          <p className="mt-8 text-pink-600 font-semibold animate-pulse">
            The &quot;Yes&quot; button is getting bigger because that&apos;s the right answer! 😊
          </p>
        )}
      </div>
    </div>
  );
}
