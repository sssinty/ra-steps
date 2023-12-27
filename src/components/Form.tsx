import {ChangeEventHandler, FormEvent, MouseEvent} from 'react';
import Input from './Input';

interface IForm {
  updateAccounting: FormEvent<HTMLFormElement>,
  handlerChange: ChangeEventHandler<HTMLInputElement>,
  clickBtn: MouseEvent<HTMLElement>
  date: string,
  distance: number,
}
const Form = ({updateAccounting, handlerChange, clickBtn, distance, date} : IForm) => {
  return(
    <form className="form" onSubmit={updateAccounting}>
      <Input type='date' id='date' name='date' label='Дата (ДД.ММ.ГГ)' value={date} onChange={handlerChange}/>
      <Input  type='number' id='distance' name='distance' label='Пройдено км' value={distance} onChange={handlerChange}/>
      <button className="btn" onClick={clickBtn}>OK</button>

      <div className='storage'>
        <div className='paragraph'>
          <p className='p-date'>Дата (ДД.ММ.ГГ)</p>
          <p className='p-distance'>Пройдено км</p>
        </div>
      </div>
    </form>
  )
}
export default Form;