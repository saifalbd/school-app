<template>
  <!-- Header Menu -->
  <ul class="nav user-menu">
    <!-- Search -->
    <li class="nav-item nav-searchinputs">
      <div class="top-nav-search">
        <a href="javascript:void(0);" class="responsive-search">
          <i class="fa fa-search"></i>
        </a>
        <form action="#">
          <div class="searchinputs">
            <input type="text" placeholder="Search" />
            <div class="search-addon">
              <span><vue-feather type="search" class="feather-14"></vue-feather></span>
            </div>
          </div>
        </form>
      </div>
    </li>
    <!-- /Search -->

    <!-- Flag -->
    <li class="nav-item dropdown has-arrow flag-nav nav-item-box">
      <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="javascript:void(0);"
        role="button"
      >
        <vue-feather type="globe"></vue-feather>
      </a>
    
    </li>
    <!-- /Flag -->
    <li class="nav-item nav-item-box">
      <a href="javascript:void(0);" id="btnFullscreen" @click="initFullScreen">
        <vue-feather type="maximize"></vue-feather>
      </a>
    </li>
    <li class="nav-item nav-item-box">
      
    </li>
    <!-- Notifications -->
    <li class="nav-item dropdown nav-item-box">
      <a
        href="javascript:void(0);"
        class="dropdown-toggle nav-link"
        data-bs-toggle="dropdown"
      >
        <vue-feather type="bell"></vue-feather><span class="badge rounded-pill">2</span>
      </a>
      <div class="dropdown-menu notifications">
        <div class="topnav-dropdown-header">
          <span class="notification-title">Notifications</span>
          <a href="javascript:void(0)" class="clear-noti"> Clear All </a>
        </div>
        <div class="noti-content">
          <ul class="notification-list">
            <li
              class="notification-message"
              v-for="item in headernotification"
              :key="item.id"
            >
          
            </li>
          </ul>
        </div>
        <div class="topnav-dropdown-footer">
          
        </div>
      </div>
    </li>
    <!-- /Notifications -->
   
    <li class="nav-item dropdown has-arrow main-drop">
      <a
        href="javascript:void(0);"
        class="dropdown-toggle nav-link userset"
        data-bs-toggle="dropdown"
      >
        <span class="user-info">
          <span class="user-letter">
            <img :src="avatar.smUrl" alt="" class="img-fluid" />
          </span>
          <span class="user-detail">
            <span class="user-name">{{user.name}}</span>
            <span class="user-role">Super Admin</span>
          </span>
        </span>
      </a>
      <div class="dropdown-menu menu-drop-user">
        <div class="profilename">
          <div class="profileset">
            <span class="user-img"
              ><img :src="avatar.smUrl" alt="" />
              <span class="status online"></span
            ></span>
            <div class="profilesets">
              <h6>{{user.name}}</h6>
              <h5>Super Admin</h5>
            </div>
          </div>
          <hr class="m-0" />
         
          
          <hr class="m-0" />
          <router-link class="dropdown-item logout pb-0" to="/"
            ><img
              src="/assets/img/icons/log-out.svg"
              class="me-2"
              alt="img"
            />Logout</router-link
          >
        </div>
      </div>
    </li>
  </ul>
  <!-- /Header Menu -->
</template>
<script>
import {mapState} from 'vuex';
export default {
  data() {
    return {
      lan:'',
      text:'',
      flag:'',
      headernotification: [],
      languages: [
        
      ],
    };
  },
  computed:{
...mapState(['user','avatar'])
  },
  methods: {
    setLanguage(locale, country, flag) {
      this.lan = locale;
      this.text = country;
      this.flag = flag;
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */
        !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
  },
};
</script>
