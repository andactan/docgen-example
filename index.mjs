const url = require("url");
const path = require("path");
const { createComponentMetaChecker } = require("vue-component-meta");
const { parseMulti } = require("vue-docgen-api");
const { defineConfig } = require("vue-docgen-cli");

const tsConfigPath = path.resolve(__dirname, "tsconfig.json");
const checker = createComponentMetaChecker(
  // Write your tsconfig path
  tsConfigPath
);

// module.exports = defineConfig({
//   componentsRoot: "/components",
//   components: "**/[A-Za-z].{vue,ts}",
//   propsParser: async function (componentPath, _, event) {
//     const meta = checker.getComponentMeta(componentPath);
//     console.log(componentPath, meta);
//   },
// });

const componentPath = path.join(__dirname, "components", "TestComponent.vue");
console.log(componentPath);
const meta = checker.getComponentMeta(componentPath);
// console.log(checker.getExportNames(componentPath));

const docs = await parseMulti(componentPath);
console.log(docs);
