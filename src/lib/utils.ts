import { MAX_DIGIT, MIN_DIGIT } from '~/constants/digits'

export function randomDigits(n: number): number[] {
  const result: number[] = []

  while ([...new Set(result)].length < 3) {
    const digit = Math.floor(Math.random() * (MAX_DIGIT - MIN_DIGIT) + MIN_DIGIT)
    result.push(digit)
  }

  return [...new Set(result)]
}

export function randomDigit(min: number = 0, max: number = 9) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function isGreen(value: number) {
  return value % 2 === 1
}
export function isRed(value: number) {
  return value % 2 === 0
}
