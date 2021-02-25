const { exec } = require('child_process');
const { removeSlimTopString } = require('./helpers/cleaners')
  
const ls = exec('slim -d mu=1e-7 -d m=1e-6 -d r=1e-6 -d sigsqr=2 -d N=1000 -d outputEvery=1000 ../sims/local_adapt.slim', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: '+error.code);
    console.log('Signal received: '+error.signal);
  }
  stdout = removeSlimTopString(stdout)
  console.log('Child Process STDOUT: ', stdout);
  console.log('Child Process STDERR: '+stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code '+code);
});