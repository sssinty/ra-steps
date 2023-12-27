import {ChangeEvent, FormEvent, useState, MouseEventHandler } from 'react';
import './App.css';
import Form from './components/Form';
import Date from './components/Date';

function App() {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(0);
  const [state, setState] = useState<any>([]);

  const updateAccounting = (event : FormEvent<HTMLFormElement>) : void => {
    event.preventDefault();
  }

  const handlerChange = (event : ChangeEvent<HTMLInputElement>) : void => {
    event.target.name === 'date' ? setDate(event.target.value) : setDistance(Number(event.target.value));
  }

  const clickBtn = () => {
    if(date && distance) {
      setState([...state, {[date]: distance}]);
    }
  }

  const btnRemove = (event : MouseEventHandler<HTMLButtonElement>) => {
    console.log(event)
  }
   

  return (
    <div className="container">
      <div className="form-container">
        <Form date={date} distance={distance} updateAccounting={updateAccounting} handlerChange={handlerChange} clickBtn={clickBtn}/>
        <Date state={state} btnRemove={btnRemove}/>
      </div>
    </div>
    
  )
}

export default App;
