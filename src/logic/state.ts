import { startGame } from '~/logic/'

export const stage = ref(1)
export const question = ref(startGame())
export const { counter, pause: pauseCounter } = useInterval(1000, { controls: true })
