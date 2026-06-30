import logo from '@/assets/images/pe-footer-logo.svg';
import './FooterSection.scss';

export default function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* <img src={logo} alt="Parents Empowered" className="footer__logo" /> */}
        <a href="https://parentsempowered.org" className="footer__logo" target="_blank">
          <img src={logo} alt="Parents Empowered" className="footer__logo" />
        </a>

        <p className="footer__tagline">
          Walk and talk with your kids. Every step is a chance to connect, listen, and make a difference in their lives.
        </p>

        <p className="footer__copyright">© 2026 Parents Empowered. All Rights Reserved.</p>

        <ul className="footer__links">
          <li>
            <a href="https://parentsempowered.org/privacy-policy/" className="footer__link" target="_blank">Privacy Policy</a>
          </li>
          <li>
            <a href="https://parentsempowered.org/terms-of-use/" className="footer__link" target="_blank">Terms of Use</a>
          </li>
        </ul>

      </div>
    </footer>
  );
}
