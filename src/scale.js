// The ONE file that differs between natural-minor-trainer,
// harmonic-minor-trainer and major-scale-trainer. Everything else in src/ and
// scripts/ is shared and must be kept identical in all three repos.
export const SCALE_ID = 'major';
export const TOOL_KEY = 'major';       // @fretworks/design registry key
export const PREFIX = 'mj_';           // localStorage prefix (sync + backup use it)
export const ACCENT = '#22d3ee';       // sky cyan
export const APP_NAME = 'Major Scale Trainer';
export const ICON_TEXT = 'maj';
