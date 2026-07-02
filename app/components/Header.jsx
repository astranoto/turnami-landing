import Link from 'next/link';
import { navLinks, site, basePath } from '../lib/site';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link className="brand" href="/" aria-label="Turnami homepage">
          <img src={`assets/turnami-mark.png`} alt="" className="brand-mark" />
          <span>turnami</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
        <a className="btn btn-dark btn-small desktop-only" href={site.appUrl}>Accedi</a>
        <MobileMenu />
      </div>
    </header>
  );
}
