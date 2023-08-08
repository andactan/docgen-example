const renderType = require("./renderType.cjs");
const { defaultTemplates } = require('vue-docgen-cli')

const { renderTags, mdclean } = defaultTemplates;

module.exports = async function (renderedUsage, doc) {
  const res = await Promise.all(
    renderedUsage.map(async (e) => {
      console.log(e)
      const name = e.name;
      const description = e.description;
      const tags = renderTags(e.tags);
      const defaultValue = e.defaultValue?.value ?? "";
      console.log(`
        name: ${name}\n,
        description: ${description}\n,
        tags: ${tags}\n,
        defaultValue: ${defaultValue}
      `);

      return [
        `#### ${mdclean(name)} ${e.required ? `<sup>required</sup>`: ''}\n\n`,
        `- Type\n`,
        `<code>string</code>`,
        `<p>`,
        `${defaultValue.length ? `<b>default</b>: <code>${mdclean(defaultValue)}</code>` : '' }`,
        `</p>`,
        `${mdclean(description)}\n`
      ].join('');
    })
  );
  return res.join('');
};
