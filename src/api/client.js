export default {
  loadPeople: function() {
    return {
      then: function (cb) {
        setTimeout(() => {
          cb(JSON.parse(localStorage.people || '[]'))
        }, 0)
      },
    }
  },

  savePeople: function (people) {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          localStorage.people = JSON.stringify(people)
          return resolve({ success: true })
        },
        between(100, 200),
      )
    })
  },
}

function between(min, max) {
  return Math.random() * (max - min) + min
}
