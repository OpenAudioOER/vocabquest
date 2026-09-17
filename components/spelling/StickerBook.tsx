"use client";

import React, { useState, useEffect, useRef } from "react";
import { STICKERS_COLLECTION, Sticker } from "../../data/spelling/stickersData";
import { getUnlockedStickers, getPlacedStickers, savePlacedStickers, PlacedSticker } from "../../utils/spelling/storage";
import { StickerGraphic } from "./StickerGraphic";
import { Sparkles, Lock, Gift, Trash2, Move } from "lucide-react";

export const StickerBook: React.FC = () => {
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [placedStickers, setPlacedStickers] = useState<PlacedSticker[]>([]);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setUnlockedIds(getUnlockedStickers());
    setPlacedStickers(getPlacedStickers());
  }, []);

  const handlePlaceSticker = (sticker: Sticker) => {
    const newPlaced: PlacedSticker = {
      id: `placed_${Date.now()}_${Math.random()}`,
      stickerId: sticker.id,
      x: 35 + Math.floor(Math.random() * 30),
      y: 35 + Math.floor(Math.random() * 30),
    };
    const updated = [...placedStickers, newPlaced];
    setPlacedStickers(updated);
    savePlacedStickers(updated);
  };

  const handleClearAlbum = () => {
    setPlacedStickers([]);
    savePlacedStickers([]);
  };

  // Dragging mechanics across canvas
  const handlePointerDown = (id: string, e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggingId(id);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingId || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const xPx = e.clientX - rect.left;
    const yPx = e.clientY - rect.top;

    // Convert to percentage relative to canvas size
    const xPct = Math.max(2, Math.min(88, (xPx / rect.width) * 100));
    const yPct = Math.max(2, Math.min(84, (yPx / rect.height) * 100));

    setPlacedStickers((prev) =>
      prev.map((item) => (item.id === draggingId ? { ...item, x: xPct, y: yPct } : item))
    );
  };

  const handlePointerUp = () => {
    if (draggingId) {
      setDraggingId(null);
      savePlacedStickers(placedStickers);
    }
  };

  return (
    <div
      className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 shadow-xl border-4 border-palette-lavender flex flex-col items-center select-none"
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div className="w-full flex items-center justify-between mb-3">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-purple-950 flex items-center gap-2">
            <span>🎨 My Sparkle Sticker Album</span>
            <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          </h2>
          <p className="text-xs font-bold text-purple-800 flex items-center gap-1 mt-0.5">
            <Move className="w-3.5 h-3.5 text-pink-500" />
            Tap a sticker below to add it, then drag it anywhere on your canvas!
          </p>
        </div>

        {placedStickers.length > 0 && (
          <button
            onClick={handleClearAlbum}
            className="flex items-center space-x-1 text-xs font-black text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-full border border-rose-200 transition shadow-sm"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Reset Canvas</span>
          </button>
        )}
      </div>

      {/* Interactive Draggable Pastel Canvas */}
      <div
        ref={canvasRef}
        className="w-full h-80 md:h-[450px] bg-gradient-to-br from-palette-pink via-palette-lavender to-palette-blue rounded-3xl border-4 border-dashed border-purple-300 relative overflow-hidden shadow-inner flex items-center justify-center p-4 touch-none"
      >
        {placedStickers.length === 0 ? (
          <div className="text-center text-purple-900 font-extrabold px-4 bg-white/85 backdrop-blur-sm p-4 rounded-2xl border border-white shadow-sm">
            <span className="text-3xl block mb-1">✨ 🦄 🐱 ✨</span>
            Tap an unlocked sticker below to add it to your canvas!
          </div>
        ) : (
          placedStickers.map((item) => {
            const stickerDef = STICKERS_COLLECTION.find((s) => s.id === item.stickerId);
            if (!stickerDef) return null;

            const isDragging = draggingId === item.id;

            return (
              <div
                key={item.id}
                onPointerDown={(e) => handlePointerDown(item.id, e)}
                style={{ top: `${item.y}%`, left: `${item.x}%` }}
                className={`absolute cursor-grab active:cursor-grabbing transition-transform duration-75 ${
                  isDragging
                    ? "scale-130 z-30 filter drop-shadow-2xl opacity-90"
                    : "hover:scale-125 z-10 filter drop-shadow-md animate-bounce"
                }`}
              >
                <StickerGraphic type={stickerDef.svgType} className="w-16 h-16 md:w-20 md:h-20" />
              </div>
            );
          })
        )}
      </div>

      {/* Unlocked Vector Sticker Tray */}
      <div className="w-full mt-6">
        <h3 className="text-base md:text-lg font-black text-purple-950 mb-3 flex items-center gap-2">
          <Gift className="w-5 h-5 text-pink-500" />
          <span>Unlocked Stickers ({unlockedIds.length} / {STICKERS_COLLECTION.length})</span>
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {STICKERS_COLLECTION.map((sticker) => {
            const isUnlocked = unlockedIds.includes(sticker.id);

            return (
              <button
                key={sticker.id}
                disabled={!isUnlocked}
                onClick={() => handlePlaceSticker(sticker)}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 shadow-sm border-2 ${
                  isUnlocked
                    ? `${sticker.color} hover:scale-105 active:scale-95 cursor-pointer bg-white`
                    : "bg-gray-100 border-gray-200 text-gray-400 opacity-50 cursor-not-allowed"
                }`}
              >
                <div className="mb-1 flex items-center justify-center">
                  {isUnlocked ? (
                    <StickerGraphic type={sticker.svgType} className="w-12 h-12" />
                  ) : (
                    <Lock className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <span className="text-[11px] font-black text-purple-950 text-center leading-tight">
                  {isUnlocked ? sticker.name : "Locked (10★)"}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
