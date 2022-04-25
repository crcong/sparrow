import _questions from '~/data/questions.json'
import { parseTime } from '~/logic/'
import { GameState, Question, QuestionsData } from '~/types'
import { MAX_STAGE } from '~/logic'

const params = new URLSearchParams(window.location.search)
export const isDev = params.get('dev') === '666'

export const questionData = _questions as QuestionsData
export const gameState = ref<GameState>(1)
export const maxStage = isDev ? 1 : MAX_STAGE
export const stage = ref(1)
export const question = ref<Question>({ q: [], a: [], kindType: 'B' })
export const { counter, pause: pauseCounter, resume: resumeCounter } = useInterval(1000, { controls: true })
export const spendTime = computed(() => parseTime(counter.value))

export const showRule = ref(true)
export const alreadyReadRule = useStorage('alreadyReadRule', false)

export const showThanks = ref(false)
