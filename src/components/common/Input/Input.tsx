import search from './../../icons/search.svg'

type PropsType = {
  className:string
  placeholder: string
}

export const Input = (props: PropsType) => {
  return (
    <div className={props.className}>
      <input
             type={"text"}
             disabled
             placeholder={props.placeholder}/>
      <button>
        <img src={search} alt=''/>
      </button>
    </div>
  )
}