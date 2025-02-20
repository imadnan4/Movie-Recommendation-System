import React from 'react';
import type { MovieModalOverlayProps } from './types';

export function MovieModalOverlay({ children, onClose }: MovieModalOverlayProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {children}
    </div>
  );
}
