import type { Linter } from "eslint";
import nextConfig from "eslint-config-next";

const eslintConfig: Linter.Config[] = [
  ...nextConfig,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
