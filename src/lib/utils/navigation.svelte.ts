/**
 * Tracks whether the current visit has any in-app navigation history yet.
 * `afterNavigate`'s `from` is null on the very first page of a visit (a
 * fresh load, a shared link, a new tab) and set on every navigation after
 * that — exactly the signal `BackButton` needs to decide whether a real
 * `history.back()` is safe, or whether it should fall back to a normal link
 * to a sensible parent page instead.
 */
export const navState = $state({ hasInAppHistory: false });
