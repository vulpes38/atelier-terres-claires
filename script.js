 // 1. On récupère les éléments du DOM avec getElementById ou querySelector
      const burger  = document.getElementById("burger"); 
      const navMenu = document.getElementById("nav-menu");

      // 2. Fonction qui bascule l'état ouvert / fermé.
      function toggleMenu() {
        const isOpen = navMenu.classList.toggle("is-open");
        burger.classList.toggle("is-open", isOpen);   // le burger copie l'état du menu
        burger.setAttribute("aria-expanded", isOpen);
        burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
      }

      // 3. Fonction pour fermer le menu à coup sûr (réutilisée à plusieurs endroits).
      function closeMenu() {
        navMenu.classList.remove("is-open");
        burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Ouvrir le menu");
      }

      // 4. On branche les écouteurs d'événements.
      burger.addEventListener("click", toggleMenu);        // clic burger -> bascule

      navMenu.addEventListener("click", (e) => {           // clic sur un lien -> ferme
        if (e.target.tagName === "A") closeMenu();
      });

      document.addEventListener("keydown", (e) => {        // touche Échap -> ferme
        if (e.key === "Escape") closeMenu();
      });
      