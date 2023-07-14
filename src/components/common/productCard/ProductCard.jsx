import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const ProductCard = ({item}) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardMedia sx={{ height: 300 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${item.id}`}>
        <Button size="small" variant="contained">
          Ver Detalle
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ProductCard


    // <div key={item.id}>
    //   <img src={item.img} alt="" />
    //   <h2>{item.title}</h2>
    //   <h2>{item.price}</h2>
    //   <h2>{item.description}</h2>
    // </div>