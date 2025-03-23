export default function Footer({ socialLinks = [] }) {
    return (
      <footer>
        {socialLinks.length > 0 ? (
          socialLinks.map((link, index) => (
            <a key={index} href={link.url || "#"}>{link.platform || "Unknown"}</a>
          ))
        ) : (
          <p>No social links</p>
        )}
      </footer>
    );
  }
  