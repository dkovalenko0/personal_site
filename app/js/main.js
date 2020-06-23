!(function ($) {
  "use strict";

  // Nav Menu
  $(document).on("click", ".nav a, .mobile-nav a", function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents(".nav, .mobile-nav").length) {
          $(".nav .active, .mobile-nav .active").removeClass("active");
          $(this).closest("li").addClass("active");
        }

        if (hash == "#header") {
          $("#header").removeClass("header-top");
          $("section").removeClass("section-show");
          return;
        }

        if (!$("#header").hasClass("header-top")) {
          $("#header").addClass("header-top");
          setTimeout(function () {
            $("section").removeClass("section-show");
            $(hash).addClass("section-show");
          }, 350);
        } else {
          $("section").removeClass("section-show");
          $(hash).addClass("section-show");
        }

        $("html, body").animate(
          {
            scrollTop: 0,
          },
          350
        );

        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          $(".mobile-nav-toggle i").toggleClass(
            "icofont-navigation-menu icofont-close"
          );
          $(".mobile-nav-overly").fadeOut();
        }

        return false;
      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $("#header").addClass("header-top");
      $(".nav .active, .mobile-nav .active").removeClass("active");
      $(".nav, .mobile-nav")
        .find('a[href="' + initial_nav + '"]')
        .parent("li")
        .addClass("active");
      setTimeout(function () {
        $("section").removeClass("section-show");
        $(initial_nav).addClass("section-show");
      }, 350);
    }
  }

  $(document).ready(function () {
    $(".venobox").venobox({
      share: false,
      bgcolor: "rgba(0, 0, 0, 0.8)",
    });

    // $(".slider-items").slick({
    //   infinite: true,
    //   dots: true,
    // });
  });
})(jQuery);
