import { MouseEventHandler } from "react";

interface IlistProps {
  date: string,
  distance: string,
  onClick: MouseEventHandler<HTMLButtonElement>,
  id: number,
}

const ListItem = ({date, distance, onClick, id} : IlistProps) => {
  return (
    <li key={id} className="list-item">
      <p className="date">{date}</p>
      <p className="distance">{distance}</p>
      <button onClick={() => onClick(date)} className="delite-btn">x</button>
    </li>
  )
}

export default ListItem;