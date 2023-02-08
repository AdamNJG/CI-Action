const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const buildStatus = fs.readFileSync(core.getInput('build-status'));
  const buildObject = JSON.parse(buildStatus);

  console.log(buildObject.success);

  if(buildObject.success === 'passed'){
    console.log('test passed!');
    return;
  }
  console.log('test failed');
} catch (error) {
  core.setFailed(error.message);
}