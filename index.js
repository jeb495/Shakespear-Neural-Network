const brain = require('brain.js');

//training data can be anything. See https://github.com/BrainJS/brain.js#brainjs for documentation
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
    'All causes shall give way: I am in blood Stepp’d in so far that, should I wade no more, Returning were as tedious as go o’er',
  ];
//creating brain (long short term memory: https://en.wikipedia.org/wiki/Long_short-term_memory)
  const lstm = new brain.recurrent.LSTM();
  const result = lstm.train(trainingData, {
    //options
    iterations: 1500, //the number of iterations may affect your neural networks performance
    log: (details) => console.log(details),
    errorThresh: 0.011, //changing the error threshold will directly affect the time it takes to train the network
                        //0.011 seems to be an optimal error threshold, any others seem to have mixed results
  });
  console.log('Training result: ', result);

  //run inputs. change to suit your training data
  const run1 = lstm.run('the');
const run2 = lstm.run('we');
const run3 = lstm.run('I');
const run4 = lstm.run('should');

//displaying results in console
console.log('run 1:' + run1);
console.log('run 2:' + run2);
console.log('run 3:' + run3);
console.log('run 4:' + run4);
