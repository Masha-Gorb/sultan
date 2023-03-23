import search from './../../icons/search.svg'
import s from './Input.module.scss'


export const Input = (props: any) => {
  return (
    <div>
      <input className={props.className}
             type={"text"}
             placeholder={props.placeholder}/>
      <button className={s.inputButton}>
        <img src={search} alt=''/>
      </button>
    </div>
  )
}