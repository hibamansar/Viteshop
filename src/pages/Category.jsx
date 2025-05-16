import { useParams } from "react-router-dom"
import Produit from "../components/Produit";
import products from "../utils/products";
const Category = () => {
  const { category } = useParams();
  const filtredProducts = products.filter((product) => product.category === category )
  return (
    <section className="section">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="best-sellers-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <p className="best-sellers-description">
            Découvrez notre sélection de produits de haute qualité, conçus pour
            répondre à tous vos besoins.
          </p>
        </div>
        <div className="products-list">
          {
            filtredProducts.map((product) => (
              <Produit produit={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category;