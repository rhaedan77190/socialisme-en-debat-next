"use client";

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setProgress(percent);
    };
    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-75"
      style={{ width: `${progress}%` }}
    />
  );
}