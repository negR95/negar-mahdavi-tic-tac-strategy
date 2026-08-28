import type { Player } from "../types/game";

export const BOARD_SIZE = 9;
export const MAX_MARKS = 3;
export const MAX_TURNS = 20;
export const PLAYERS = ["X", "O"] as const satisfies readonly Player[];

export const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

export const CELL_NAMES = [
  "بالا راست",
  "بالا وسط",
  "بالا چپ",
  "وسط راست",
  "مرکز",
  "وسط چپ",
  "پایین راست",
  "پایین وسط",
  "پایین چپ",
] as const;
