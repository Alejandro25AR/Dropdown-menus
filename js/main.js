window.addEventListener("load", () => {
  /*----- Variables -----*/
  const $close = "#close";
  const $menuHamburguer = "#menuHamburguer";
  const $modal = document.getElementById("modal");
  const $menu = document.getElementById("menu");
  const classCSS = {
    visible: "is-visible",
    block: "is-block"
  }
  const arrowSVG = {
    up: '<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L6 2L11 7" stroke="#161616" stroke-width="2"/></svg>',
    down: '<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="#686868" stroke-width="2"/></svg>',
  };

  /*----- Funtions -----*/
  class Menu {
    constructor(nameID) {
      this.id =`#${nameID}`;
      this.$arrow = document.querySelector(`${this.id} #arrow`);
      this.$element = document.getElementById(`submenu-${nameID}`);
      this.currentArrow = 'down';
    }
    changeArrowSVG(){ this.$arrow.innerHTML = arrowSVG[this.currentArrow]; }
    changeValueAttributeArrow() { this.$arrow.setAttribute("data-current-arrow", this.currentArrow); }
    updateValueCurrentArrow() { this.currentArrow = this.currentArrow === 'down' ? 'up' : 'down'; }
    openDropdownMenu() {
      this.$element.classList.toggle(classCSS.block);
      this.updateValueCurrentArrow();
      this.changeArrowSVG();
      this.changeValueAttributeArrow();
    }
  }

  /*----- Execution -----*/
  const features = new Menu("features");
  const company = new Menu("company");
  document.addEventListener("touchend", (e) => {
    if (
      e.target.matches($menuHamburguer) ||
      e.target.matches(`${$menuHamburguer} *`)
    ) {
      $modal.classList.add(classCSS.visible);
      $menu.classList.add(classCSS.visible);
    }
    if (e.target.matches($close) || e.target.matches(`${$close} *`)) {
      $modal.classList.remove(classCSS.visible);
      $menu.classList.remove(classCSS.visible);
    }
    if (e.target.matches(features.id) || e.target.matches(`${features.id} *`)) {
      features.openDropdownMenu();
    }
    if (e.target.matches(company.id) || e.target.matches(`${company.id} *`)) {
      company.openDropdownMenu();
    }
  });
});