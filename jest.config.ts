import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/__mocks__/fileMock.ts'
  },
  verbose: true,
  transform: {
    '\\.[jt]sx?$': ['ts-jest', { isolatedModules: true }],
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/assetsTransformer.ts'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)'],
  preset: 'ts-jest',
};

export default config;

// Or async function
// export default async (): Promise<Config.InitialOptions> => config;
