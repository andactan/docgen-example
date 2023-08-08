module.exports = function (renderedUsage, doc) {
  const { displayName, description, docsBlocks } = doc;
  return `
# ${displayName}

${description ? "> " + description : ""}
## Props
${renderedUsage.props}
${docsBlocks ? "---\n" + docsBlocks.join("\n---\n") : ""}
    `;
};
