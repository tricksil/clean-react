module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts, tsx}',
    '!<rootDir>/src/main/**/*',
    '!<rootDir>/src/domain/model/index.ts',
    '!<rootDir>/src/domain/usecases/index.ts',
    '!<rootDir>/src/presentation/components/index.ts',
    '!<rootDir>/src/presentation/protocols/index.ts',
    '!<rootDir>/src/validation/protocols/index.ts',
    '!**/*.d.ts',
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy',
  },
};
