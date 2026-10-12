export type UnitType = "unit1" | "unit2" | "all";
export type FocusType = "states" | "capitals" | "both";

export interface ScheduleMilestone {
  id: number;
  testNumber: number;
  title: string;
  testDateStr: string; // ISO date for comparison: YYYY-MM-DD
  displayDate: string; // e.g. Friday, September 11, 2026
  unit: UnitType;
  unitLabel: string; // "Map Group A" | "Map Group B" | "Entire Map"
  focus: FocusType;
  focusLabel: string; // "States Only" | "State Capitals Only" | "States & Capitals"
  description: string;
}

export const STATE_TEST_SCHEDULE: ScheduleMilestone[] = [
  {
    id: 1,
    testNumber: 1,
    title: "State Test #1",
    testDateStr: "2026-09-11",
    displayDate: "Friday, September 11, 2026",
    unit: "unit1",
    unitLabel: "Map Group A (23 States)",
    focus: "states",
    focusLabel: "States Only",
    description: "Learn and locate the 23 Group A states on the map."
  },
  {
    id: 2,
    testNumber: 2,
    title: "State Test #2",
    testDateStr: "2026-10-09",
    displayDate: "Friday, October 9, 2026",
    unit: "unit2",
    unitLabel: "Map Group B (27 States)",
    focus: "states",
    focusLabel: "States Only",
    description: "Learn and locate the 27 Group B states on the map."
  },
  {
    id: 3,
    testNumber: 3,
    title: "State Test #3",
    testDateStr: "2026-11-13",
    displayDate: "Thursday, November 13, 2026",
    unit: "all",
    unitLabel: "Entire Map (All 50 States)",
    focus: "states",
    focusLabel: "States Only",
    description: "Grand Map Review! Identify all 50 US States across the country."
  },
  {
    id: 4,
    testNumber: 4,
    title: "State Test #4",
    testDateStr: "2026-12-11",
    displayDate: "Friday, December 11, 2026",
    unit: "unit1",
    unitLabel: "Map Group A (23 States)",
    focus: "capitals",
    focusLabel: "State Capitals Only",
    description: "Master the capital cities of the 23 Group A states."
  },
  {
    id: 5,
    testNumber: 5,
    title: "State Test #5",
    testDateStr: "2027-01-15",
    displayDate: "Friday, January 15, 2027",
    unit: "unit2",
    unitLabel: "Map Group B (27 States)",
    focus: "capitals",
    focusLabel: "State Capitals Only",
    description: "Master the capital cities of the 27 Group B states."
  },
  {
    id: 6,
    testNumber: 6,
    title: "State Test #6",
    testDateStr: "2027-02-12",
    displayDate: "Friday, February 12, 2027",
    unit: "all",
    unitLabel: "Entire Map (All 50 States)",
    focus: "capitals",
    focusLabel: "State Capitals Only",
    description: "Master every capital city for all 50 states!"
  },
  {
    id: 7,
    testNumber: 7,
    title: "State Test #7",
    testDateStr: "2027-03-12",
    displayDate: "Friday, March 12, 2027",
    unit: "unit1",
    unitLabel: "Map Group A (23 States)",
    focus: "both",
    focusLabel: "States & Capitals",
    description: "The Complete Challenge: State names AND capital cities for Group A."
  },
  {
    id: 8,
    testNumber: 8,
    title: "State Test #8",
    testDateStr: "2027-04-16",
    displayDate: "Friday, April 16, 2027",
    unit: "unit2",
    unitLabel: "Map Group B (27 States)",
    focus: "both",
    focusLabel: "States & Capitals",
    description: "The Complete Challenge: State names AND capital cities for Group B."
  },
  {
    id: 9,
    testNumber: 9,
    title: "State Test #9",
    testDateStr: "2027-05-14",
    displayDate: "Friday, May 14, 2027",
    unit: "all",
    unitLabel: "Entire Map (All 50 States)",
    focus: "both",
    focusLabel: "States & Capitals",
    description: "Ultimate Championship: All 50 states AND all 50 capitals!"
  }
];

/**
 * Returns the upcoming milestone based on the current date.
 * If today is before or on testDate, that test is the active goal.
 * If all scheduled tests have passed, returns the final milestone for end-of-year review.
 */
export function getCurrentScheduleMilestone(currentDate: Date = new Date()): ScheduleMilestone {
  const currentIso = currentDate.toISOString().slice(0, 10);
  
  // Find the first milestone whose test date is on or in the future
  for (const milestone of STATE_TEST_SCHEDULE) {
    if (milestone.testDateStr >= currentIso) {
      return milestone;
    }
  }

  // If beyond the last test date (after May 14, 2027), default to Test #9 (Full review)
  return STATE_TEST_SCHEDULE[STATE_TEST_SCHEDULE.length - 1];
}
