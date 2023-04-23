<template>
  <!-- Header -->
  <div class="header">
    <header-logo />

    <a id="mobile_btn" class="mobile_btn" href="javascript:void(0);">
      <span class="bar-icon">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </a>
    <header-menu />

    <mobile-menu />
  </div>
  <!-- Header -->
</template>
<script>
import HeaderLogo from './headerLogo.vue';
import HeaderMenu from '../headermenu.vue';
import MobileMenu from '../mobilemenu.vue';
export default {
  components: {HeaderLogo,HeaderMenu,MobileMenu},
  mounted() {
    var $wrapper = $(".main-wrapper");
    $(window).resize(function () {
      if ($(".page-wrapper").length > 0) {
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
      }
    });
    $("body").append('<div class="sidebar-overlay"></div>');
    $(document).on("click", "#mobile_btn", function () {
      $wrapper.toggleClass("slide-nav");
      $(".sidebar-overlay").toggleClass("opened");
      $("html").addClass("menu-opened");
      $("#task_window").removeClass("opened");
      return false;
    });

    $(document).on("click", "#toggle_btn", function () {
      if ($("body").hasClass("mini-sidebar")) {
        $("body").removeClass("mini-sidebar");
        $(this).addClass("active");
        $(".subdrop + ul");
        localStorage.setItem("screenModeNightTokenState", "night");
        setTimeout(function () {
          $("body").removeClass("mini-sidebar");
          $(".header-left").addClass("active");
        }, 100);
      } else {
        $("body").addClass("mini-sidebar");
        $(this).removeClass("active");
        $(".subdrop + ul");
        localStorage.removeItem("screenModeNightTokenState", "night");
        setTimeout(function () {
          $("body").addClass("mini-sidebar");
          $(".header-left").removeClass("active");
        }, 100);
      }
      return false;
    });
    $(document).on("mouseover", function (e) {
      e.stopPropagation();
      if ($("body").hasClass("mini-sidebar") && $("#toggle_btn").is(":visible")) {
        var targ = $(e.target).closest(".sidebar, .header-left").length;
        if (targ) {
          $("body").addClass("expand-menu");
          $(".subdrop + ul").slideDown();
        } else {
          $("body").removeClass("expand-menu");
          $(".subdrop + ul").slideUp();
        }
        return false;
      }
    });
    if (localStorage.getItem("screenModeNightTokenState") == "night") {
      setTimeout(function () {
        $("body").removeClass("mini-sidebar");
        $(".header-left").addClass("active");
      }, 100);
    }

    $(".submenus").on("click", function () {
      $("body").addClass("sidebarrightmenu");
    });
  },
};
</script>
