
async function sprintChallenge5() {
  let resLearn  
  let resMent 
  try {
    const mentorsURL = 'http://localhost:3003/api/mentors';
    const learnersURL = 'http://localhost:3003/api/learners';
    resLearn = await axios.get(learnersURL);
    resMent = await axios.get(mentorsURL);

    
    // console.log(resLearn.data)
    resLearn.data.forEach(({ mentors }) => {
      mentors.forEach((mentorId, idx) => {
        const { firstName, lastName } = resMent.data.find(({ id }) => id === mentorId);
        mentors[idx] = `${firstName} ${lastName}`;
      });
    });

    

    // return resLearn.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  function learnerCard(learner, container) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const infoText = document.querySelector('.info')
    infoText.textContent = 'No learner is selected' 
  
    const learnerName = document.createElement('h3');
    learnerName.textContent = learner.fullName;
  
    const learnerEmail = document.createElement('div');
    learnerEmail.textContent = learner.email;
  
    const mentorDropLi = document.createElement('h4');
    mentorDropLi.classList.add('closed');
    mentorDropLi.textContent = 'Mentors'
  
    const mentorDropdown = document.createElement('ul');
  
    learner.mentors.forEach((mentor) => {
      const mentorItem = document.createElement('li');
      mentorItem.textContent = mentor;
      mentorDropdown.appendChild(mentorItem);
    });
  
    card.addEventListener('click', (evt) => {
      document.querySelectorAll('.card').forEach(currentCard => {
        if (card === currentCard) {
          card.classList.toggle('selected')
          evt.target === mentorDropLi ? card.classList.add('selected') : null
          const ternary = card.classList.contains('selected') 
          infoText.textContent =  ternary ? `The selected learner is ${learner.fullName}` : 'No learner is selected'
          learnerName.textContent = ternary ? `${learner.fullName}, ID ${learner.id}` : learner.fullName
        } else {
          currentCard.classList.remove('selected')
          const currentName = currentCard.querySelector('h3')
          const nameSplit = currentName.textContent.split(',')[0]
          currentName.textContent = nameSplit
          
        }
      })
      
    });
  
    mentorDropLi.addEventListener('click', () => {
      mentorDropLi.classList.toggle('open')
      mentorDropLi.classList.toggle('closed')
    })
  
  
    card.appendChild(learnerName);
    card.appendChild(learnerEmail);
    card.appendChild(mentorDropLi);
    card.appendChild(mentorDropdown)
    container.appendChild(card);
  }
  
  
  async function someAsyncFunction() {
    try {
      const processedData = resLearn.data;
      // console.log(resLearn)
  
      const container = document.querySelector('.cards');
  
      processedData.forEach((learner) => {
        learnerCard(learner, container);
      });
    } catch (error) {
      console.log(error.message);
    }
  
    const footer = document.querySelector('footer')
    const currentYear = new Date().getFullYear()
    footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`
  }
  
  someAsyncFunction();
}



  
   

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