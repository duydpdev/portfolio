import { LazyExoticComponent, Suspense } from 'react'

export type LoaderProps = Record<string, any> // Cho phép props tuỳ chỉnh

const Loadable =
  (Component: LazyExoticComponent<() => JSX.Element | null>) =>
  (props: LoaderProps) => (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: '100vh' }}
        >
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Component {...props} />
    </Suspense>
  )

export default Loadable
