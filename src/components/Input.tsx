import { ChangeEventHandler } from "react"

interface IPropsInput {
  value: any,
  type?: 'text',
  onChange: ChangeEventHandler<HTMLInputElement>,
  name: string,
  label: string,
  id: string
}

const Input = ({type='text', value, onChange, name, label, id} : IPropsInput) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={id} name={name} type='text' onChange={onChange} value={value} className="input-bordered"/>
    </>
  )
}
export default Input;