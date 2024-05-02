const message = 'Click here 👉 https://thiagoresende.dev'
const linkedin = 'https://www.linkedin.com/in/thiago-resende-46175391/'
const github = 'https://github.com/tresende'

const output = `  \x1b[38;5;51m+---------------------------------------------------------------+
  |   \x1b[38;5;105m${message}\x1b[38;5;51m                     |
  +---------------------------------------------------------------+
  | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedin}\x1b[38;5;51m|
  | \x1b[38;5;93mGithub:\x1b[0m  \x1b[38;5;39m${github}                          \x1b[38;5;51m|
  +---------------------------------------------------------------+\x1b[0m`

console.log(output)
