# React Kit

A React component library workspace built with TypeScript, Vite, Storybook, and live-editable documentation.

## Documentation Site

- [https://huadylan.com/react-kit/storybook/](https://huadylan.com/react-kit/storybook/)
- Getting started guide: [`documentation/GETTING_STARTED.md`](/Users/dylanhua/Desktop/Coding/Personal/react-kit/documentation/GETTING_STARTED.md)

## Development

1. Install dependencies

```bash
yarn
```

2. Start Storybook

```bash
yarn storybook
```

3. Serve the static documentation shell

```bash
yarn docs:dev
```

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - build the package
- `npm run build:docs` - build Storybook into `documentation/storybook`
- `npm run storybook` - start Storybook locally
- `npm run build-storybook` - build Storybook into `storybook-static`
- `npm run docs:dev` - serve the `documentation/` folder locally
- `npm run typecheck` - run TypeScript without emitting files
- `npm run lint` - run ESLint on `src`
- `npm run test` - run Vitest
- `npm run validate` - run typecheck, lint, and tests

## Contribution

See [CONTRIBUTING.md](/Users/dylanhua/Desktop/Coding/Personal/react-kit/CONTRIBUTING.md)
