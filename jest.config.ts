import { Config } from '@jest/types'

export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: ['default', 'jest-junit'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
} as Config.InitialOptions
