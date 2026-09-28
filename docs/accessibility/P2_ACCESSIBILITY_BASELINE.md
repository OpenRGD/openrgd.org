# OpenRGD P2 Accessibility Baseline

Status: **IMPLEMENTED BASELINE**
Review date: **2026-09-28**
Scope: `openrgd.org` public website

## Purpose

This record documents the P2 code-level accessibility hardening performed on the OpenRGD public website.

It is not a WCAG certification and does not claim independent assistive-technology testing.

## Existing controls confirmed

- document language is declared with `lang="en"`;
- primary and mobile navigation have explicit accessible labels;
- meaningful logo imagery has alt text;
- decorative ambient visuals are marked `aria-hidden`;
- visible keyboard focus styling exists for links, buttons, summaries and focusable controls;
- `prefers-reduced-motion: reduce` disables non-essential motion and reveal transitions;
- the mobile navigation uses native `details/summary` semantics;
- content pages use structured headings and a single primary page heading in the production crawl baseline.

## P2 changes

### Skip navigation

A global **Skip to main content** control is now the first focusable page control.

The root content wrapper has a stable `#main-content` target and programmatic focus support.

### Interactive domain explorer

The homepage domain explorer follows the ARIA tab model more closely:

- `role="tablist"`;
- one roving `tabIndex=0`, inactive tabs `tabIndex=-1`;
- `aria-selected`;
- explicit tab and panel IDs;
- `aria-controls` and `aria-labelledby`;
- Arrow Left/Right/Up/Down navigation;
- Home and End navigation;
- focusable tab panel;
- labeled region around the interactive explorer.

### High-contrast / forced colors

Focus indicators and the skip-link remain visible under `forced-colors: active`.

## Remaining manual verification

The following require periodic human/manual testing and are not proven by this code-level audit alone:

- NVDA / JAWS / VoiceOver reading order and announcements;
- keyboard-only traversal across representative desktop and mobile pages;
- browser zoom at 200% and 400%;
- contrast measurement for every dynamic CMS state and future visual component;
- touch-target behavior on small devices;
- usability of third-party consent UI supplied by ECM.

## Regression rule

New interactive UI must preserve:

- keyboard reachability;
- visible focus;
- semantic name/role/state;
- reduced-motion behavior where animation is non-essential;
- no keyboard trap;
- meaningful heading hierarchy and alternative text.

Accessibility issues should be treated as functional defects, not cosmetic polish.
