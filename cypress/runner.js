const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlNjAxNDZhLTQ0ZDUtNDhjYi1hOTdlLTkyM2U2YmZlNGE4NC0xNzE2OTgwMzU0MDcxIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYmIzMzkyNTMtZTkxZi00ZjFkLTkzNDYtOWM1MTYxNjNlYTNiIiwidHlwZSI6InQifQ.XkXiiXQiETqArfTOUsEfss4DvslLYWw_6MnU-k6-wKA'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
