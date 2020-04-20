const fs = require('fs'); 

const file = fs.readFileSync('./allTabs.text', 'utf8')

fs.writeFileSync(
  './markdownFormat.md',
  file
    .split("\n\n")
    .map(item => {
      const line = item.split("\n")
      const title = line[0]
      const link = line[1]
      return `* [${title}](${link})`
    })
    .join("\n")
)