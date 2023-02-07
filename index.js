const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const testStatus = core.getInput('test-status');
  console.log(Boolean(testStatus))
} catch (error) {
  core.setFailed(error.message);
}