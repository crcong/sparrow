import { startGame } from '~/logic/'
import { Tile } from '~/types'

export const stage = ref(1)
export const question = ref(startGame())
export const { counter, pause: pauseCounter, resume: resumeCounter } = useInterval(1000, { controls: true })
export const selected = ref<Tile[]>([])
