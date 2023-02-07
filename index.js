const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const testStatus = core.getInput('test-status');
  if(testStatus === False){
    console.log("The Test failed!");
    return;
  }
  console.log("the Test passed!")
} catch (error) {
  core.setFailed(error.message);
}