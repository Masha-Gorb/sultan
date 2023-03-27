import search from './../../icons/search.svg'


export const Input = (props: any) => {
  return (
    <div className={props.className}>
      <input
             type={"text"}
             placeholder={props.placeholder}/>
      <button>
        <img src={search} alt=''/>
      </button>
    </div>
  )
}