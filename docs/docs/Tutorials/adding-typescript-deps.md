---
id: adding-typescript-deps
name: Adding Typescript Dependencies
---

# Adding Typescript Support

Typescript is one of the core technologies we use here at Therify. You might go as far as saying it is **the** core technology.
Let's talk about how you can add Typescript to a new project.

> It should be noted, this is a _very opinionated_ tutorial and not representative of how all Typescript projects should be built.

## Step one: Installing the dependencies

```bash
yarn add typescript ts-jest jest @types/jest @types/node ts-node -D
```

> 💡 Notice the -D flag? That's to ensure we install these a "devDependencies" as they are not required for runtime.

Here's what we just installed:

### `typescript`

Typescript is truly Javascript but with super powers. Not only does it give you access to compile-time static analysis of your code but it also lets you use the latest and greatest Javascript features.

We employ Typescript so that we can ensure our code is correct before we ship it. That and we truly believe it makes for more readable and self-documenting code when used well.

The `typescript` package ships with the Typescript compiler and the Typescript-cli (Command Line Interface) `tsc`.

### `jest`

A test runner and assertion library for Javascript. If you are familiar with running tests in a Create-React-App generated project, you've probably been using jest without realizing it.

We leverage jest for its robust tooling and expressive assertion and mocking functionality.

### `ts-jest`

Because Jest is designed to work with Javascript, it cannont on its own parse Typescript files. Ts-Jest does this for us.

### `@types/jest`

Despite Jest not having native support for parsing Typescript, the Jest team was kind enough to publish a `@types/*` library for Jest. This will allow us to use Typescript when configuring Jest.

### `@types/node`

This project assumes you are building a project that targets the NodeJS runtime. To that end, we will install NodeJS type declarations so that we can use standard NodeJS libraries in our Typescript code.

### `ts-node`

TsNode is a script which can compile and execute our typescript code in a single command. It is also the underlying utility that will allow us to run our `jest.config.ts` file, once it's created.

## Step two: Configure Typescript

### Generating a tsconfig.json file

Now that we have the prerequisite packages installed we can configure Typescript. You can customize the Typescript compiler for you project using a file called `tsconfig.json`. Let's generate one now using the Typescript-cli.

```bash
yarn tsc --init
```

### Customizing your Typescript Compiler

You may be overwhelmed by the sheer number of options available to you when configuring Typescript using `tsconfig.json` but here's an example config you can use.

Copy the following contents into your `tsconfig.json`.

```json
{
    "compilerOptions": {
        "target": "ESNext",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "CommonJS",
        "rootDir": "src",
        "moduleResolution": "node",
        "resolveJsonModule": true,
        "declaration": true,
        "outDir": "dist",
        "preserveConstEnums": true,
        "allowSyntheticDefaultImports": true,
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictFunctionTypes": true,
        "strictPropertyInitialization": true,
        "alwaysStrict": true,
        "noUnusedLocals": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "skipLibCheck": true
    },
    "include": ["src"]
}
```

There's still quite a lot to unravel here but let's explore the essential bits to understand.
