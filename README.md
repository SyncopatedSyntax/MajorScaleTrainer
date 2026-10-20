# Major Scale Trainer

Part of [Fretworks](https://fretworks.vercel.app) — live at
[fretworks.vercel.app/major](https://fretworks.vercel.app/major/).

Learn the major scale in five CAGED shapes (G, E, D, C, A),
three-notes-per-string and the full neck; its seven modes and the seven chords
of the key; and what its 4 and 7 do against the major pentatonic, Mixolydian
and Lydian. Spaced-repetition practice with shape, 4-and-7 and mode drills.

Shares its code with [Natural Minor Trainer](https://github.com/SyncopatedSyntax/NaturalMinorTrainer)
and [Harmonic Minor Trainer](https://github.com/SyncopatedSyntax/HarmonicMinorTrainer)
— only `src/scale.js` differs. Its five shapes are the natural minor charts,
read from the relative major.

```
npm install
npm run dev      # http://localhost:5190/major/
npm run verify   # correctness gate — every shape re-derived from first principles
npm run build
```

See `CLAUDE.md` for how it is built and why.
