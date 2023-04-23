<template>
  <!-- Main Wrapper -->
  <div class="main-wrapper">
    <div class="account-content">
      <div class="login-wrapper">
        <div class="login-content">
          <div class="login-userset">
            <div class="login-logo logo-normal">
              <img src="/assets/img/logo.png" alt="img" />
            </div>
            <router-link to="/index" class="login-logo logo-white">
              <img src="/assets/img/logo-white.png" alt="" />
            </router-link>
            <div class="login-userheading">
              <h3>Forgot password?</h3>
              <h4>
                Don’t warry! it happens. Please enter the address <br />
                associated with your account.
              </h4>
            </div>
            <div class="form-login">
              <label>Email</label>
              <div class="form-addons">
                <input type="text" placeholder="Enter your email address" />
                <img src="/assets/img/icons/mail.svg" alt="img" />
              </div>
            </div>
            <div class="form-login">
              <router-link class="btn btn-login" to="/">Submit</router-link>
            </div>
          </div>
        </div>
        <div class="login-img">
          <img src="/assets/img/login.jpg" alt="img" />
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  name: "forgetpassword",
};
</script>
