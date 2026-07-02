'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { navLinks, site } from '../lib/site';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="mobile-menu-wrap" ref={menuRef}>
      <button
        className={`hamburger${open ? ' is-open' : ''}`}
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>

      {open && (
        <nav className="mobile-nav" aria-label="Navigazione mobile">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a className="btn btn-dark" href={site.appUrl} onClick={() => setOpen(false)}>
            Accedi
          </a>
        </nav>
      )}
    </div>
  );
}
