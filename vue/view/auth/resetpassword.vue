<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper">
        <div class="login-content">
          <div class="login-userset">
            <div class="login-logo logo-normal">
              <img src="../../../assets/img/logo.png" alt="img" />
            </div>
            <router-link to="/index" class="login-logo logo-white">
              <img src="../../../assets/img/logo-white.png" alt="" />
            </router-link>
            <div class="login-userheading">
              <h3>Reset Password</h3>
            </div>
            <div class="form-login">
              <label>Password</label>
              <div class="pass-group">
                <input
                  v-if="showPassword"
                  type="text"
                  class="pass-input"
                  placeholder="Enter your password"
                />
                <input
                  v-else
                  type="password"
                  class="pass-input"
                  placeholder="Enter your password"
                />
                <span
                  @click="toggleShow"
                  class="fas toggle-password"
                  :class="{
                    'fa-eye': showPassword,
                    'fa-eye-slash': !showPassword,
                  }"
                ></span>
              </div>
            </div>
            <div class="form-login">
              <label>Confirm Password</label>
              <div class="pass-group">
                <input
                  type="password"
                  class="pass-inputs"
                  placeholder="Enter your password"
                />
                <span class="fas toggle-passwords fa-eye-slash"></span>
              </div>
            </div>
            <div class="form-login">
              <a class="btn btn-login">Reset Password</a>
            </div>
          </div>
        </div>
        <div class="login-img">
          <img src="../../../assets/img/login.jpg" alt="img" />
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  name: "resetpassword",
};
</script>
