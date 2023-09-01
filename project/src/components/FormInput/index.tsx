import { formInputProps } from "../../interfaces/formInputProps"

export function FormInput({ htmlFor, children, type, id, placeholder }: formInputProps): JSX.Element {
  return (
    <>
      <label htmlFor={htmlFor}><h5>{children}</h5></label>
      <input type={type} className="form-control" id={id} placeholder={placeholder} />
    </>
  )
}
