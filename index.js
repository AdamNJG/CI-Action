const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

try {
  const buildStatus = fs.readFileSync(core.getInput('build-status'));

  console.log("json: " +buildStatus);
  const buildObject = JSON.parse(buildStatus);
  console.log("status2: " +buildObject.status);

  if(buildObject.status === 'passed'){
    console.log('test passed!');
    return;
  }
  console.log('test failed');
} catch (error) {
  core.setFailed(error.message);
}