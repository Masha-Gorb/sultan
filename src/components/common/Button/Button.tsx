
type propsType = {
  className: string
  disabled?: boolean
  foo?: () => void
  title: string
  icon?: string
}

export const Button = (props: propsType) => {
  return (
    <div>
      <button className={props.className}
              disabled={props.disabled}
              onClick={props.foo}>
        <span style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
          <span><b>{props.title}</b></span>
          <img style={{marginLeft: "10px",}} src={props.icon} alt={''}/>
        </span>
      </button>
    </div>
  )
}