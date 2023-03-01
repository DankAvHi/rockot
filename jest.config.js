// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    moduleDirectories: ["node_modules", "<rootDir>/"],

    moduleNameMapper: {
        "^@styles": "<rootDir>/src/styles/index.tsx",
        "^@components": "<rootDir>/src/components/index.tsx",
        "\\.svg$": "<rootDir>/__mocks__/svg.mock.tsx",
        "^@assets/icons": `<rootDir>/src/assets/icons/index.tsx`,
        "^@assets/images": `<rootDir>/src/assets/images/index.tsx`,
        "^@hooks": "<rootDir>/src/hooks/index.tsx",
    },
    testEnvironment: "jest-environment-jsdom",
    testMatch: ["<rootDir>/src/**/*.spec.tsx"],
};

module.exports = createJestConfig(customJestConfig);
