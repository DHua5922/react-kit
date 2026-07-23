# Contributing to React Kit

Thank you for contributing to React Kit. Contributions may include bug reports,
documentation improvements, tests, fixes, and new components.

## Before You Start

For significant API changes or new components, open an issue before beginning
implementation. This gives maintainers and contributors an opportunity to agree
on scope, behavior, accessibility responsibilities, and API design.

Small fixes and documentation improvements can be submitted directly as pull
requests.

## Development Setup

### Prerequisites

- Node.js 24, matching the CI and release workflows
- Yarn 1.x
- Git

### Install and Run

1. Fork and clone the repository:

   ```bash
   git clone https://github.com/<your-username>/react-kit.git
   cd react-kit
   ```

2. Install the locked dependencies:

   ```bash
   yarn install --frozen-lockfile
   ```

3. Start Storybook:

   ```bash
   yarn storybook
   ```

4. Run the complete validation suite before submitting a pull request:

   ```bash
   yarn validate
   yarn build
   yarn build-storybook
   ```

`yarn validate` checks formatting, TypeScript, ESLint, and the Vitest suite.
The library and Storybook builds catch packaging and documentation issues that
unit tests may not reveal.

## Useful Commands

| Command                | Purpose                                      |
| ---------------------- | -------------------------------------------- |
| `yarn storybook`       | Start Storybook locally                      |
| `yarn test`            | Run the test suite with coverage             |
| `yarn test:ui`         | Open the Vitest UI with coverage             |
| `yarn typecheck`       | Check TypeScript without emitting files      |
| `yarn lint`            | Run ESLint with zero warnings allowed        |
| `yarn lint:fix`        | Apply safe ESLint fixes                      |
| `yarn format`          | Format supported repository files            |
| `yarn format:check`    | Check formatting without changing files      |
| `yarn build`           | Build the ESM library, CSS, and declarations |
| `yarn build-storybook` | Build Storybook locally                      |
| `yarn build:docs`      | Build Storybook into the documentation site  |
| `yarn validate`        | Run formatting, typecheck, lint, and tests   |

## Repository Structure

```text
src/
├── components/
│   └── ComponentName/
│       ├── index.tsx               Public component and compound exports
│       ├── index.module.css        Component-scoped styles
│       ├── index.stories.tsx       Executable Storybook examples
│       ├── index.mdx               Narrative documentation
│       ├── index.test.tsx          Component tests
│       └── Subcomponent/           Optional compound subcomponents
├── internal/                       Documentation-only utilities
├── types/                          Shared public types
├── setupTests.ts                   Vitest setup
└── index.ts                        Package entry point
```

Follow the established neighboring component when the exact structure differs.
Do not edit generated files in `dist/` or `storybook-static/`.

## Component Guidelines

### Public API

- Prefer a small, composable API over many narrowly specialized props.
- Preserve native element props when a component wraps an HTML element.
- Name public props types after their components, such as `AccordionProps` and
  `AccordionHeaderProps`.
- Export every public props type through the component index and `src/index.ts`.
- Forward refs to the underlying DOM element when one exists. A component that
  renders no DOM element, such as a context-only provider, should not invent a
  ref target.
- Use controlled APIs when state ownership belongs to the consumer. Callbacks
  should report intent; they should not imply that controlled state changed.
- Treat breaking changes deliberately and document migration requirements.

Example:

```tsx
import { forwardRef, type HTMLAttributes } from 'react'

export interface ExampleProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean
}

const Example = forwardRef<HTMLDivElement, ExampleProps>(function Example(
  { selected = false, ...props },
  ref
) {
  return <div ref={ref} data-selected={selected || undefined} {...props} />
})

export default Example
```

### Native Elements

- Use the most specific React attribute type available, such as
  `ButtonHTMLAttributes<HTMLButtonElement>`.
- Default library-owned buttons to `type="button"` unless submission is their
  purpose. Consumers may override the type when the API permits it.
- Pass native props and `data-*`/`aria-*` attributes through to the underlying
  element.
- Avoid replacing browser behavior with custom behavior unless the component
  requires it.

### Compound Components

Compound APIs use `Object.assign` to expose related parts:

```tsx
const Example = Object.assign(ExampleParent, {
  Item: ExampleItem,
})
```

Keep subcomponents independently typed, testable, and documented. Export their
props types even when users normally access them through the compound API.

## Accessibility

- Start with semantic HTML and native keyboard behavior.
- Ensure library-provided state is represented accurately, for example with
  `aria-expanded` when the component owns that disclosure state.
- Do not claim an ARIA pattern unless the required semantics, focus management,
  and keyboard behavior are implemented.
- Generic or flexible primitives may leave role-specific ARIA relationships and
  keyboard behavior to consumers. Document that responsibility clearly and
  pass the relevant native attributes through.
- Document when consumers must provide accessible names for icon-only controls.
- Test keyboard interaction and focus behavior that the library itself provides.

Accessibility is shared work: library defaults must be truthful and usable,
while consumer responsibilities must be explicit in the component docs.

## Styling

- Use colocated CSS Modules named `index.module.css`.
- Keep selectors scoped to the component and reuse existing naming patterns.
- Preserve consumer `className` and `style` values where the public API accepts
  them.
- Prefer CSS custom properties for values consumers may reasonably customize.
- Avoid global resets and selectors that can affect the consuming application.
- Check the production CSS output with `yarn build` after changing styles.

Consumers load the published stylesheet through:

```tsx
import '@dhua5922/react-kit/style.css'
```

## Testing

- Place tests beside the component in `index.test.tsx`.
- Use Testing Library queries that reflect how users and assistive technologies
  find elements. Prefer role and accessible-name queries where appropriate.
- Use `userEvent` for user interactions.
- Test observable behavior instead of implementation details.
- For controlled components, verify emitted callbacks separately from state
  supplied by the consumer.
- Add regression coverage for every bug fix.
- Do not ignore new React, JSDOM, or unhandled-promise warnings without
  understanding and documenting their source.

Coverage is useful evidence, but meaningful assertions are more important than
maximizing a percentage.

## Storybook and Documentation

Keep executable stories and narrative documentation separate:

- `index.stories.tsx` owns metadata and executable examples.
- `index.mdx` owns usage guidance, accessibility notes, and prop documentation.

Use the standard CSF typing pattern:

```tsx
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Example',
  component: Example,
  tags: ['!autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Example>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  tags: ['!dev'],
  render: () => <Example />,
}
```

Supply required component args at the meta or story level when Storybook's type
checking requires them. Documentation must describe actual behavior, including
which state and accessibility relationships consumers own.

## Dependencies and Packaging

- Keep React and ReactDOM as peer dependencies and local dev dependencies.
- Put packages required by the published runtime in `dependencies`.
- Put tests, documentation tools, and build-only packages in `devDependencies`.
- Externalize runtime dependencies that should be resolved and deduplicated by
  the consuming application.
- Run `yarn build` after changing exports or dependencies and inspect `dist/`.
- Use `npm pack --dry-run` when changing package metadata or published files.
- Keep the stylesheet and public types reachable through the package export map.

Commit `yarn.lock` whenever dependency resolution changes.

## Pull Requests

Create a focused branch from `main`, keep changes scoped, and avoid unrelated
formatting or generated-file churn.

A pull request should include:

- A clear description of the problem and solution
- Tests for behavior changes
- Storybook examples and MDX updates for public API changes
- Notes about breaking changes or consumer responsibilities
- Screenshots for meaningful visual changes
- Confirmation that validation and production builds pass

Before requesting review, confirm:

- [ ] `yarn validate` passes
- [ ] `yarn build` passes
- [ ] `yarn build-storybook` passes for documentation changes
- [ ] Public props and refs are typed and exported
- [ ] Accessibility behavior and consumer responsibilities are documented
- [ ] The change does not unintentionally alter the published package contents

## Bug Reports

[Open an issue](https://github.com/DHua5922/react-kit/issues/new) with:

- React Kit and React versions
- Browser, operating system, and Node.js version when relevant
- Minimal reproduction or repository
- Steps to reproduce
- Expected and actual behavior
- Error messages, screenshots, or recordings when useful

Never include credentials, tokens, or private user data in an issue or
reproduction.

## Feature Requests

Describe the user problem before proposing an API. Include the use case,
possible alternatives, accessibility implications, and examples from similar
libraries when helpful.

## Conduct

Be respectful, constructive, and welcoming. Harassment, discrimination, and
personal attacks are not acceptable in project spaces.

## License

By contributing, you agree that your contributions are licensed under the
project's [MIT License](./LICENSE).
