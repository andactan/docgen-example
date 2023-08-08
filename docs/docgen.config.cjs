const path = require("path");

module.exports = {
  componentsRoot: "components", // the folder where CLI will start searching for components.
  components: "**/[A-Z]*.vue", // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: "docs/components", // folder to save components docs in (relative to the current working directry)
  getDocFileName: (componentPath) => componentPath.replace(/\.vue$/, ".md"), // specify the name of the input md file
  getDestFile: (file, config) =>
    path.join(config.outDir, file).replace(/\.vue$/, ".doc.md"), // specify the name of the output md file
  templates: {
    // global component template wrapping all others see #templates
    component: require("./templates/component.cjs"),
    props: require("./templates/props.cjs"),
  },
};
