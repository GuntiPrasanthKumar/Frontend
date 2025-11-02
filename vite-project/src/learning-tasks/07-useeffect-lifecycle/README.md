# Topic 07: Side Effects with useEffect

## Key Concepts
- `useEffect` runs after render.
- Empty dependency array `[]` means execute once on mount.
- Dependencies in `[a, b]` re-trigger effect when values change.
- Return a cleanup function to cancel subscriptions, timers, or event listeners.