//Program 1
// Provide a mixed wisdom

const message1 = ['You’re off to great places, today is your day. Your mountain is waiting, so get on your way.'];
const message2 = ['No one is perfect - that’s why pencils have erasers.'];
const message3 = ['Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.'];
const message4 = ['It always seems impossible until it is done.'];

const MessagesBatch = [message1, message2, message3, message4];
//console.log(MessagesBatch);

const generateRandomNumber = num => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  };

const print = (MessagesBatch[generateRandomNumber(MessagesBatch.length)])

const formatWisdom = wisdom => {
    const formatted = print.join('\n')
    console.log(formatted)
  };

formatWisdom(print);


// Program2
// Provide a mixed message based on program skill and tips for things that you can learn 

const generateRandomNumber = num => {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  };
  
  // object of arrays to keep the messages
  const collectiveAdvice = {
    programLanguage: ['javascript', 'ruby', 'java', 'kotlin', 'php', 'go', 'c#'],
    level: ['Newbie', 'Intermidiate', 'Senior', 'Master', 'Gran Master'],
    tip: ['improve and improve', 'you should practice more', 'relax and learn']
  };
  
  // array with full message to output
  let nextStep = []
  
  // Iterate over the object considering the array length
  for(let item in collectiveAdvice) {
    let optionIdx = generateRandomNumber(collectiveAdvice[item].length)
  
    // use the object's properties to customize the message being added to collectiveAdvice 
    switch(item) {
      case 'programLanguage':
        nextStep.push(`Your skill path right now is a "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'level':
        nextStep.push(`Your next target should be: "${collectiveAdvice[item][optionIdx]}".`)
        break
      case 'tip':
        nextStep.push(`You should: "${collectiveAdvice[item][optionIdx]}".`)
        break
      default:
        nextStep.push('There is not enough info.')
    }
  };
  
  const formatWisdom = wisdom => {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = nextStep.join('\n')
    console.log(formatted)
  };
  
  formatWisdom(nextStep);
  