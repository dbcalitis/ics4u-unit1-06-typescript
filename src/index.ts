/**
 * The program shows the average with
 * mean, median and mode.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-09-28
 */

// get arguments
import { readFileSync } from 'fs'

/**
 *
 * 'Mean' is the "average" where you add up all the numbers
 * and then divide by the number of numbers.
 *
 * @param {Array<number>} arrayOfIntegers list of integers
 * @returns {number} mean The average
 */
function Mean(arrayOfIntegers: number[]): number {
  let mean = 0
  const arrLen = arrayOfIntegers.length

  for (let i = 0; i < arrLen; i++) {
    mean += arrayOfIntegers[i]
  }

  mean /= arrLen

  return mean
}

/**
 *
 * 'Median' is the middle number of a list of numbers.
 *
 * @param {Array<number>} arrayOfIntegers list of integers
 * @returns {number} median The average
 */
function Median(arrayOfIntegers: number[]): number {
  let median = 0

  const sortedArr = arrayOfIntegers.sort(function (a, b) {
    return a - b
  })

  const sortedLen = sortedArr.length

  if (sortedLen % 2 === 0) {
    const num1 = sortedArr[sortedLen / 2]
    const num2 = sortedArr[sortedLen / 2 - 1]

    median = Mean([num1, num2])
  } else {
    median = sortedArr[(sortedLen - 1) / 2]
  }

  return median
}

/* remove this
/**
 *
 * 'Mode' is the number that is repeated most often.
 *
 * @param {Array<number>} arrayOfIntegers list of integers
 * @returns {Array<number>} modes The list of most reccuring numbers
 */
/* remove this
function Mode(arrayOfIntegers: number[]): number[] {
  const modes = new Array()
  const count = new Array()
  const sortedArr = arrayOfIntegers.sort(function(a, b) {
    return a - b
  })
  let maxIndex = 0

  for (let i = 0; i < sortedArr.length; i++) {
    const num = Number(sortedArr[i])

    // adds to the count of a 'num' or
    // adds to a '0' if there is not one already.
    count[num] = (count[num] || 0) + 1

    if (count[num] > maxIndex) {
      maxIndex = count[num]
    }
  }

  // Pushes all of the modes into an array
  for (const num in count) {
    if (!modes.hasOwnProperty(num)) {
      if (count[num] === maxIndex) {
        modes.push(Number(num))
      }
    }
  }

  return modes
} remove below v
*/

// Textfile Path
const filePath = './set3.txt'

const file = readFileSync(filePath, 'utf8')
const newArray = file.split(/\r?\n/)

// Removes the last element because it is always empty
newArray.pop()

// Converts every number in the array into a data type number
const numArray = []

for (let i = 0; i < newArray.length; i++) {
  numArray.push(Number(newArray[i]))
}

console.log(numArray)

// Prints out all of the averages for Mean, Median and Mode.
console.log('Average Calculator with Mean, Median, and Mode!\n')

console.log(`File Path: ${filePath}\n`)

console.log(`Mean: ${String(Mean(numArray))}`)
console.log(`Median: ${String(Median(numArray))}`)
// console.log(`Modes: ${String(Mode(numArray))}`)

console.log('\nDone.')
