# invite-customers

Given a `.txt` file containing customer records, return a list of those that are within 100km of a given point (using [this formula](https://en.wikipedia.org/wiki/Great-circle_distance) to calculate distance). Returns the user IDs and names of the customers, sorted in ascending order by user ID.

---

### Getting started

1. Make sure you have [Node.js](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/) installed.
2. Install dependencies: `yarn`

### Running the project

```
yarn build
```

The output can be found at [src/data/output.txt](https://github.com/nlang123/invite-customers/blob/main/src/data/output.txt).

### Running the tests

```
yarn test
```

To generate a coverage report, use the `--coverage` option.
