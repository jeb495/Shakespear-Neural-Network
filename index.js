const brain = require('brain.js');

//input your own data for different results
//can be stored as json 
const trainingData = [
    'Jacob was a smart person.',
    'Jacob was not very old.',
    'Martha looked at Jacob and Jacob looked at Martha.',
    'It was love at first sight for Martha, but Jacob did not feel the same.',
    'Jacob was not the best person for Martha.',
    'Martha was a good person, compared to Jacob.',
    'Martha and Jacob both drink water and swim.',
  ];
//creating brain (long short term memory: https://en.wikipedia.org/wiki/Long_short-term_memory)
  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    //options
    iterations: 1500,
    log: (details) => console.log(details),
    errorThresh: 0.011,
  });
  console.log('Training result: ', result);

  //run inputs. change to suit your training data
  const run1 = lstm.run('Jacob');
const run2 = lstm.run('Martha');
const run3 = lstm.run('water');
const run4 = lstm.run('best');

//displaying results in console
console.log('run 1: Jacob' + run1);
console.log('run 2: Martha' + run2);
console.log('run 3: It' + run3);
console.log('run 4: for' + run4);