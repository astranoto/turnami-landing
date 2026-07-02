'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, site } from '../lib/site';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  function close() { setOpen(false); }

  return (
    <div className="mobile-menu-wrap">
      <button
        className={`hamburger${open ? ' is-open' : ''}`}
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <>
          <div className="mobile-nav-backdrop" onClick={close} />
          <nav className="mobile-nav" aria-label="Navigazione mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={close}>
                {link.label}
              </Link>
            ))}
            <a className="btn btn-dark" href={site.appUrl} onClick={close}>
              Accedi
            </a>
          </nav>
        </>
      )}
    </div>
  );
}
