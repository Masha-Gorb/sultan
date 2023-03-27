
export const Button = (props: any) => {
  return (
    <div>
      <button className={props.className}
              onClick={props.foo}>
        <span style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
          <span><b>{props.title}</b></span>
          <img style={{marginLeft: "10px",}} src={props.icon} alt={''}/>
        </span>
      </button>
    </div>
  )
}