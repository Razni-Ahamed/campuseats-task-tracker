# CampusEats Task Tracker

![CI](https://github.com/Razni-Ahamed/campuseats-task-tracker/actions/workflows/ci.yml/badge.svg)

A small team repository for the three CampusEats developers to plan and track work.
Built for **SE3090 Lab 08: Git, Collaborative Development, CI/CD, Security & Code Quality**.

## Workflow (GitHub Flow)
1. Create an Issue for the work.
2. Branch from `main` (`feature/…`, `fix/…`, `chore/…`).
3. Commit using Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`).
4. Open a pull request into `main`; reference the issue with `Closes #<n>`.
5. CI (GitHub Actions) must pass and the change is reviewed before merging.

## Run locally
```bash
npm start   # prints the open task count
npm test    # runs the unit tests
npm audit   # checks dependencies for known vulnerabilities
```

## Security
Never commit secrets. API keys are provided through environment variables
(e.g. `process.env.API_KEY`) and `.env` files are git-ignored.
