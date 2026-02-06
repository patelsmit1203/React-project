function Product(props) {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p className="price">{props.price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default Product;
