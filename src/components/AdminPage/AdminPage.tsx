import {Link} from "react-router-dom";

export const AdminPage = () => {
  return (
    <div>
      <h1>admin page</h1>
      <div>Перейдите в <Link to="/catalog">каталог</Link></div>

    </div>
  )
}