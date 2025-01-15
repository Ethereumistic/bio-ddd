'use client'

import React, { useState, useEffect } from 'react';

const WindowDimensions: React.FC = () => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0 8px 0 0',
        fontSize: '0.9rem',
      }}
    >
      <p>
        Width: {dimensions.width}px | Height: {dimensions.height}px
      </p>
    </div>
  );
};

export default WindowDimensions;
