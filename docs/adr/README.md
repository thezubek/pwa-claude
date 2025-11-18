# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for PWA Claude.

## What is an ADR?

An Architecture Decision Record (ADR) captures an important architectural decision made along with its context and consequences.

## Format

Each ADR follows this structure:

- **Title**: Short noun phrase
- **Status**: Proposed | Accepted | Deprecated | Superseded
- **Context**: What is the issue we're seeing that is motivating this decision?
- **Decision**: What is the change we're proposing/making?
- **Consequences**: What becomes easier or more difficult as a result?

## Index

| ADR | Title | Status |
|-----|-------|--------|
| [ADR-001](adr-001-nuxt-framework-choice.md) | Choosing Nuxt 3 for Frontend Framework | Accepted |
| [ADR-002](adr-002-monorepo-structure.md) | Monorepo with Turborepo | Accepted |
| [ADR-003](adr-003-alokai-sdk.md) | Alokai SDK for E-commerce Integration | Accepted |
| [ADR-004](adr-004-composables-over-store.md) | Composables Over Vuex/Pinia | Accepted |
| [ADR-005](adr-005-typescript-strict-mode.md) | TypeScript Strict Mode | Accepted |

## Creating New ADRs

1. Copy `template.md` to `adr-XXX-title.md`
2. Fill in the sections
3. Submit for review
4. Update this README index

---

**Last Updated:** 2025-11-18
