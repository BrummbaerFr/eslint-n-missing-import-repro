# eslint-n-missing-import-repro

repro for issue: eslint-community/eslint-plugin-n/issues/66

Uses:

* Node.js 18
* TypeScript 5.2

### Reproduction

1. Run `pnpm install`.
2. Run `pnpm lint`.


eslint yields:

```
src/index.ts
1:60  error  "@octokit/types" is not found  n/no-missing-import
```
