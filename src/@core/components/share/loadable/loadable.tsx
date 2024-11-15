import { LazyExoticComponent, Suspense } from 'react'
import loadingJSON from '@/assets/lottie/loading.json'
import { AnimationLottie } from '../animation-lottie'

export type LoaderProps = Record<string, any>

const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element | null>) =>
  (props: LoaderProps) => (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '100vh' }}
        >
          <AnimationLottie width="10%" animationPath={loadingJSON} />
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )

export default Loadable
