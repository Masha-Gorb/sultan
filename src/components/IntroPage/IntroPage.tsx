import {Link} from "react-router-dom";

export const IntroPage = () => {
  return (
    <div>
      <h1>Это главная страница</h1>
      <div>Перейдите в <Link to="/catalog">каталог</Link></div>
    </div>
  )
}