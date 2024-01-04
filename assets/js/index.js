$(document).ready(function () {
  var owl = $(".owl-carousel");
  $(document).on("mousemove", function (e) {
    $(".magic-cursor").css({
      left: e.clientX,
      top: e.clientY,
    });
  });
  $(".stg-1").owlCarousel({
    loop: true,
    paginationSpeed: 800,
    responsiveClass: true,
    margin: 10,
    nav: false,
    autoPlay: true,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 3,
      },
    },
  });
  $(".stg-2").owlCarousel({
    autoplaySpeed: 50,
    loop: false,
    dots: false,
    responsiveClass: true,
    margin: 10,
    navigation: false,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 250,
    responsive: {
      0: {
        items: 2,
      },
      480: {
        items: 3,
      },
      768: {
        items: 4,
      },
    },
  });
  $(".clients-reviwes").owlCarousel({
    autoplaySpeed: 50,
    loop: false,
    responsiveClass: true,
    margin: 10,
    navigation: false,
    autoplay: true,
    autoplayHoverPause: true,
    smartSpeed: 250,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
    dots: false,
    lazyLoad: true,
  });
  $(".customNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".customPreviousBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".accordion-header").click(function () {
    $(this).toggleClass("active").next(".accordion-content").slideToggle();
    $(".accordion-header")
      .not(this)
      .removeClass("active")
      .next(".accordion-content")
      .slideUp(100);
  });
  $(".og-title").mouseover(function () {
    $(this).children(":first").css({
      zIndex: 9999,
    });
    $(".magic-cursor").css({
      background: "#000",
      width: "70px",
      height: "70px",
    });
  });
  $(".og-title").mouseout(function () {
    $(this).children(":first").css({
      color: "#f24e1e",
      zIndex: 9999,
    });
    $(".magic-cursor").css({
      background: "#f24e1e",
      width: "25px",
      height: "25px",
    });
  });
  // $(".og-title").mouseover(function () {
  //   $(this).css({
  //     zIndex: 9999,
  //     color: "#f24e1e",
  //   });
  //   $(".magic-cursor").css({
  //     background: "#000",
  //     width: "70px",
  //     height: "70px",
  //   });
  // });
  // $(".og-title").mouseout(function () {
  //   $(this).css({
  //     color: "#000",
  //     zIndex: 9999,
  //   });
  //   $(".magic-cursor").css({
  //     background: "#f24e1e",
  //     width: "25px",
  //     height: "25px",
  //   });
  // });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var topDist = $(".fixed_navbar").position();
    if (scroll > topDist.top) {
      $(".fixed_navbar").addClass("fixed").fadeIn(3000);
      $(".fixed_navbar").removeClass("border-b-2");
      $(".btn-light").css({
        background: "#fff",
        color: "black",
      });
      $(".dk-btn").css({
        background: "#f24e1e",
        color: "#fff",
      });
      // $(".logo img").attr("src", "../images/logo-dark.png");
      // $(".nav-links ul li a").not(".active").addClass("text-dark");
      $(".sst-links").children("li").addClass("text-[#fff]");
      // $(".num-call").addClass("text-dark");
      // $(".hamburger span").addClass("bg-dark");
    } else {
      $(".dk-btn").css({
        background: "#000",
        color: "#fff",
      });
      // $(".logo img").attr("src", "../images/logo-light.png");
      // $(".hamburger span").removeClass("bg-dark");
      // $(".nav-links ul li a").not(".active").removeClass("text-dark");
      // $(".n_h").removeClass("text-dark");
      $(".sst-links").children("li").removeClass("text-[#fff]");
      // $(".num-call").removeClass("text-dark");
      $(".fixed_navbar").removeClass("fixed");
    }
  });
  $(".mobile-mega-icon").click(function () {
    $(".sm-header").toggleClass("active");
    $(document.body).addClass("overflow-hidden");
    $(document.body).addClass("overflow-hidden");
    $(".shadow-container").toggleClass("active");
    $(document.body).css({
      overflow: "hidden",
    });
  });
  $(".shadow-container").click(function () {
    $(document.body).css({
      overflow: "visible",
    });
    $(".sm-header").toggleClass("active");
    $(".shadow-container").toggleClass("active");
  });
  $(window).on("load", () => {
    $(".preloader").fadeOut();
    // setTimeout(() => {}, 5000);
  });
  $(window).on("resize", () => {
    $(".sm-header").removeClass("active");
    $(".shadow-container").removeClass("active");
    $(document.body).toggleClass("overflow-hidden");
  });
});
