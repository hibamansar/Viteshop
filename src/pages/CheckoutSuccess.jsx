import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <section>
      <div className="container">
        <div className="success-message-wrapper">
          <CircleCheck className="check-circle" size='115' />
          <h1 className="success-message">
            Votre commande a été passée avec succès !
          </h1>
          <p className="success-description">
            Merci pour votre achat. Vous recevrez bientôt un e-mail de
            confirmation.
          </p>
          <Link to="/" className="checkout-button">
            Retour à la boutique
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
