import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ({items}) => {

  return (
    <section style={{width:'100%', display:'flex',  flexWrap:'wrap', gap:'1rem', justifyContent:'center', paddingBlock:'2rem'}}>
      {items.map( (item)=> <ProductCard key={item.id} item={item}/>)}
    </section>
  );
}

export default ItemList