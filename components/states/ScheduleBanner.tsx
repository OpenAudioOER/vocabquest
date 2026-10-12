"use client";

import React, { useState } from "react";
import { ScheduleMilestone, STATE_TEST_SCHEDULE, UnitType, FocusType } from "../../data/states/scheduleData";
import { Calendar, Target, ChevronRight, X, CheckCircle2, Sparkles, RotateCcw, MapPin, Building2, Layers } from "lucide-react";

interface ScheduleBannerProps {
  currentMilestone: ScheduleMilestone;
  activeUnit: UnitType;
  activeFocus: FocusType;
  onSelectMilestone: (milestone: ScheduleMilestone) => void;
  onResetToCurrentSchedule: () => void;
}

export const ScheduleBanner: React.FC<ScheduleBannerProps> = ({
  currentMilestone,
  activeUnit,
  activeFocus,
  onSelectMilestone,
  onResetToCurrentSchedule,
}) => {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);

  // Check if user is currently customized away from the schedule target
  const isCustomized = activeUnit !== currentMilestone.unit || activeFocus !== currentMilestone.focus;

  return (
    <>
      {/* Kid-friendly Schedule Card */}
      <div className="w-full max-w-5xl mx-auto px-4 mb-4">
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 p-0.5 rounded-3xl shadow-lg">
          <div className="bg-white/95 backdrop-blur-md rounded-[22px] px-4 py-3 md:px-6 md:py-3.5 flex flex-col md:flex-row items-center justify-between gap-3">
            
            {/* Left: Target Badge & Details */}
            <div className="flex items-center space-x-3 text-left w-full md:w-auto">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center shadow-md shrink-0">
                <Target className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-300">
                    🎯 Class Target: {currentMilestone.title}
                  </span>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-500" />
                    {currentMilestone.displayDate}
                  </span>
                </div>
                <h2 className="text-sm md:text-base font-extrabold text-slate-800 mt-0.5">
                  {currentMilestone.unitLabel} • <span className="text-purple-600">{currentMilestone.focusLabel}</span>
                </h2>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              {isCustomized && (
                <button
                  onClick={onResetToCurrentSchedule}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition border border-slate-300 shadow-sm"
                  title="Snap back to current class assignment"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-orange-500" />
                  <span>Class Target</span>
                </button>
              )}

              <button
                onClick={() => setIsTimelineOpen(true)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-black bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg transition transform active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Class Schedule</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Modal */}
      {isTimelineOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border-4 border-orange-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 md:p-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Calendar className="w-6 h-6" />
                <div>
                  <h3 className="font-extrabold text-lg md:text-xl">2026–2027 State Test Schedule</h3>
                  <p className="text-xs text-orange-100">Tap any test to jump to that practice mission!</p>
                </div>
              </div>
              <button
                onClick={() => setIsTimelineOpen(false)}
                className="p-1.5 bg-white/20 hover:bg-white/30 rounded-xl transition text-white"
                aria-label="Close schedule"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body / Timeline Cards */}
            <div className="p-4 md:p-6 overflow-y-auto space-y-3">
              {STATE_TEST_SCHEDULE.map((m) => {
                const isCurrent = m.id === currentMilestone.id;
                const isSelected = activeUnit === m.unit && activeFocus === m.focus;

                return (
                  <div
                    key={m.id}
                    onClick={() => {
                      onSelectMilestone(m);
                      setIsTimelineOpen(false);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border-2 transition-all transform hover:-translate-y-0.5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-purple-50 border-purple-500 ring-2 ring-purple-300"
                        : isCurrent
                        ? "bg-amber-50/70 border-amber-400 hover:border-amber-500"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm ${
                          isSelected
                            ? "bg-purple-600 text-white"
                            : isCurrent
                            ? "bg-amber-500 text-white animate-bounce"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        #{m.testNumber}
                      </div>

                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-sm md:text-base text-slate-800">
                            {m.title}
                          </h4>
                          {isCurrent && (
                            <span className="text-[10px] font-black uppercase bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Sparkles className="w-3 h-3 text-amber-600" /> Active Mission
                            </span>
                          )}
                          {isSelected && !isCurrent && (
                            <span className="text-[10px] font-black uppercase bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full">
                              Currently Playing
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-semibold">{m.displayDate}</p>
                        <p className="text-xs text-slate-600 mt-1">{m.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-center shrink-0">
                      <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs flex items-center gap-1">
                        {m.unit === "unit1" ? (
                          <MapPin className="w-3 h-3 text-sky-500" />
                        ) : m.unit === "unit2" ? (
                          <MapPin className="w-3 h-3 text-emerald-500" />
                        ) : (
                          <Layers className="w-3 h-3 text-amber-500" />
                        )}
                        {m.unit === "unit1" ? "Group A" : m.unit === "unit2" ? "Group B" : "All 50"}
                      </span>

                      <span className="text-xs font-black px-2.5 py-1 rounded-xl bg-purple-100 text-purple-800 border border-purple-200 shadow-xs flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-purple-600" />
                        {m.focus === "states" ? "States" : m.focus === "capitals" ? "Capitals" : "States & Capitals"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-100 border-t border-slate-200 text-center">
              <button
                onClick={() => setIsTimelineOpen(false)}
                className="px-6 py-2 rounded-xl text-sm font-bold bg-slate-800 hover:bg-slate-900 text-white transition shadow-sm"
              >
                Close Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
