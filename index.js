const core = require('@actions/core');
const github = require('@actions/github');

try {
  const buildStatus = core.getInput('build-status');

  if(buildStatus.status === 'passed'){
    return 'test passed!';
  }
  return 'test failed'
} catch (error) {
  core.setFailed(error.message);
}