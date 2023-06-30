import './ItemList.css'
const ItemList = ({saludo}) => {
  return (
    <div>
        <h2 className="itemList">{saludo}</h2>
    </div>
  )
}

export default ItemList