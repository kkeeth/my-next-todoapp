/* git hoooks commit-msg */
/* The example of commit message→ feat: login page with validation logic */
const boxen = require('boxen');
const fs = require('fs');
// the list of prefix
const prefix = ['fix', 'add', 'feat', 'refactor', 'perf', 'style', 'chore', 'docs'];

// get commit message and validate
let git_message = fs.readFileSync('./.git/COMMIT_EDITMSG', 'utf8').trim();
let isMissmatch = !prefix.some((str) => {
  let pattern = new RegExp(String.raw`^${str}:\s.*`, 'i');
  return git_message.match(pattern);
});

if (isMissmatch) {
  console.error(
    boxen('☠⚠️ Please add prefix to commit message! ⚠️️☠', {
      borderStyle: 'double',
      align: 'center',
    })
  );
  // any error occurred, stop committing
  process.exit(1);
} else {
  // finish committing
  process.exit(0);
}
