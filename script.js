    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const moonIcon = '<path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z"/>';
    const sunIcon = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>';
    function setTheme(theme) {
      root.dataset.theme = theme;
      const isDark = theme === 'dark';
      themeIcon.innerHTML = isDark ? sunIcon : moonIcon;
      themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
      document.querySelector('meta[name="theme-color"]').content = isDark ? '#171a17' : '#f7f6f2';
    }
    let storedTheme = null;
    try { storedTheme = localStorage.getItem('theme'); } catch (_) { /* Storage may be unavailable in private browsing. */ }
    setTheme(storedTheme === 'dark' ? 'dark' : 'light');
    themeToggle.addEventListener('click', () => {
      const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
      try { localStorage.setItem('theme', nextTheme); } catch (_) { /* Theme still changes for this visit. */ }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    function setMenuOpen(open) {
      navLinks.classList.toggle('open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    }
    menuToggle.addEventListener('click', () => setMenuOpen(!navLinks.classList.contains('open')));
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
    document.getElementById('year').textContent = new Date().getFullYear();
