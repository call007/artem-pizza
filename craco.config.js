const path = require("path");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@ui-kit": resolvePath("./src/ui-kit"),
    },
  },
};
