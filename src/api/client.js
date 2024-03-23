const url = 'http://localhost:4000/students'

module.exports = {
  loadPeople: function () {
    return {
      then: function (cb) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log('data')
            console.log(data)
            cb(data)
          })
        // setTimeout(() => {
        //   cb(JSON.parse(localStorage.people || '[]'))
        // }, Math.random() * 1000)
      },
    }
  },

  savePeople: function (person) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(person),
          })
          return resolve({ success: true })
        },
        between(10, 100),
      )
    })
  },
}

function between(min, max) {
  return Math.random() * (max - min) + min
}
