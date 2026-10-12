import React, { useState } from "react";
import { Header, StateExplorerMode } from "../components/states/Header";
import { MapTapQuiz } from "../components/states/MapTapQuiz";
import { ExamQuiz } from "../components/states/ExamQuiz";
import { ShapeDetective } from "../components/states/ShapeDetective";
import { SpellingBee } from "../components/states/SpellingBee";
import { ScheduleBanner } from "../components/states/ScheduleBanner";
import { UNIT_1_STATES, UNIT_2_STATES, ALL_50_STATES } from "../data/states/statesData";
import { getCurrentScheduleMilestone, UnitType, FocusType, ScheduleMilestone } from "../data/states/scheduleData";
import { BookOpen, Sparkles } from "lucide-react";

export const StatesExplorer: React.FC = () => {
  // Determine upcoming milestone based on today's calendar date
  const [currentMilestone] = useState<ScheduleMilestone>(() => getCurrentScheduleMilestone());

  // Default mode to the multi-question Map Exam
  const [currentMode, setMode] = useState<StateExplorerMode>("exam");

  // Automatically default active unit & focus to current class schedule target
  const [activeUnit, setActiveUnit] = useState<UnitType>(currentMilestone.unit);
  const [activeFocus, setActiveFocus] = useState<FocusType>(currentMilestone.focus);

  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("states_explorer_longest_streak");
        return saved ? parseInt(saved, 10) || 0 : 0;
      } catch (e) {
        return 0;
      }
    }
    return 0;
  });

  const activeDataset = activeUnit === "unit1" ? UNIT_1_STATES : activeUnit === "unit2" ? UNIT_2_STATES : ALL_50_STATES;

  const handleSuccess = () => {
    setScore((prev) => prev + 10);
    setStreak((prev) => {
      const nextStreak = prev + 1;
      setLongestStreak((curBest) => {
        if (nextStreak > curBest) {
          try {
            localStorage.setItem("states_explorer_longest_streak", nextStreak.toString());
          } catch (e) {}
          return nextStreak;
        }
        return curBest;
      });
      return nextStreak;
    });
  };

  const handleFailure = () => {
    setStreak(0);
  };

  const handleSelectMilestone = (m: ScheduleMilestone) => {
    setActiveUnit(m.unit);
    setActiveFocus(m.focus);
  };

  const handleResetToCurrentSchedule = () => {
    setActiveUnit(currentMilestone.unit);
    setActiveFocus(currentMilestone.focus);
  };

  return (
    <div className="min-h-screen pb-16 flex flex-col items-center justify-between">
      <div className="w-full">
        {/* Main Header */}
        <Header
          currentMode={currentMode}
          setMode={setMode}
          activeUnit={activeUnit}
          setActiveUnit={setActiveUnit}
          activeFocus={activeFocus}
          setActiveFocus={setActiveFocus}
          score={score}
          streak={streak}
          longestStreak={longestStreak}
        />

        {/* Schedule & Class Target Banner */}
        <ScheduleBanner
          currentMilestone={currentMilestone}
          activeUnit={activeUnit}
          activeFocus={activeFocus}
          onSelectMilestone={handleSelectMilestone}
          onResetToCurrentSchedule={handleResetToCurrentSchedule}
        />

        {/* Active Study Mode Workspace */}
        <div className="px-4 py-2">
          {currentMode === "map" && (
            <MapTapQuiz
              dataset={activeDataset}
              focus={activeFocus}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          )}

          {currentMode === "exam" && (
            <ExamQuiz
              dataset={activeDataset}
              focus={activeFocus}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          )}

          {currentMode === "shape" && (
            <ShapeDetective
              dataset={activeDataset}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          )}

          {currentMode === "spelling" && (
            <SpellingBee
              dataset={activeDataset}
              onSuccess={handleSuccess}
              onFailure={handleFailure}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs md:text-sm text-slate-400 max-w-xl mx-auto px-4">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span className="font-bold text-slate-300">
            {activeUnit === "unit1"
              ? "Map Group A: 23 Eastern & Southern States"
              : activeUnit === "unit2"
              ? "Map Group B: 27 Midwest, West & Non-Contiguous States"
              : "Entire Map: All 50 US States"}
            {" • "}
            {activeFocus === "states" ? "States Only" : activeFocus === "capitals" ? "Capitals Only" : "States & Capitals"}
          </span>
        </div>
        <p className="flex items-center justify-center gap-1">
          <span>Mastering US geography & state capitals for 5th-grade learners!</span>
          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
        </p>
      </footer>
    </div>
  );
};

export default StatesExplorer;
