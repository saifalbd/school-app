<template>
  <!-- Logo -->
  <div class="header-left active">
    <router-link :to="{name:'home'}" class="logo logo-normal">
      <img src="/assets/img/logo.png" alt="" />
    </router-link>
    <router-link :to="{name:'home'}"  class="logo logo-white">
      <img src="/assets/img/logo-white.png" alt="" />
    </router-link>
    <router-link :to="{name:'home'}"  class="logo-small">
      <img src="/assets/img/logo-small.png" alt="" />
    </router-link>
    <a :class="$route.meta.hideClass" id="toggle_btn" href="javascript:void(0);">
      <vue-feather type="chevrons-left" class="feather-16"></vue-feather>
    </a>
  </div>
  <!-- /Logo -->
</template>
