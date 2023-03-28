import {Link} from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>Такой страницы нет, извините!</h1>
      <div>Вернутся на  <Link to="/">главную</Link></div>
    </div>
  )
}