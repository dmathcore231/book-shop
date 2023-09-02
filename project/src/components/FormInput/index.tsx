import { formInputProps } from "../../interfaces/FormInputProps"

export function FormInput({ htmlFor, children, type, id, placeholder, value, onChange }: formInputProps): JSX.Element {
  return (
    <>
      <label htmlFor={htmlFor}><h5>{children}</h5></label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  )
}
