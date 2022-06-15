module.exports = {
  collectCoverageFrom: ["src/utils/functions/**", "src/reducer/functions/**"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
