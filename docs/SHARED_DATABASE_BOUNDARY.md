# Shared database boundary

`openrgd.org` is a tenant of the shared Supabase project used by multiple applications.

This repository is **not** the owner of that database.

## Allowed by default

The website may:

- read through existing server-side `cms` RPCs;
- read canonical shared entities from the approved multi-site publication layer;
- create OpenRGD-specific content/publications through the existing tenant model;
- add site-local application code that consumes shared data;
- add additive, namespaced database objects only after explicit impact review.

## Not allowed by default

Website work must not:

- repurpose or mutate shared `public.*` runtime tables;
- rename or drop shared tables, columns, functions, policies, triggers or indexes;
- broaden RLS or grants for convenience;
- expose `SUPABASE_SERVICE_ROLE_KEY` to client code;
- change another application's tenant records;
- treat canonical shared entity descriptions as OpenRGD editorial copy;
- introduce a migration merely to make the frontend easier to implement.

## Data model rule

Shared canonical records should contain reusable facts.

Site-specific presentation belongs to site publication/content layers:

```text
canonical entity
      |
      +-- Italia Robotica publication / content
      |
      +-- OpenRGD publication / content
```

Narrative, SEO, information architecture and editorial positioning are independent by default.

## Operational rule

Any future migration initiated from this repository must be:

1. additive unless explicitly approved otherwise;
2. scoped to `cms`, `catalog`, `lab`, or a new dedicated namespace;
3. reviewed for cross-application impact;
4. reversible;
5. tested against existing tenants before production application.
