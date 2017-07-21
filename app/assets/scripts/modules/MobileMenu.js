import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuScreen = $(".body-bin");
        this.menuIcon = $(".mobile-menu-bin__menu-icon");
        this.menuContent = $(".mobile-menu-bin__menu-content");
        this.events();
    }
    
    events() { 
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass("mobile-menu-bin__menu-content--is-visible");
        this.menuScreen.toggleClass("body-bin--is-screened");
    } 
}

export default MobileMenu;
 
  