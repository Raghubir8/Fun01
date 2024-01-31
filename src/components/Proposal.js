// src/components/Proposal.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Proposal = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedContent, setTypedContent] = useState('');
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [noButtonDisabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!showThankYou) {
      const typingTimer = setTimeout(() => {
        setIsTyping(true);
      }, 1000);

      // Simulate typing effect
      let index = 0;
      const finalContent = "Hye cutie, would you like to go on a date with me ?";
      const typingInterval = setInterval(() => {
        setTypedContent(finalContent.substring(0, index));
        index++;

        // Stop when the entire content is typed
        if (index > finalContent.length) {
          clearInterval(typingInterval);
        }
      }, 50);

      return () => {
        clearTimeout(typingTimer);
        clearInterval(typingInterval);
      };
    } else {
      // Navigate to the confirmation page after saying "Yes"
      navigate('/confirmation');
    }
  }, [showThankYou, navigate]);

  const handleYesClick = () => {
    setShowThankYou(true);
  };

  const handleNoHover = () => {
    if (!noButtonDisabled) {
      const getRandomPosition = () => Math.random() * 200 - 100;
      setNoButtonStyle({
        transform: `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`,
      });
    }
  };

  const handleNoClick = () => {
    if (!noButtonDisabled) {
      // Move the "No" button to a random position on click
      const getRandomPosition = () => Math.random() * 200 - 100;
      setNoButtonStyle({
        transform: `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`,
      });
    }
  };

  const handleNoTouchMove = (e) => {
    if (!noButtonDisabled) {
      // Disable the "No" button on touch
      e.preventDefault();
      const getRandomPosition = () => Math.random() * 200 - 100;
      setNoButtonStyle({
        transform: `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`,
      });
    }
  };

  const handleNoTouchEnd = () => {
    const getRandomPosition = () => Math.random() * 200 - 100;
    setNoButtonStyle({
      transform: `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="https://i.pinimg.com/564x/3c/1f/2d/3c1f2d3663b5bf9d16d77a51ee039b2e.jpg"
        alt="Proposal"
        className="mb-8 max-w-full max-h-full"
        style={{ width: '300px', height: 'auto', background: 'transparent' }}
      />

      {!showThankYou && (
        <div className={`text-center text-2xl text-blue-500 ${isTyping ? 'typing-animation' : ''}`}>
          {typedContent}
        </div>
      )}

      {!showThankYou && (
        <div className="flex mt-4 gap-16">
          <button
            id="no-button"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 transition-transform rounded-lg"
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            onTouchMove={handleNoTouchMove}
            onTouchEnd={handleNoTouchEnd}
            style={{ ...noButtonStyle, pointerEvents: noButtonDisabled ? 'none' : 'auto' }}
            disabled={noButtonDisabled}
          >
            No
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 cursor-pointer rounded-lg"
            onClick={handleYesClick}
          >
            Yes
          </button>
        </div>
      )}
    </div>
  );
};

export default Proposal;
