const url = 'http://localhost:4000/students'

module.exports = {
  loadPeople: function () {
    return {
      then: function (cb) {
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // console.log('data')
            // console.log(data)
            cb(data)
          })
      },
    }
  },

  savePeople: function (person) {
    return new Promise((resolve, reject) => {
      resolve({ success: true })

      const delay = 0

      setTimeout(() => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(person),
        })
      }, delay)
    })
  },
}
