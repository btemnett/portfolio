'use client';

import { useState, useEffect, useRef } from 'react';

export function useInactivityTimer() {
    
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef(undefined as unknown as NodeJS.Timeout);

  const resetTimer = () => {
    setSeconds(0);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];

    events.forEach((event) => {
      window.addEventListener(event, resetTimer);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, []);

  return { seconds, resetTimer };
}