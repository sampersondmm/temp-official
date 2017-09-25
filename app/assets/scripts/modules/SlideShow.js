import $ from 'jquery';
var n = 1;

  class SlideShow {
    constructor() {
      this.arrowLeft = $(".body-en__slide__arrow-l__icon");
      this.arrowRight = $(".body-en__slide__arrow-r__icon");
      this.slide1 = $(".body-en__slide__in1");
      this.slide2 = $(".body-en__slide__in2");
      this.slide3 = $(".body-en__slide__in3");
      this.circle1 = $(".body-en__slide__circles__in__circle1");
      this.circle2 = $(".body-en__slide__circles__in__circle2");
      this.circle3 = $(".body-en__slide__circles__in__circle3");
      this.events();
    }

    events() {
      this.arrowRight.click(this.counterR.bind(this));
      this.arrowLeft.click(this.counterL.bind(this));
      this.arrowRight.click(this.circleChange.bind(this));
      this.arrowLeft.click(this.circleChange.bind(this));
    }

    counterR() {

      if (n == 1) {
//--Slide1--
        this.slide1.removeClass("body-en__slide__in1--rr");
        this.slide1.removeClass("body-en__slide__in1--r2");
        this.slide1.addClass("body-en__slide__in1--l1");
        this.slide1.removeClass("body-en__slide__in1--l2");
        this.slide1.removeClass("body-en__slide__in1--lr");
        this.slide1.removeClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.removeClass("body-en__slide__in2--r1");
        this.slide2.removeClass("body-en__slide__in2--rr");
        this.slide2.removeClass("body-en__slide__in2--r2");
        this.slide2.removeClass("body-en__slide__in2--l1");
        this.slide2.removeClass("body-en__slide__in2--lr");
        this.slide2.addClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.removeClass("body-en__slide__in3--r1");
        this.slide3.removeClass("body-en__slide__in3--rr");
        this.slide3.removeClass("body-en__slide__in3--r2");
        this.slide3.removeClass("body-en__slide__in3--l1");
        this.slide3.addClass("body-en__slide__in3--lr");
        this.slide3.removeClass("body-en__slide__in3--l2");
      }
      else if (n == 2) {
//--Slide1--
        this.slide1.removeClass("body-en__slide__in1--rr");
        this.slide1.removeClass("body-en__slide__in1--r2");
        this.slide1.removeClass("body-en__slide__in1--l1");
        this.slide1.removeClass("body-en__slide__in1--l2");
        this.slide1.addClass("body-en__slide__in1--lr");
        this.slide1.removeClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.removeClass("body-en__slide__in2--r1");
        this.slide2.removeClass("body-en__slide__in2--rr");
        this.slide2.removeClass("body-en__slide__in2--r2");
        this.slide2.addClass("body-en__slide__in2--l1");
        this.slide2.removeClass("body-en__slide__in2--lr");
        this.slide2.removeClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.removeClass("body-en__slide__in3--r1");
        this.slide3.removeClass("body-en__slide__in3--rr");
        this.slide3.removeClass("body-en__slide__in3--r2");
        this.slide3.removeClass("body-en__slide__in3--l1");
        this.slide3.removeClass("body-en__slide__in3--lr");
        this.slide3.addClass("body-en__slide__in3--l2");
      }
      else {
//--Slide1--
        this.slide1.removeClass("body-en__slide__in1--rr");
        this.slide1.removeClass("body-en__slide__in1--r2");
        this.slide1.removeClass("body-en__slide__in1--l1");
        this.slide1.addClass("body-en__slide__in1--l2");
        this.slide1.removeClass("body-en__slide__in1--lr");
        this.slide1.removeClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.removeClass("body-en__slide__in2--r1");
        this.slide2.removeClass("body-en__slide__in2--rr");
        this.slide2.removeClass("body-en__slide__in2--r2");
        this.slide2.removeClass("body-en__slide__in2--l1");
        this.slide2.addClass("body-en__slide__in2--lr");
        this.slide2.removeClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.removeClass("body-en__slide__in3--r1");
        this.slide3.removeClass("body-en__slide__in3--rr");
        this.slide3.removeClass("body-en__slide__in3--r2");
        this.slide3.addClass("body-en__slide__in3--l1");
        this.slide3.removeClass("body-en__slide__in3--lr");
        this.slide3.removeClass("body-en__slide__in3--l2");
      }
      n = n + 1;
      if (n > 3) {
        n = 1
      }
    }
//--end-counterR--



    counterL() {

      if (n == 1) {
//--Slide1--
        this.slide1.removeClass("body-en__slide__in1--rr");
        this.slide1.removeClass("body-en__slide__in1--r2");
        this.slide1.removeClass("body-en__slide__in1--l1");
        this.slide1.removeClass("body-en__slide__in1--l2");
        this.slide1.removeClass("body-en__slide__in1--lr");
        this.slide1.addClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.removeClass("body-en__slide__in2--r1");
        this.slide2.addClass("body-en__slide__in2--rr");
        this.slide2.removeClass("body-en__slide__in2--r2");
        this.slide2.removeClass("body-en__slide__in2--l1");
        this.slide2.removeClass("body-en__slide__in2--lr");
        this.slide2.removeClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.removeClass("body-en__slide__in3--r1");
        this.slide3.removeClass("body-en__slide__in3--rr");
        this.slide3.addClass("body-en__slide__in3--r2");
        this.slide3.removeClass("body-en__slide__in3--l1");
        this.slide3.removeClass("body-en__slide__in3--lr");
        this.slide3.removeClass("body-en__slide__in3--l2");
      }
      else if (n == 2) {
//--Slide1--
        this.slide1.removeClass("body-en__slide__in1--rr");
        this.slide1.addClass("body-en__slide__in1--r2");
        this.slide1.removeClass("body-en__slide__in1--l1");
        this.slide1.removeClass("body-en__slide__in1--l2");
        this.slide1.removeClass("body-en__slide__in1--lr");
        this.slide1.removeClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.addClass("body-en__slide__in2--r1");
        this.slide2.removeClass("body-en__slide__in2--rr");
        this.slide2.removeClass("body-en__slide__in2--r2");
        this.slide2.removeClass("body-en__slide__in2--l1");
        this.slide2.removeClass("body-en__slide__in2--lr");
        this.slide2.removeClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.removeClass("body-en__slide__in3--r1");
        this.slide3.addClass("body-en__slide__in3--rr");
        this.slide3.removeClass("body-en__slide__in3--r2");
        this.slide3.removeClass("body-en__slide__in3--l1");
        this.slide3.removeClass("body-en__slide__in3--lr");
        this.slide3.removeClass("body-en__slide__in3--l2");
      }
      else {
//--Slide1--
        this.slide1.addClass("body-en__slide__in1--rr");
        this.slide1.removeClass("body-en__slide__in1--r2");
        this.slide1.removeClass("body-en__slide__in1--l1");
        this.slide1.removeClass("body-en__slide__in1--l2");
        this.slide1.removeClass("body-en__slide__in1--lr");
        this.slide1.removeClass("body-en__slide__in1--r1");
//--Slide2--
        this.slide2.removeClass("body-en__slide__in2--r1");
        this.slide2.removeClass("body-en__slide__in2--rr");
        this.slide2.addClass("body-en__slide__in2--r2");
        this.slide2.removeClass("body-en__slide__in2--l1");
        this.slide2.removeClass("body-en__slide__in2--lr");
        this.slide2.removeClass("body-en__slide__in2--l2");
//--Slide3--
        this.slide3.addClass("body-en__slide__in3--r1");
        this.slide3.removeClass("body-en__slide__in3--rr");
        this.slide3.removeClass("body-en__slide__in3--r2");
        this.slide3.removeClass("body-en__slide__in3--l1");
        this.slide3.removeClass("body-en__slide__in3--lr");
        this.slide3.removeClass("body-en__slide__in3--l2");
      }
      n = n - 1;
      if (n < 1) {
        n = 3;
      }
    }
//--end-counterL--


    circleChange() {
      if (n == 1) {
        this.circle1.removeClass("body-en__slide__circles__in__circle1--grey")
        this.circle2.removeClass("body-en__slide__circles__in__circle2--white");
        this.circle3.removeClass("body-en__slide__circles__in__circle3--white");
      } else if(n == 2) {
        this.circle1.addClass("body-en__slide__circles__in__circle1--grey");
        this.circle3.removeClass("body-en__slide__circles__in__circle3--white");
        this.circle2.addClass("body-en__slide__circles__in__circle2--white");
      } else {
        this.circle1.addClass("body-en__slide__circles__in__circle1--grey");
        this.circle2.removeClass("body-en__slide__circles__in__circle2--white");
        this.circle3.addClass("body-en__slide__circles__in__circle3--white");
      }
    }


  }

export default SlideShow;
