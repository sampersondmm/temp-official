import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.header = $(".header-en");
    this.searchBar = $(".header-en__search__bar");
    this.logoText = $(".header-en__logo__text");
    this.logoSubText = $(".header-en__logo__sub-text");
    this.navA = $(".nav-en__ul__li__a");
    this.logoBox1 = $(".header-en__logo__box1");
    this.logoBox2 = $(".header-en__logo__box2");
    this.logoBox3 = $(".header-en__logo__box3");
    this.logoBox4 = $(".header-en__logo__box4");
    this.logoBox5 = $(".header-en__logo__box5");
    this.logoBox6 = $(".header-en__logo__box6");
    this.searchIcon = $(".header-en__search__icon");
    this.anchor = $(".waypoint-anchor");
    this.createWaypoints();
  }

  createWaypoints() {
      var that = this;
      new Waypoint({
        element: this.anchor[0],
        handler: function(direction) {
          if (direction == "down") {
            that.header.addClass("header-en--color-change");
            that.searchBar.addClass("header-en__search__bar--color-change");
            that.logoText.addClass("header-en__logo__text--color-change");
            that.logoSubText.addClass("header-en__logo__sub-text--color-change");
            that.navA.addClass("nav-en__ul__li__a--color-change");
            that.logoBox1.addClass("header-en__logo__box1--color-change");
            that.logoBox2.addClass("header-en__logo__box2--color-change");
            that.logoBox3.addClass("header-en__logo__box3--color-change");
            that.logoBox4.addClass("header-en__logo__box4--color-change");
            that.logoBox5.addClass("header-en__logo__box5--color-change");
            that.logoBox6.addClass("header-en__logo__box6--color-change");
            that.searchIcon.addClass("header-en__search__icon--color-change");
          } else {
            that.header.removeClass("header-en--color-change");
            that.searchBar.removeClass("header-en__search__bar--color-change");
            that.logoText.removeClass("header-en__logo__text--color-change");
            that.logoSubText.removeClass("header-en__logo__sub-text--color-change");
            that.navA.removeClass("nav-en__ul__li__a--color-change");
            that.logoBox1.removeClass("header-en__logo__box1--color-change");
            that.logoBox2.removeClass("header-en__logo__box2--color-change");
            that.logoBox3.removeClass("header-en__logo__box3--color-change");
            that.logoBox4.removeClass("header-en__logo__box4--color-change");
            that.logoBox5.removeClass("header-en__logo__box5--color-change");
            that.logoBox6.removeClass("header-en__logo__box6--color-change");
            that.searchIcon.removeClass("header-en__search__icon--color-change");
          }
        }
      });
  }
}
export default StickyHeader;
