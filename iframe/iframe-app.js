const url = 'http://localhost:4000/students'
const delay = Math.random() * 100
setTimeout(() => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const body = `
        <main id="main">
          <h1>Students</h1>
          <ul id="students">
            <strong>Loaded</strong>
          </ul>
        </main>
      `
      document.body.innerHTML = body
      console.log('replaced iframe body')
      const students = document.getElementById('students')
      students.innerHTML = ''
      data.forEach((student) => {
        const li = document.createElement('li')
        li.textContent = `${student.id}: ${student.name} - ${student.email}`
        students.appendChild(li)
      })
    })
}, delay)
