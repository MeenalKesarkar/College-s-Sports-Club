import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} College Sports Club. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;