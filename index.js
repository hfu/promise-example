const fs = require('fs')
const readline = require('readline')

const task = async () => {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: fs.createReadStream('package.json')
    })
    rl.on('line', line => {
      console.log('  ' + line)
    })
    rl.on('close', () => {
      resolve('task complete.')
    })
    console.log('the last line of the task assignment.')
  })
}

const main = async () => {
  console.log('starting the task.')
  console.log(await task())
  console.log('the next line of the task.')
}

main()
