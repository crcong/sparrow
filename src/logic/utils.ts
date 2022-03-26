export function getRandom(start:number, end:number) {
  return Math.floor(Math.random() * (end - start + 1) + start)
}

export const promiseTimeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
