import { useEffect, useRef, useState } from "react";
import "../src/Header.css";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const menuButtonRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const difference = currentY - lastScrollY.current;

      if (menuOpen && Math.abs(difference) > 2) {
        setMenuOpen(false);
        setHeaderHidden(false);
        lastScrollY.current - currentY;
        return;
      }

      if (!menuOpen && Math.abs(difference) > 6) {
        setHeaderHidden(currentY > 100 && difference > 0);
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleOutsideClick(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
        setHeaderHidden(false);
      }
    }

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    setHeaderHidden(false);
  }

  return (
    <header
      ref={headerRef}
      className={[
        "site-header",
        headerHidden && !menuOpen ? "site-header--hidden" : "",
        menuOpen ? "site-header--open" : "",
      ].join(" ")}
      onFocusCapture={() => setHeaderHidden(false)}
    >
      <div className="site-header__inner">
        <a href="#home" className="site-header__logo" onClick={closeMenu}>
          PORTFOLIO{" "}
        </a>
        <nav className="site-header__desktop-nav" aria-label="주 메뉴">
          {menuItems.map((items) => (
            <a key={items.name} href={items.href}>
              {items.name}
            </a>
          ))}
        </nav>

        {/* mobile hamburger button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="site-header__menu-button"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setHeaderHidden(false);
          }}
        >
          <img src="/assets/header-menu.svg" alt="" width="40" height="20" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="site-header__mobile-nav"
          aria-label="모바일 메뉴"
        >
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={closeMenu}>
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
