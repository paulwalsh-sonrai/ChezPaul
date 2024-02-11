import path from 'path'
import { BranchConfig, Package } from './types'

// TODO: List your npm packages here.
export const packages: Package[] = [
  {
    name: '@ChezPaul',
    packageDir: 'components',
    srcDir: 'src',
    builds: [
      {
        jsName: 'components',
        entryFile: 'src/index.ts',
        globals: {},
      },
    ],
  },
 
]

export const latestBranch = 'main'

export const branchConfigs: Record<string, BranchConfig> = {
  main: {
    prerelease: false,
    ghRelease: true,
  },
  next: {
    prerelease: true,
    ghRelease: true,
  },
  beta: {
    prerelease: true,
    ghRelease: true,
  },
  alpha: {
    prerelease: true,
    ghRelease: true,
  },
}

export const rootDir = path.resolve(__dirname, '..')
export const examplesDirs = [
 
]
