const defaultPeople = [
  {
    name: 'Joe Doe',
    email: 'joe@acme.co',
    course: 'How to npm',
    department: 'core',
  },
  {
    name: 'Jane Smith',
    email: 'jane@acme.co',
    course: 'Advanced JavaScript',
    department: 'frontend',
  },
  {
    name: 'Anna Black',
    email: 'anna@acme.co',
    course: 'React Fundamentals',
    department: 'frontend',
  },
]

module.exports = {
  loadPeople: function () {
    return {
      then: function (cb) {
        const shouldFail = Math.random() < 0.1
        const timeout = shouldFail ? 300 : 5000
        setTimeout(() => {
          const people =
            JSON.parse(localStorage.people || 'null') || defaultPeople
          cb(people)
        }, timeout)
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
        between(100, 150),
      )
    })
  },
}

function between(min, max) {
  return Math.random() * (max - min) + min
}
