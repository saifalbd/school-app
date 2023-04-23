<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper">
          <div class="login-content">
            
            <div class="login-userset">
             
             
              <div class="login-userheading">
                <h3>Sign In</h3>
                <h4>Please login to your account</h4>
              </div>

              <Form
                class="login"
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                <div class="form-login">
                  <label>Email</label>
                  <div class="form-addons">
                    <Field
                      name="email"
                      type="text"
                      v-model="email"
                      class="form-control"
                      :class="{ 'is-invalid': errors.email }"
                    />

                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <img src="/assets/img/icons/mail.svg" alt="img" />
                  </div>
                </div>
                <div class="form-login">
                  <label>Password</label>
                  <div class="pass-group">
                  
                    <Field
                  
                      name="password"
                      :type="showPassword?'text':'password'"
                      v-model="password"
                      class="form-control pass-input"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span
                      @click="showPassword=!showPassword"
                      class="fas toggle-password"
                      :class="{
                        'fa-eye': showPassword,
                        'fa-eye-slash': !showPassword,
                      }"
                    ></span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                  
                  </div>
                </div>
                <div class="form-login">
                  <div class="alreadyuser">
                    <h4>
                      <router-link to="forgetpassword" class="hover-a"
                        >Forgot Password?</router-link
                      >
                    </h4>
                  </div>
                </div>
                <div class="form-login">
                  <button class="btn btn-login" type="submit">Sign In</button>
                </div>
              </Form>
              <div class="signinform text-center">
                <h4>
                  Don’t have an account?
                  <router-link to="signup" class="hover-a">Sign Up</router-link>
                </h4>
              </div>
              <div class="form-setlogin">
                <h4>Or sign up with</h4>
              </div>
              <div class="form-sociallink">
                <ul>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="/assets/img/icons/google.png"
                        class="me-2"
                        alt="google"
                      />
                      Sign Up using Google
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <img
                        src="/assets/img/icons/facebook.png"
                        class="me-2"
                        alt="google"
                      />
                      Sign Up using Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
         
          </div>
          <div class="login-img">
            <img src="/assets/img/login.jpg" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>
<script lang="ts">
import { ref } from "vue";
import { useStore } from 'vuex'

import { Form, Field,useForm } from "vee-validate";
import {formErrors} from '../../plugins/utility'
import {useRouter} from "vue-router";
import * as Yup from "yup";
import axios, { Axios, AxiosError } from 'axios';
export default {
  components: {
    Form,
    Field,
  },
 
  
  setup() {
    const store = useStore();
   
    const router = useRouter();
    const  showPassword=  ref(false);
    const password = ref(12345678);
    const email = ref('school@example.com')


 
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
     const { handleSubmit,setFieldError, errors, } = useForm({
       validationSchema: schema,
    });
    const onSubmit = async (values,{setErrors})=>{
      
 
      try {
        const url = route("api.login",{});
        console.log(url)
        const {data} = await axios.post(url,{
          password:password.value,
          email:email.value
        });
   
    store.commit('addToken',data.token);
    store.commit('addUser',data.user);
    router.push({name:'home'})

        
      } catch (error:any) {
       setErrors(formErrors(error))
     
      }
    };
    return {
      showPassword,
      password,
      email,
      schema,
      onSubmit,
    };
  },
};
</script>


