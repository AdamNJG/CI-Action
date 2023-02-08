const core = require('@actions/core');
const github = require('@actions/github');

try {
  const buildStatus = core.getInput('build-status');
  const buildObject = JSON.parse(buildStatus);

  if(buildObject.status === 'passed'){
    console.log('test passed!');
    return;
  }
  console.log('test failed');
} catch (error) {
  core.setFailed(error.message);
}