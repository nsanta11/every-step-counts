import peHeaderLogo from '@/assets/images/pe-header-logo.svg';
import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="https://parentsempowered.org" className="header__logo-link">
          <img src={peHeaderLogo} alt="Parents Empowered" className="header__logo" />
        </a>

        <ul className="header__social">
          <li>
            <a href="https://www.facebook.com/ParentsEmpowered/" target="_blank" rel="noreferrer" aria-label="Facebook" className="header__social-link header__social-link--facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/parentsempoweredut/" target="_blank" rel="noreferrer" aria-label="Instagram" className="header__social-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
