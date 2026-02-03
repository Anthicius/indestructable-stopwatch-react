# React Indestructible Stopwatch (`useRef` Pattern)

A precise stopwatch application that demonstrates the distinction between **Visual State** (what the user sees) and **Mutable References** (what the app remembers) using React's `useRef` hook.

## Features

* **Persisted Timer Logic:** Uses `useRef` to store the Interval ID, ensuring the timer "engine" survives component re-renders without resetting.
* **Manual Lifecycle Control:** Intentionally bypasses `useEffect` to give the user full manual control (Start/Stop) via event handlers.
* **Race Condition Prevention:** The "Start" logic includes checks to prevent multiple intervals from stacking if the button is clicked twice.
* **Formatted Display:** Converts raw seconds into a readable `HH : MM : SS` format.
* **State Separation:** Cleanly separates the UI update cycle (`useState`) from the logic data cycle (`useRef`).

## Architectural Concepts

* **The "Pocket" Model (`useRef`):** Demonstrates how to store "infrastructure data" (like timer IDs) that needs to persist across renders but **should not** trigger a re-render when changed.
* **Mutable vs. Immutable:** Shows how to safely mutate `ref.current` for logic tracking, while keeping `state` immutable for UI consistency.
* **Event-Driven Architecture:** Managing side effects (intervals) strictly through user interaction events rather than component mount lifecycles.

## Tech Stack

* React (`useState`, `useRef`)
* CSS (Variables, Flexbox, Card Layout)
* Vite

<img width="1722" height="763" alt="image" src="https://github.com/user-attachments/assets/d68e60f0-b4ef-4b0b-8ba9-9ac69c4417a6" />
<img width="1722" height="763" alt="image" src="https://github.com/user-attachments/assets/30c06d22-7588-4110-9441-f75922ca9b88" />
