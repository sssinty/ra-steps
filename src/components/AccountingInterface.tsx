import { ChangeEventHandler, FormEvent, MouseEventHandler, useState } from 'react';
import Input from './Input';
import ListItem from './ListItem';

const AccountingInterface = () => {
  const [date, setDate] = useState(null);
  const [distance, setDistance] = useState(null);
  const [state, setState] = useState([]);

  const updateAccounting = (event : FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  
  const dateChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDate(event.target.value);
  }

  const distanceChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setDistance(Number(event.target.value));
  }

  const btnSend = () => {
    if(date != null && distance != null) {
      setState([...state, {[date]: distance}]);
    }
  } 

  const filterArrayData = () => {
    const holder: any = {};

    state.forEach((obj) => {
      for (const key in obj) {
        if (holder.hasOwnProperty(key)) {
          holder[key] = holder[key] + obj[key];
        } else {
          holder[key] = obj[key];
        }
      }
    });
    
    const newState = [];
    
    for (const key in holder) {
      newState.push({[key]: holder[key]});
    }
    return newState.sort((a, b) => a > b ? 1 : -1)
  }
  
  const btnClose = (event : MouseEventHandler<HTMLButtonElement>) => {
    console.log(event)
  }
  
  return(
    <div className="container">
        <div className="form-container">
          <form className="form" onSubmit={updateAccounting}>
            <Input id='date' name='date' label='Дата (ДД.ММ.ГГ)' value={date} onChange={dateChange}/>
            <Input  id='distance' name='distance' label='Пройдено км' value={distance} onChange={distanceChange}/>
            <button onClick={btnSend} className="btn">ок</button>

            <div className='storage'>
              <div className='paragraph'>
                <p className='p-date'>Дата (ДД.ММ.ГГ)</p>
                <p className='p-distance'>Пройдено км</p>
              </div>
              <ul className='list-date'>
                {filterArrayData().map((obj) => {
                  for(const key in obj) {
                    return <ListItem date={key} distance={obj[key]} onClick={btnClose}/>
                  }
                })}
              </ul>
            </div>
          </form>
        </div>
    </div>
  )
}
export default AccountingInterface;