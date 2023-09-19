import { formInputProps } from '../../types/interfaces/FormInputProps'

export function FormInput({ htmlFor, children, type, id, placeholder, value, required, className, disabled, onChange }: formInputProps): JSX.Element {
  return (
    <>
      <label htmlFor={htmlFor}><h5>{children}</h5></label>
      <input
        type={type}
        className={`form-control ${className}`}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
    </>
  )
}
