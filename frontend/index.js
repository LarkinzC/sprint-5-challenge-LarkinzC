
async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 
    try {
      const mentorsURL = ('http://localhost:3003/api/mentors') 
      const learnersURL =('http://localhost:3003/api/learners') 
      const resLearn = await axios.get(learnersURL)
      const resMent = await axios.get(mentorsURL)
      console.log(resLearn.data)
      console.log(resMent.data)
      resLearn.data.forEach(({mentors}) => {
        mentors.forEach((mentorId , idx) => {
          const {firstName, lastName} = resMent.data.find(({id}) => 
            id === mentorId
          )
          console.log(firstName, lastName)
          mentors[idx] = `${firstName} ${lastName}`
        })
      })
    } catch (error) {
      console.log(error.message)
    }
    
  function learnerCard(learner) {

  }










   }
  
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