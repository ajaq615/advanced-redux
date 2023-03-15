import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      title: "Phoebus PG30 Acoustic Guitar",
      description: "Solid sitka spruce top with laminated back and sides.",
      price: "12900",
    },
    {
      id: "p2",
      title: "Tagima tw-55",
      description:
        "Tele style electric guitar with upgraded pickups and electronics.",
      price: "9500",
    },
    {
      id: "p3",
      title: "Boss Katana 100 1x12",
      description:
        "100w guitar amp modeler with built-in effects.",
      price: "26500",
    },
    {
      id: "p4",
      title: "Boss GA-FC foot controller",
      description:
        "Switch instantly between four channels and two routes of loops, reverbs, boost settings, etc.",
      price: "6500",
    },
    {
      id: "p5",
      title: "NU-X MG-30",
      description:
        " the best-budget compact modeler on the market ever",
      price: "12500",
    },

  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
