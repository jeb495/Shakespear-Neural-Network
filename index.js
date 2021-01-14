const brain = require('brain.js');

//input your own data for different results
//can be stored as json 
const trainingData = [
    'These violent delights have violent ends And in their triump die, like fire and powder Which, as they kiss, consume',
    'With mirth and laughter let old wrinkles come',
    'Wisely and slow; they stumble that run fast',
    'Conscience doth make cowards of us all',
    'To die, to sleep - To sleep, perchance to dream - ay, there the rub, For in this sleep of death what dreams may come',
    'Some are born great, others achieve greatness',
    'Some Cupid kills with arrows, some with traps',
  ];
//creating brain (long short term memory: https://en.wikipedia.org/wiki/Long_short-term_memory)
  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    //options
    iterations: 1500,
    log: (details) => console.log(details),
    errorThresh: 0.011, //changing the error threshold will directly affect the time it takes to train the network
  });
  console.log('Training result: ', result);

  //run inputs. change to suit your training data
  const run1 = lstm.run('We do');
const run2 = lstm.run('Up to thee');
const run3 = lstm.run('chance');
const run4 = lstm.run('dream');

//displaying results in console
console.log('run 1:' + run1);
console.log('run 2:' + run2);
console.log('run 3:' + run3);
console.log('run 4:' + run4);