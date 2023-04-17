import {Link} from "react-router-dom";
import verticalSmall from "../../icons/vertical_small.svg";
import React from "react";
import s from "./Breadcrumbs.module.scss";

type propsType = {
  address: addressType[]
}
type addressType = {
  title: string
  link: string
}

export const Breadcrumbs = (props: propsType) => {
  return (
    <div className={s.breadcrumbs__main}>

      {props.address.map((m: addressType) => <div className={s.breadcrumbs__main}>
        <p><Link to={m.link}>{m.title}</Link></p>
        <img style={{height: "16px", marginLeft: "10px", marginRight: "20px", marginTop: "15px"}} src={verticalSmall}
             alt=''/>
      </div>)}
    </div>
  )
}