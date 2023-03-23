export const Button = (props: any) => {
  return (
    <div>
      <button className={props.className} onClick={props.foo}>{props.title}</button>
    </div>
  )
}