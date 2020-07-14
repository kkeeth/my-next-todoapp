const execSync = require('child_process').execSync;
const boxen = require('boxen');

const branch_name = execSync(`git branch --contains`)
  .toString()
  .match(/\* (?:\(no branch, rebasing )?([^)\n]+)/)[1];

if (branch_name === 'develop' || branch_name === 'release') {
  console.error(
    boxen(`☠⚠️⚠️⚠️Don't push to ${branch_name} branch directly!!⚠️⚠️⚠️️☠`, {
      borderStyle: 'double',
      align: 'center',
    })
  );
  // any error occurred, stop pushing
  process.exit(1);
} else {
  // finish pushing
  process.exit(0);
}
