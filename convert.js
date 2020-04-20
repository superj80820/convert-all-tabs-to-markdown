const fs = require('fs'); 

const file = fs.readFileSync('./allTabs.text', 'utf8')

fs.writeFileSync(
  './markdownFormat.md',
  file
    .split("\n\n")
    .map(item => {
      const line = item.split("\n")
      return {
        title: line[0],
        link: line[1]
      }
    })
    .filter(item => item.title !== "" && item.link !== undefined)
    .map(item => `* [${item.title}](${item.link})`)
    .join("\n")
)