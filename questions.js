const questions = [
  {
    question: 'Which of the following is the largest mammel?',
    answers: [
      { text: 'Shark', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Elephant', correct: false },
      { text: 'Rhino', correct: false },
    ],
  },
  {
    question:'A flashing red traffic light signifies that a driver should do what?',
    answers: [
      { text: 'stop' ,correct:true},
      { text: 'speed up' ,correct:false},
      { text: 'proceed with caution' ,correct:false},
      { text: 'honk the horn' ,correct:false},
    ],
  },
  {
    question:'A portrait that comically exaggerates a person\'s physical traits is called a what?',
    answers: [
      { text: 'landscape' ,correct:false},
      { text: 'caricature' ,correct:true},
      { text: 'still life' ,correct:false},
      { text: 'Impressionism' ,correct:false},
    ],
  },
  {
    question:'An airplane\'s black box is usually what color?',
    answers: [
      { text: 'Black' ,correct:false},
      { text: 'White' ,correct:false},
      { text: 'Orange' ,correct:true},
      { text: 'Purple' ,correct:false},
    ],
  },
];

// Export the questions array
export default questions;
