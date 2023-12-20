import { MouseEventHandler } from "react";

interface IlistProps {
  date: string,
  distance: string,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ListItem = ({date, distance, onClick} : IlistProps) => {
  return (
    <li className="list-item">
      <p className="date">{date}</p>
      <p className="distance">{distance}</p>
      <button onClick={onClick} className="delite-btn">x</button>
    </li>
  )
}

export default ListItem;