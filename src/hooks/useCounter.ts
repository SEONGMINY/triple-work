import { useEffect, useState } from 'react'

const easeOutExpo = (t: number): number => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

const DURATION = 2000
const FRAME_DURATION = 1000 / 60
const TOTAL_FRAME = Math.round(DURATION / FRAME_DURATION)

const useCounter = (max: number) => {
  let frame = 0
  const [count, setCount] = useState(0)

  const counting = () => {
    frame += 1
    const progress = easeOutExpo(frame / TOTAL_FRAME)
    const current = Math.round(max * progress)

    setCount(current)

    if (max === current) {
      cancelAnimationFrame(requestAnimationFrame(counting))
    }

    requestAnimationFrame(counting)
  }

  useEffect(() => {
    counting()
  }, [max])

  return count
}
export default useCounter
