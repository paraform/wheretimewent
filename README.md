# Where Time Went

To get started run `pnpm set-up` for more information check each workspace README.md

## Develop

To develop all apps and packages, run the following command:

``` bash
cd my-turborepo
pnpm run dev
```

## Remote Caching

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel.

``` bash
cd my-turborepo
pnpm dlx turbo login
```

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

``` bash
pnpm dlx turbo link
```

## Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
