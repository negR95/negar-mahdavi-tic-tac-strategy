# ThreeShift

A Persian, right-to-left strategy game based on tic-tac-toe. Each player can
keep only three marks on the board, so placing a fourth mark removes the oldest
one and changes the available winning paths.

## Features

- Fully Persian interface with native RTL layout
- Responsive game board for mobile and desktop
- Oldest-mark indicator before a mark is removed
- Winning-line highlighting and draw detection
- Match score that continues across rounds
- Keyboard-friendly controls and accessible board labels
- Persian number formatting throughout the interface

## Game rules

1. Players **X** and **O** take turns choosing an empty cell.
2. A player can have at most three marks on the board.
3. Placing a fourth mark removes that player's oldest mark first.
4. The first player to complete a row, column, or diagonal wins.
5. The round ends in a draw after 20 moves without a winner.

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)

## Getting started

### Prerequisites

- Node.js `20.19+` or `22.12+`
- [pnpm](https://pnpm.io/)

### Installation

```bash
git clone <repository-url>
cd test-vite
pnpm install
pnpm dev
```

Vite will print the local development URL in the terminal, usually
`http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server with hot reload |
| `pnpm build` | Type-check and create a production build |
| `pnpm lint` | Check the codebase with ESLint |
| `pnpm preview` | Preview the production build locally |

## Project structure

```text
src/
├── components/   # Reusable interface and game components
├── constants/    # Board configuration and game limits
├── hooks/        # React game-state management
├── pages/        # Page-level composition
├── types/        # Shared TypeScript domain types
├── utils/        # Pure game rules and formatting helpers
├── App.tsx       # Application root
├── App.css       # Small global interaction styles
├── index.css     # Tailwind theme and global RTL styles
└── main.tsx      # React entry point
```

## Implementation notes

The game rules are implemented as pure functions in `src/utils/game.ts`, while
`src/hooks/useTicTacStrategy.ts` connects those rules to React state. UI
components receive state through props and do not contain game transitions.
Conditional Tailwind classes are resolved directly with `tailwind-merge`.

The document language and direction are defined at the HTML level with
`lang="fa"` and `dir="rtl"`, allowing browsers and assistive technologies to
handle the Persian interface correctly.