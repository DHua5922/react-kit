# Contributing to React Kit

We love your input! We want to make contributing to React Kit as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🚀 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies**: `npm install`
3. **Make your changes**
4. **Add tests** for any new functionality
5. **Update documentation** (README, Storybook stories)
6. **Ensure tests pass**: `npm test`
7. **Ensure linting passes**: `npm run lint`
8. **Submit a pull request**

## 🛠️ Development Setup

### Prerequisites

- Node.js 14+
- npm, yarn, or pnpm
- Git

### Setup Steps

1. **Clone your fork**

   ```bash
   git clone https://github.com/DHua5922/react-kit.git
   cd react-kit
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development**

   ```bash
   # Start Storybook for component development
   npm run storybook

   # Run tests in watch mode
   npm run test

   # Run linter
   npm run lint
   ```

4. **Make changes**
   - Add components in `src/components/`
   - Add tests alongside components
   - Add Storybook stories for documentation
   - Update README if needed

5. **Verify your changes**
   ```bash
   npm run build      # Ensure build works
   npm run test       # Run all tests
   npm run lint       # Check code quality
   npm run typecheck  # Verify TypeScript
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
│   └── Button/
│       ├── Button.tsx        # Component implementation
│       ├── Button.css        # Component styles
│       ├── Button.test.tsx   # Component tests
│       └── Button.stories.tsx # Storybook documentation
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── LiveCodeBlock.tsx   # Live code editing component
└── index.ts           # Main export file
```

## ✅ Component Development Guidelines

### Creating New Components

1. **Create component directory**

   ```bash
   mkdir src/components/YourComponent
   ```

2. **Component implementation** (`YourComponent.tsx`)

   ```tsx
   import React from 'react'
   import { BaseComponentProps } from '../../types/common'
   import './YourComponent.css'

   export interface YourComponentProps extends BaseComponentProps {
     /**
      * Description of the prop
      */
     variant?: 'primary' | 'secondary'
   }

   /**
    * Brief description of your component
    */
   export const YourComponent = React.forwardRef<
     HTMLDivElement,
     YourComponentProps
   >(({ variant = 'primary', className = '', ...props }, ref) => {
     return (
       <div
         className={`rk-yourcomponent rk-yourcomponent--${variant} ${className}`}
         ref={ref}
         {...props}
       />
     )
   })

   YourComponent.displayName = 'YourComponent'
   ```

3. **Component styles** (`YourComponent.css`)

   ```css
   .rk-yourcomponent {
     /* Base styles */
   }

   .rk-yourcomponent--primary {
     /* Primary variant */
   }

   .rk-yourcomponent--secondary {
     /* Secondary variant */
   }
   ```

4. **Component tests** (`YourComponent.test.tsx`)

   ```tsx
   import { describe, it, expect } from 'vitest'
   import { render, screen } from '@testing-library/react'
   import { YourComponent } from './YourComponent'

   describe('YourComponent', () => {
     it('renders correctly', () => {
       render(<YourComponent>Test content</YourComponent>)
       expect(screen.getByText('Test content')).toBeInTheDocument()
     })

     it('applies variant classes', () => {
       render(
         <YourComponent variant="secondary" data-testid="test">
           Test
         </YourComponent>
       )
       expect(screen.getByTestId('test')).toHaveClass(
         'rk-yourcomponent--secondary'
       )
     })
   })
   ```

5. **Storybook stories** (`YourComponent.stories.tsx`)

   ```tsx
   import type { Meta, StoryObj } from '@storybook/react'
   import { YourComponent } from './YourComponent'

   const meta = {
     title: 'Components/YourComponent',
     component: YourComponent,
     parameters: { layout: 'centered' },
     tags: ['autodocs'],
     argTypes: {
       variant: {
         control: { type: 'select' },
         options: ['primary', 'secondary'],
       },
     },
   } satisfies Meta<typeof YourComponent>

   export default meta
   type Story = StoryObj<typeof meta>

   export const Primary: Story = {
     args: {
       variant: 'primary',
       children: 'Primary Example',
     },
   }
   ```

6. **Export from index** (`src/index.ts`)
   ```tsx
   export {
     YourComponent,
     type YourComponentProps,
   } from './components/YourComponent/YourComponent'
   ```

### Code Style Guidelines

#### Naming Conventions

- **Components**: PascalCase (`Button`, `YourComponent`)
- **Props**: camelCase (`onClick`, `isDisabled`)
- **CSS classes**: kebab-case with prefix (`rk-button`, `rk-button--primary`)
- **Files**: PascalCase for components, camelCase for utilities

#### TypeScript

- Always provide prop types with JSDoc comments
- Use `React.forwardRef` for components that should forward refs
- Extend `BaseComponentProps` for common props
- Export prop types: `export type { YourComponentProps }`

#### CSS

- Use CSS custom properties for theming
- Follow BEM-like methodology: `rk-component`, `rk-component--variant`, `rk-component__element`
- Keep component styles scoped and self-contained

#### Testing

- Test component rendering
- Test prop variations
- Test user interactions
- Use descriptive test names
- Aim for high coverage

## 🐛 Bug Reports

We use GitHub issues to track bugs. Report bugs by [opening a new issue](https://github.com/DHua5922/react-kit/issues/new).

### Great Bug Reports Include:

- **Summary**: Quick summary and/or background
- **Steps to reproduce**: Be specific!
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: OS, browser, React version, React Kit version
- **Code sample**: Minimal reproduction case

Example:

```
**Summary**: Button onClick not working in React 18 StrictMode

**Steps to reproduce**:
1. Create a Button with onClick handler
2. Wrap in React.StrictMode
3. Click the button

**Expected**: onClick should be called once
**Actual**: onClick is called twice

**Environment**:
- React Kit: 0.1.0
- React: 18.2.0
- Browser: Chrome 120
- OS: macOS 14
```

## 💡 Feature Requests

We welcome feature requests! [Open an issue](https://github.com/DHua5922/react-kit/issues/new) with:

- **Use case**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives**: What alternatives have you considered?
- **Examples**: Similar features in other libraries

## 📝 Documentation

Documentation improvements are always welcome:

- Fix typos or unclear explanations
- Add examples to component stories
- Improve API documentation
- Add live code examples

## 🎨 Design Guidelines

### Design Principles

1. **Simplicity**: Components should be easy to use and understand
2. **Consistency**: Follow established patterns and naming conventions
3. **Accessibility**: All components should be accessible by default
4. **Performance**: Optimize for bundle size and runtime performance
5. **Flexibility**: Allow customization without being overly complex

### Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Support keyboard navigation
- Ensure sufficient color contrast
- Test with screen readers

## 📜 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

All contributors will be recognized for their contributions. We maintain a [list of contributors](https://github.com/DHua5922/react-kit/contributors) and appreciate all forms of contribution!

## 📞 Questions?

Don't hesitate to reach out:

- 💬 [GitHub Discussions](https://github.com/DHua5922/react-kit/discussions)
- 📧 Email: contribute@react-kit.dev
- 🐛 [Issues](https://github.com/DHua5922/react-kit/issues)

Thank you for contributing to React Kit! 🎉
