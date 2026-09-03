# Beginner Guide: Install NVM, Node.js, TypeScript, and `tsc`

This guide is for a beginner on Windows using PowerShell or the VS Code terminal.

## What You Are Installing

- **NVM**: Lets you install and switch between different Node.js versions.
- **Node.js**: Runs JavaScript and TypeScript output on your computer.
- **npm**: Comes with Node.js. It installs packages like TypeScript.
- **TypeScript**: A typed version of JavaScript.
- **tsc**: The TypeScript compiler. It comes from the `typescript` package.

## Step 1: Check If Node.js Is Already Installed

Open PowerShell and run:

```powershell
node -v
npm -v
```

If both commands show version numbers, Node.js is already installed.

If you want to use NVM, it is best to uninstall old Node.js first:

1. Open **Settings**.
2. Go to **Apps > Installed apps**.
3. Search for **Node.js**.
4. Uninstall it if it exists.
5. Restart PowerShell after uninstalling.

## Step 2: Install NVM for Windows

On Windows, use **NVM for Windows**, not the Linux/macOS `nvm` script.

1. Open this page in your browser:

   ```text
   https://github.com/nvm-windows/nvm/releases
   ```

2. Download the Windows installer.

   Look for a setup file such as:

   ```text
   nvm-setup.exe
   ```

   or:

   ```text
   nvm-<version>-<arch>-setup.exe
   ```

3. Run the installer.
4. Keep the default install options unless you know you need something different.
5. Finish the installation.
6. Close PowerShell or VS Code terminal.
7. Open PowerShell again.

## Step 3: Check If NVM Works

Run:

```powershell
nvm version
```

You should see a version number.

You can also run:

```powershell
nvm list
```

At first, it may show that no Node.js versions are installed. That is normal.

## Step 4: Install Node.js With NVM

Install the latest stable LTS version of Node.js:

```powershell
nvm install lts
```

LTS means **Long-Term Support**. It is the safest choice for learning and most projects.

After installation, tell NVM to use that Node.js version:

```powershell
nvm use lts
```

If `nvm use lts` does not work, list your installed versions:

```powershell
nvm list
```

Then use the exact version number you see:

```powershell
nvm use 24.20.0
```

Your version number may be different. That is okay.

## Step 5: Check Node.js and npm

Run:

```powershell
node -v
npm -v
```

If both commands show version numbers, Node.js and npm are ready.

Example output:

```text
v24.20.0
11.6.2
```

Your numbers may be different.

## Step 6: Create a New TypeScript Project

Go to the folder where you want to make your project:

```powershell
cd Desktop
mkdir my-typescript-project
cd my-typescript-project
```

Create a `package.json` file:

```powershell
npm init -y
```

The `package.json` file stores information about your project and its packages.

## Step 7: Install TypeScript

Recommended beginner/project way:

```powershell
npm install typescript --save-dev
```

This installs TypeScript only for this project.

Why this is good:

- Every project can use its own TypeScript version.
- Your project is easier to share with others.
- This avoids global version problems later.

## Step 8: Check `tsc`

Because TypeScript was installed inside the project, run `tsc` with `npx`:

```powershell
npx tsc -v
```

You should see the TypeScript compiler version.

Important: `tsc` is not a separate install. It comes with the `typescript` package.

## Step 9: Create a TypeScript Config File

Run:

```powershell
npx tsc --init
```

This creates:

```text
tsconfig.json
```

The `tsconfig.json` file tells TypeScript how to compile your code.

## Step 10: Write Your First TypeScript File

Create a folder:

```powershell
mkdir src
```

Create a file named:

```text
src/index.ts
```

Add this code:

```typescript
const message: string = "Hello TypeScript";

console.log(message);
```

## Step 11: Compile TypeScript to JavaScript

Run:

```powershell
npx tsc
```

This compiles `.ts` files into `.js` files.

Depending on your `tsconfig.json`, the JavaScript output may appear next to your TypeScript file or inside a folder like `dist`.

## Step 12: Run the JavaScript File

If the compiled file is here:

```text
src/index.js
```

Run:

```powershell
node src/index.js
```

If the compiled file is here:

```text
dist/index.js
```

Run:

```powershell
node dist/index.js
```

You should see:

```text
Hello TypeScript
```

## Optional: Install TypeScript Globally

You can install TypeScript globally if you want the `tsc` command to work anywhere:

```powershell
npm install -g typescript
```

Then check:

```powershell
tsc -v
```

For real projects, the local project install is usually better:

```powershell
npm install typescript --save-dev
npx tsc
```

## Useful NVM Commands

Show installed Node.js versions:

```powershell
nvm list
```

Show available Node.js versions:

```powershell
nvm list available
```

Install the LTS version:

```powershell
nvm install lts
```

Use a version:

```powershell
nvm use lts
```

or:

```powershell
nvm use 24.20.0
```

Check Node.js:

```powershell
node -v
```

Check npm:

```powershell
npm -v
```

## Common Beginner Problems

### Problem: `nvm` is not recognized

Close PowerShell or VS Code completely, then open it again.

If it still does not work, restart your computer.

### Problem: `node` is not recognized

Make sure you installed and selected a Node.js version:

```powershell
nvm install lts
nvm use lts
node -v
```

### Problem: `tsc` is not recognized

If TypeScript is installed locally, use:

```powershell
npx tsc
```

If you want plain `tsc` to work everywhere, install TypeScript globally:

```powershell
npm install -g typescript
```

### Problem: PowerShell says scripts are disabled

If `npx` or npm scripts fail because of PowerShell execution policy, run this once:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Then close and reopen PowerShell.

## Quick Command Summary

After installing NVM for Windows:

```powershell
nvm install lts
nvm use lts
node -v
npm -v
mkdir my-typescript-project
cd my-typescript-project
npm init -y
npm install typescript --save-dev
npx tsc -v
npx tsc --init
```

That is the basic setup.

## Helpful Official Links

- NVM for Windows releases: https://github.com/nvm-windows/nvm/releases
- NVM for Windows docs: https://docs.nvm-windows.com/install/installers/
- Node.js downloads: https://nodejs.org/en/download
- TypeScript install docs: https://www.typescriptlang.org/download/
