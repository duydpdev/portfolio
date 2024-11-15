import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import { useEffect, useMemo, useRef } from 'react'

export default function AnimationLottie({
  animationPath,
  width = '95%'
}: {
  animationPath: any
  width?: string
}) {
  const lottieRef = useRef<LottieRefCurrentProps>(null)

  const defaultOptions = useMemo(() => {
    return {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      style: {
        width
      },
      lottieRef
    }
  }, [animationPath, width])

  useEffect(() => {
    return () => {
      if (lottieRef?.current) lottieRef?.current.destroy()
    }
  }, [])

  return <Lottie {...defaultOptions} />
}
