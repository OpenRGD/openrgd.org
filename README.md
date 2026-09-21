# openrgd.org

Official website repository for **OpenRGD — Robot Graph Definition**.

This repository contains the independent English-language frontend for `openrgd.org`.

## Product boundary

The website is editorially and visually independent from Italia Robotica.

Shared infrastructure may include:
- canonical robot facts and specifications;
- organizations;
- technologies;
- applications;
- source provenance;
- selected Lab/research entities.

Not shared by default:
- narrative;
- long-form editorial content;
- SEO strategy;
- information architecture;
- navigation;
- site-specific summaries and positioning.

## Shared database safety

The Supabase project is shared with other applications. This website consumes the existing multi-site layers and must not treat the database as site-owned infrastructure.

See [docs/SHARED_DATABASE_BOUNDARY.md](docs/SHARED_DATABASE_BOUNDARY.md).

## Visual direction

The frontend uses a dark, research-grade, specification-first identity:
- graphite surfaces;
- cyan semantic accent;
- monospace for machine-readable/stateful information;
- visible maturity states;
- architecture and runtime boundaries as first-class visual elements;
- restrained motion with reduced-motion support.

## Canonical technical source

The OpenRGD standard and toolchain live in:

https://github.com/OpenRGD/openrgd
