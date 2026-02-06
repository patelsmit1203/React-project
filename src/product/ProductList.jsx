import Product from "./Product";
import productData from "./productData";
import "./Product.css";

function ProductList() {
  return (
    <section className="product-page">
      <h1>Our Products</h1>

      <div className="product-grid">
        {productData.map((item) => (
          <Product
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
