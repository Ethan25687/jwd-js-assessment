/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers ✔

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 77 to 96 to help you. ✔

      3. Add 2 more questions to the app (each question must have 4 options). ✔

      4. Reload the page when the reset button is clicked (hint: search window.location) ✔

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the Sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3, // Pacific Ocean
    },
    {
      q: 'What is the capital of Australia?',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1, // Canberra
    },
    {
      q: 'What is the biggest planet in our solar system?',
      o: ['Pluto', 'Sun', 'Jupiter', 'Saturn'],
      a: 2, // Jupiter
    },
    {
      q: 'What is the hottest planet in our solar system?',
      o: ['Venus', 'Neptune', 'Sun', 'Uranus'],
      a: 0, // Venus
    },    
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = '#fceea7'; // once submitted, displays correct answers in a warm yellow
        } else {
          liElement.style.backgroundColor = '#FFB6C1'; // once submitted, displays correct answers in a soft pink
        }

        if (radioElement.checked) {
          // code for task 1 goes here
          if (quizItem.a == i) {
            score += 20; // increments score variable by 20
            document.getElementById('score').innerHTML = `You got ${score}% correct! Attempt Submitted.` // displays score message out of 100% to the right of buttons
          }
        }
      }
    });
  };

  displayQuiz();
  // Submit Button Function:
  btnSubmit.onclick = () => {calculateScore()} // upon clicking the Submit button, invokes calculateScore function
});

// Reset Button Function:
btnReset.onclick = () => {window.location.reload()};  // this refreshes the page once the reset button is clicked, therefore the quiz refreshes! 😁

// // Countdown Timer: Doesn't work 😢
// btnStart.onclick = () => {const startingTimeInMinutes = 1;
// let TimeInSeconds = startingTimeInMinutes * 60;

// const timeEl = document.getElementById('time');

// setInterval(updateTime, 1000);

// updateTime = () => {
//   const minutes = math.floor(TimeInSeconds)
//   let seconds = TimeInSeconds % 60;

//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   timeEl.innerHTML = `${minutes}: ${seconds}`
//   time--;
// }} 
