# Monthly Expense Tracker

Most budgeting apps want you to categorise every coffee. I wanted the answer to one
question instead: **what does my life cost per month before I spend anything?**

Rent, insurance, subscriptions, the car tax that lands once a year — they all arrive on
different schedules, which makes them impossible to compare at a glance. This app
normalises everything to a monthly figure.

```
Car insurance     720 € / year      →   60 € / month
Phone              30 € / month     →   30 € / month
Gym               180 € / quarter   →   60 € / month
                                        ────────────
                                        150 € / month
```

**Status: early.** The application shell works — navigation, theming, translations. The
expense screens themselves are the next piece of work, so there is no data in the app yet.

## Stack

| | |
|---|---|
| Framework | Angular 21, standalone components, signals |
| UI | PrimeNG 21 with the Aura theme |
| Language | TypeScript 5.9, strict mode |
| Tests | Vitest |
| Planned | MongoDB and a REST API for persistence |

## Running it locally

You need Node `^20.19`, `^22.12`, or `>=24`, and npm.

```bash
git clone https://github.com/nickhammann/monthly-expense-tracker.git
cd monthly-expense-tracker/frontend
npm install
npm start
```

That serves the app on <http://localhost:4200> and reloads on every file change. There is
no backend yet, so there is nothing to configure and no environment variables to set.

| Command | What it does |
|---|---|
| `npm start` | development server on port 4200 |
| `npm run build` | production build into `frontend/dist/` |
| `npm test` | unit tests, single run |
| `npm run watch` | rebuild on change, development configuration |

## How it is put together

```
frontend/src/app/
├── core/
│   ├── config/      app metadata
│   └── i18n/        translations and the language service
├── layout/
│   ├── top-nav/
│   └── sidebar/
└── pages/           empty for now — this is where the expense screens go
```

Three decisions worth a look if you are reading the code:

**Translations are typed, and German is the source of truth.** The German object defines
the shape; every other language has to satisfy it.

```ts
const de = { nav: { dashboard: 'Übersicht' /* … */ } };

export type Translation = typeof de;   // values widen to `string`
const en: Translation = { /* … */ };   // missing key → compile error
```

Leaving off `as const` is what makes this work: the values widen to `string`, so English
has to match the structure without being forced to repeat the German text. Adding a key in
one language and forgetting the other breaks the build instead of shipping a blank label.

**Colours pass through a single layer.** PrimeNG ships two kinds of CSS variable that look
alike but behave very differently — semantic roles such as `--p-text-color` follow the
active theme, while palette steps such as `--p-surface-50` are fixed values that do not.
Mixing them up gets you a white sidebar in dark mode. Every app-specific surface is
therefore declared once in `styles.scss` and remapped for dark mode in the same place, so
no component holds a colour of its own.

**PrimeNG stays on 21 deliberately.** Version 22 moved from MIT to a commercial dual
licence that needs a licence key even in the free Community tier, with annual renewal.
Version 21 is MIT with no strings, which fits a project like this better.

## What's next

- Expense screens, recurring costs first, then one-time costs
- Billing intervals (monthly, quarterly, semi-annual, yearly) and the normalisation logic
- A MongoDB backend with a REST API to replace the current in-memory state
- Categories, and a monthly total worth putting on a dashboard
