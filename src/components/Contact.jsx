const Contact = () => {
  return (
    <div className="container">
      <div className="contact-wrapper">
        <h1 className="contact-title">Contactez-nous</h1>
        <p className="contact-description">
          Si vous avez des questions ou des préoccupations, n'hésitez pas à nous
          contacter. Nous sommes là pour vous aider !
        </p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Votre nom"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="contact-input"
          />
          <textarea
            placeholder="Votre message"
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact;