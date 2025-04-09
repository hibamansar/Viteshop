import Produit from "./Produit";
import { useSelector } from "react-redux";
const MeilleuresVentes = () => {
  const products = useSelector((state) => state.products.items);
  return (
    <section className="section best-sellers-section">
      <div className="container">
        <div className="title-wrapper">
          <h3 className="best-sellers-title">Nos Meilleures Ventes</h3>
          <p className="best-sellers-description">
            Découvrez les produits les plus appréciés par nos clients. Une
            sélection incontournable alliant qualité, popularité et satisfaction
            garantie.
          </p>
        </div>
        <div className="products-list">
          {products.map((produit) => (
            <Produit produit={produit} key={produit.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeilleuresVentes;
