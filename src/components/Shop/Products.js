import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "P1",
    price: 142.5,
    title: "Alice Marta Bag",
    description: "Nute - Khaki",
  },
  {
    id: "P2",
    price: 31.1,
    title: "Marhen.J",
    description: "KONY POCKET Beige",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
