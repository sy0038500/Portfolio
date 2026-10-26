import React, { useEffect, useState } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(currentProgress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div className="scroll-progress-wrap">
      <div className="scroll-progress-label">
        <span>POWER CELL</span>
        <span>{Math.round(progress)}%</span>
      </div>

      <div className="scroll-progress-track">
        <div
          className="scroll-progress-fill"
          style={{ width: `${progress}%` }}
        />
        <div
          className="scroll-progress-knob"
          style={{ left: `${progress}%` }}
        />
      </div>
    </div>
  );
}