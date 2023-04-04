export const Pagination = (props: any) => {

  const pageNumbers = [];
  for(let i = 1; i <= (props.totalProducts / props.productsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <ul>
        {
          pageNumbers.map(number => (
            <li>{number}</li>
          ))
        }
      </ul>

    </div>
  )
}