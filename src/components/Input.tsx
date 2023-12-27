import { ChangeEventHandler } from "react";

interface IPropsInput {
  value: string | number,
  type?: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
  name: string,
  label: string,
  id: string
}

const Input = ({type, value, onChange, name, label, id} : IPropsInput) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} type={type} onChange={onChange} value={value} className="input-bordered"/>
    </>
  )
}
export default Input;