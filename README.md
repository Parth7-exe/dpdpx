# DPDPX by JODETX — Angular

DPDP Act 2023 **Privacy & Consent Management** admin portal, converted from a single-file HTML/JS app into an **Angular 17** project — with **animated transitions, skeleton loaders, and a custom animated brand mark** added on top.

## Run it

```bash
npm install
npm start          # ng serve  ->  http://localhost:4200
```

Production build:

```bash
npm run build      # outputs to dist/dpdpx-angular
```

> Requires Node 18.13+ (Node 20+ recommended) and internet access for the first `npm install` (to fetch the Angular packages).

## Login

The demo login is pre-filled. Use the pre-filled credentials, the **Continue with SSO** button, or any email + password.

## What's inside

All **44 modules** of the original app are preserved exactly, with nothing dropped:

- **Consent Management** — Fiduciaries, Processors, Activities, Purposes, Notices, Data Flow (connected node graph), Cookies, Assessments, Offline Consents, Consent Removal, Data Deletion
- **Data Governance** — Data Discovery, Content Filtering, ROPA Recommendations, DSR, Data Field Inventory, Data Protection, Policy Violations, User Directory, DSPM
- **Device Policies** — Android (Policies / Geo-Fencing / Message Broadcasting), Apple, Windows, Devices, Device Groups
- **Email DLP** — Policies, Providers, Quarantine
- **Admin** — Users, API Keys, Audit, Branding, Integrity, Notifications, Sign-in methods, Onboarding Requests, SLA
- **Analytics** — Risk Analytics, Reports; plus Notification Channels & Templates

## Architecture

```
src/
  index.html              app shell entry
  styles.css              ORIGINAL stylesheet (verbatim) + additive animation/skeleton/logo styles
  favicon.svg             custom brand mark favicon
  assets/
    dpdpx-core.js         the complete application engine, preserved verbatim (all 44 modules)
  app/
    app.component.ts       hosts the engine, drives the boot splash
    app.config.ts          providers (animations + router)
    app.routes.ts          catch-all so deep links don't 404 in dev
    core/
      dpdpx-engine.service.ts   injectable service: mounts the shell, boots the engine,
                                and wraps navigation with skeleton loaders + entrance animations
      shell.ts                  the static shell DOM (login / sidebar / topbar / view / modal-root)
      animations.ts             reusable Angular animation triggers
    components/
      logo/                custom animated DPDPX brand mark (gradient + draw-in check + sheen)
      boot-splash/         animated splash shown during engine boot
      skeleton/            reusable shimmer skeleton
```

### Why the engine is hosted as a unit (important)

The original UI renders every screen as HTML strings that depend on **inline `on*` handlers** (e.g. `onclick="go('dsr')"`, `onclick="closeModal()"`) plus a handful of `window`-level helpers. Those handlers only resolve in the **global scope**. Re-hosting the engine through a classic `<script>` element guarantees **byte-for-byte behavioural fidelity** for all 44 modules — every render function, modal, action menu, CRUD flow, search filter, CSV export, the Data Flow graph, the resizable sidebars, toasts and `localStorage` persistence behave exactly as the source. A blind line-by-line rewrite into 44 separate components would have risked silently breaking some of that logic; this approach does not.

The **Angular layer** then provides real structure and the requested polish:

- **Dependency injection / lifecycle** via `DpdpxEngineService` and `AppComponent`.
- **Skeleton loaders** on every in-app navigation (the engine's `go()` is wrapped, not modified).
- **Animated view transitions** — fade/rise entrance replayed on each route, staggered cards & rows.
- **Custom animated logo** — gradient fill, animated check draw-in, and a periodic sheen; used in the splash and available as `<app-logo>`. The original in-app logos are preserved too.
- **Boot splash** with an animated brand mark and progress bar.
- `prefers-reduced-motion` is respected.

## Persistence

The app stores user-created records (policies, classifications, app configs, etc.) in `localStorage`, exactly as the original. Clear site data to reset to seed content.
