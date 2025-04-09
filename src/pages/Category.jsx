
const Category = () => {
  return (
    <section>
      <div className="containe">
        <div className="category-header">
          <h1 className="category-title">Catégorie</h1>
          <p className="category-description">
            Découvrez notre sélection de produits de haute qualité, conçus pour
            répondre à tous vos besoins.
          </p>
        </div>
        <div className="category-products-list">
          {/* Products will be rendered here */}
        </div>
      </div>
    </section>
  )
}

export default Category