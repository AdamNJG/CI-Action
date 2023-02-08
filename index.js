const core = require('@actions/core');
const github = require('@actions/github');

try {
  var fileReader = new FileReader();
  const buildStatus = fileReader.readAsText(core.getInput('build-status'));

  console.log("json: " +buildStatus);
  console.log("status1: " +buildStatus.status);
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