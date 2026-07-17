# Playwright Features Playground

A hands-on sandbox for exploring, testing, and documenting Playwright features. This project contains example test suites covering both core and advanced Playwright capabilities.

## Prerequisites

- Node.js
- npm

```bash
npm install
npx playwright install
```

## Index

### Advance Functionalities

- [Screencast](/tests/advance-functionalities/screencast/)

## Running Tests

```bash
# Run all tests (excluding core-functionalities)
npx playwright test

# Run only advance-functionalities
npx playwright test tests/advance-functionalities/

# Run a specific file
npx playwright test tests/advance-functionalities/screencast/screencast-all-steps.spec.ts

# Run with UI mode
npx playwright test --ui

# Run in headed mode
npx playwright test --headed
```
