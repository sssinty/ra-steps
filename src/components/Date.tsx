import { MouseEventHandler} from "react";
import ListItem from "./ListItem";

interface IDate {
  state: Array<{'': number}>,
  btnRemove: MouseEventHandler<HTMLButtonElement>
}

const Date = ({state , btnRemove} : IDate) => {
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

  return (
    <ul className='list-date'>
      {filterArrayData().map((obj, id) => {
        for(const key in obj) {
          return <ListItem id={id} date={key} distance={obj[key]} onClick={btnRemove}/>
        }
      })}
    </ul>
  )
}

export default Date;