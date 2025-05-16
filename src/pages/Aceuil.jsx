import { ArrowRight } from "lucide-react";
import MeilleuresVentes from "../components/MeilleuresVentes";

const Aceuil = () => {
  return (
    <>
      <section className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Bienvenue sur notre site de vente en ligne <span>ViteShop</span>
            </h1>
            <p className="hero-description">
              Votre boutique en ligne spécialisée dans les produits d'exception,
              alliant qualité supérieure, innovation, et élégance intemporelle.
            </p>
            <div className="hero-newsletter">
              <p className="newsletter-text">
                Inscrivez-vous à notre newsletter
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Entrez votre adresse e-mail"
                  className="newsletter-input"
                />
                <button>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="hero-banner">
            <img src="/images/banner.png" alt="Hero" />
          </div>
        </div>
      </section>
      <MeilleuresVentes />
    </>
  );
};

export default Aceuil;
