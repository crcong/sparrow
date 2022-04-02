export function getRandom(start:number, end:number) {
  return Math.floor(Math.random() * (end - start + 1) + start)
}

export const promiseTimeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const parseTime = (time: number) => {
  const minute = Math.floor(time / 60)
  const second = time % 60
  if (minute <= 0) {
    return `${second}秒`
  }
  return `${minute}分${second}秒`
}
