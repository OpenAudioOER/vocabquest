"use client";

import React from "react";

interface StickerGraphicProps {
  type: string;
  className?: string;
}

export const StickerGraphic: React.FC<StickerGraphicProps> = ({ type, className = "w-12 h-12" }) => {
  switch (type) {
    case "kitten":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="45" fill="#F2C6DE" />
          <polygon points="25,30 15,5 40,20" fill="#DBCDF0" stroke="#C084FC" strokeWidth="2" />
          <polygon points="75,30 85,5 60,20" fill="#DBCDF0" stroke="#C084FC" strokeWidth="2" />
          <circle cx="50" cy="55" r="32" fill="#FFFFFF" />
          <circle cx="38" cy="52" r="5" fill="#4C1D95" />
          <circle cx="62" cy="52" r="5" fill="#4C1D95" />
          <polygon points="47,60 53,60 50,64" fill="#F472B6" />
        </svg>
      );
    case "unicorn":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="45" fill="#DBCDF0" />
          <polygon points="50,8 43,35 57,35" fill="#FAEDCB" stroke="#F59E0B" strokeWidth="2" />
          <circle cx="50" cy="58" r="28" fill="#FFFFFF" />
          <path d="M35,52 Q40,45 45,52" stroke="#4C1D95" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M55,52 Q60,45 65,52" stroke="#4C1D95" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="65" r="4" fill="#F472B6" />
        </svg>
      );
    case "puppy":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="45" fill="#F7D9C4" />
          <ellipse cx="20" cy="45" rx="10" ry="22" fill="#DBCDF0" />
          <ellipse cx="80" cy="45" rx="10" ry="22" fill="#DBCDF0" />
          <circle cx="50" cy="55" r="30" fill="#FFFFFF" />
          <circle cx="40" cy="50" r="5" fill="#4C1D95" />
          <circle cx="60" cy="50" r="5" fill="#4C1D95" />
          <ellipse cx="50" cy="60" rx="7" ry="5" fill="#4C1D95" />
        </svg>
      );
    case "cupcake":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M25,55 L32,90 L68,90 L75,55 Z" fill="#F7D9C4" stroke="#F472B6" strokeWidth="2" />
          <path d="M20,55 Q35,30 50,55 Q65,30 80,55 Z" fill="#F2C6DE" />
          <circle cx="50" cy="30" r="10" fill="#EF4444" />
          <circle cx="40" cy="45" r="2" fill="#FFFFFF" />
          <circle cx="60" cy="48" r="2" fill="#FFFFFF" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <polygon points="50,5 63,35 95,38 71,61 78,92 50,75 22,92 29,61 5,38 37,35" fill="#FAEDCB" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="42" cy="45" r="4" fill="#4C1D95" />
          <circle cx="58" cy="45" r="4" fill="#4C1D95" />
          <path d="M44,55 Q50,62 56,55" stroke="#4C1D95" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case "bunny":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <ellipse cx="38" cy="25" rx="8" ry="22" fill="#C9E4DE" stroke="#34D399" strokeWidth="2" />
          <ellipse cx="62" cy="25" rx="8" ry="22" fill="#C9E4DE" stroke="#34D399" strokeWidth="2" />
          <circle cx="50" cy="60" r="32" fill="#FFFFFF" stroke="#C9E4DE" strokeWidth="3" />
          <circle cx="40" cy="56" r="4" fill="#4C1D95" />
          <circle cx="60" cy="56" r="4" fill="#4C1D95" />
          <polygon points="47,63 53,63 50,67" fill="#F472B6" />
        </svg>
      );
    case "rainbow":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M15,70 A35,35 0 0,1 85,70" fill="none" stroke="#F2C6DE" strokeWidth="8" />
          <path d="M23,70 A27,27 0 0,1 77,70" fill="none" stroke="#FAEDCB" strokeWidth="8" />
          <path d="M31,70 A19,19 0 0,1 69,70" fill="none" stroke="#C6DEF1" strokeWidth="8" />
          <circle cx="18" cy="70" r="10" fill="#FFFFFF" />
          <circle cx="82" cy="70" r="10" fill="#FFFFFF" />
        </svg>
      );
    case "crown":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M15,75 L20,30 L40,50 L50,20 L60,50 L80,30 L85,75 Z" fill="#FAEDCB" stroke="#F59E0B" strokeWidth="3" />
          <circle cx="20" cy="28" r="4" fill="#F472B6" />
          <circle cx="50" cy="18" r="5" fill="#3B82F6" />
          <circle cx="80" cy="28" r="4" fill="#F472B6" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <circle cx="50" cy="50" r="40" fill="#F2C6DE" />
          <path d="M30,50 Q50,20 70,50 Q50,80 30,50 Z" fill="#FAEDCB" />
        </svg>
      );
  }
};
