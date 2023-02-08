# Website of the acrobatic rock and roll club Rockot Krasnodar

## Content

---

1. [Project Description](#description-of-the-project)
2. [Required Software for Startup and Development](#required-software-to-run-and-develop)
3. [Environment preparation and launch](#preparing-the-environment-and-running)
4. [Scripts using in development](#scripts-using-in-development)
5. [Technologies used in the project](#technologies-used-in-the-project)
6. [Authorship and other information](#authorship-and-other-information)

---

## Description of the project

Site of the acrobatic rock and roll club Rockot Krasnodar

## Required software to run and develop

> If you use Docker, you can skip this section, the installation of dependencies and configuration will be done automatically

1. **NodeJS**. NextJS 13 requires at least version 18 of the NodeJS platform.
   You can install it from [OFF site](https://nodejs.org/en/),
   or (_**Recommended**_) using the **NVM** (Node version manager),
   for [Windows](https://github.com/coreybutler/nvm-windows) or [Linux](https://github.com/nvm-sh/nvm)
2. **pnpm**. The package manager [**pnpm**](https://pnpm.io/) is used to install dependencies in the project.
   In order to avoid bugs and other problems during development, it is recommended to use it instead of the standard **npm** (Optional)
3. **Terminal**. Launch, build, etc. executed through the terminal.
   On Windows, you can use CMD, Powershell, [Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-us&gl=en) or run via WSL.
   On linux, you can use the standard terminal application.

## Preparing the environment and running

### With Docker

1. Open terminal in project root folder
2. Build the container with the command: `docker build -t rockot .`
3. Run the container with the command: `docker run -p 3000:3000 rockot`

### Manually

1. Open terminal in project root folder
2. Install dependencies with `pnpm install` command
3. Run the project
    - Start the site in Production mode with the `pnpm start` command
    - Run the site in Dev mode
        - If using the Visual Studio Code, press `F5` or run from the **Running and Debugging** section
        - Or Enter the command `pnpm run dev`

## Scripts using in development

1. Run in development mode: `pnpm run dev`
2. Start in Production mode: `pnpm start`
3. Build: `pnpm run build`
4. !_**Temporarily not supported**_! Building a static version of the site: `pnpm run export`
5. Linting the project code: `pnpm run lint`
6. Format project code: `pnpm run format`

## Technologies used in the project

> Is Recommended to use Visual Studio Code as IDE

1. The following tools are used to create the technical part:

-   NodeJS - a platform for running JavaScript applications;
-   pnpm - package manager for NodeJS
-   TypesScript - programming language extending JavaScript, Adds static typing
-   NextJS - meta framework based on ReactJS, needed for server rendering
-   ReactJS - a library for creating GUIs in web applications
-   StyledComponents - library for styling React applications using CSS-in-JS approach
-   Eslint and Prettier - linting and code formatting tools

2. The following tools are used to create a design:

-   Figma for layouts;
-   Inkscape for icons and other vector images;
-   Google fonts service for downloading fonts.

## Authorship and other information

Project created by [DankAvHi](https://github.com/DankAvHi)
