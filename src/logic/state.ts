import { parseTime, startGame } from '~/logic/'
import { GameState, Tile } from '~/types'
import { MAX_STAGE } from '~/logic'

const params = new URLSearchParams(window.location.search)
export const isDev = params.get('dev') === '666'

export const gameState = ref<GameState>(1)
export const maxStage = isDev ? 1 : MAX_STAGE
export const stage = ref(1)
export const question = ref(startGame())
export const { counter, pause: pauseCounter, resume: resumeCounter } = useInterval(1000, { controls: true })
export const spendTime = computed(() => parseTime(counter.value))
export const selected = ref<Tile[]>([])

// modal
export const showRule = ref(false)
