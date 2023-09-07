import { ErrorProps } from '../../types/interfaces/ErrorProps'

export function Error({ children }: ErrorProps): JSX.Element {
  return (
    <div className="error d-flex justify-content-center">
      <h3 className="error__title text-danger">{children}</h3>
    </div>
  )
}
