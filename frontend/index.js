
async function sprintChallenge5() {
  try {
    const mentorsURL = 'http://localhost:3003/api/mentors';
    const learnersURL = 'http://localhost:3003/api/learners';
    const resLearn = await axios.get(learnersURL);
    const resMent = await axios.get(mentorsURL);

    const container = document.querySelector('.cards');
    
    resLearn.data.forEach(({ mentors }) => {
      mentors.forEach((mentorId, idx) => {
        const { firstName, lastName } = resMent.data.find(({ id }) => id === mentorId);
        mentors[idx] = `${firstName} ${lastName}`;
      });
    });

    return resLearn.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function learnerCard(learner, container) {
  const card = document.createElement('div');
  card.classList.add('card');

  const learnerName = document.createElement('h3');
  learnerName.textContent = 'Name: ' + learner.fullName;

  const learnerEmail = document.createElement('div');
  learnerEmail.textContent = 'Email: ' + learner.email;

  const mentorDropLi = document.createElement('h4');
  mentorDropLi.classList.add('open');
  mentorDropLi.textContent = 'Mentors: ' + learner.mentors.join(', ');

  card.appendChild(learnerName);
  card.appendChild(learnerEmail);
  card.appendChild(mentorDropLi);

  container.appendChild(card);
}

async function someAsyncFunction() {
  try {
    const processedData = await sprintChallenge5();

    const container = document.querySelector('.cards');

    processedData.forEach((learner) => {
      learnerCard(learner, container);
    });
  } catch (error) {
    console.log(error.message);
  }
}

someAsyncFunction();

  
   


  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()

//     id: 22,
//     email:"mickey.mouse@example.com",
//     fullName: "Mickey Mouse",
//     mentors: ['James Gosling', 'Mary Shaw']

// capture learner mentor array 
// forEach through mentors looking of ID pairs
// ammend original array with mentor FIRST?LAST