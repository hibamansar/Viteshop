
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container">
        <p>créer par <span>hiba mansar</span> tous droits réservés &copy; {currentYear} </p>
      </div>
    </footer>
  )
}

export default Footer