import { Skeleton, Stack } from "@mui/material";
import ProductCard from "../../common/productCard/ProductCard";


const ItemList = ({items}) => {
  let arr = [1,2,3]

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
        paddingBlock: "2rem",
      }}
    >
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : arr.map((elemento) => (
            <Stack spacing={1} key={elemento}>

              <Skeleton variant="rounded" width={300} height={400} />
            </Stack>
          ))}
    </section>
  );
}

export default ItemList


      
   