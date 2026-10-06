# React 19 examples

A small Vite + React 19 project for trying out new React 19 APIs.

## What is in here

- `src/useHook.jsx` - the `use()` hook with `<Suspense>`: fetches a random joke from `https://api.chucknorris.io` and suspends while the promise resolves.
- `src/App.jsx` - renders the example.

## Scripts

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run lint
npm run preview
```

## Tooling (updated 2026-10-06)

React 19.3, Vite 8, @vitejs/plugin-react 6, ESLint 9 (flat config). Requires Node ^20.19 or >=22.12.
