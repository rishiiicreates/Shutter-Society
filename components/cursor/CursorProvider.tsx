"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { CursorState } from '@/types';

interface CursorContextProps {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
}

const CursorContext = createContext<CursorContextProps | undefined>(undefined);

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>('DEFAULT');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    // If not within provider (e.g. touch device), return a dummy function
    return { cursorState: 'DEFAULT' as CursorState, setCursorState: () => {} };
  }
  return context;
};
