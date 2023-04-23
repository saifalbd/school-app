<template>
  <div class="account-page">
    <!-- Main Wrapper -->
    <div class="main-wrapper">
      <div class="account-content">
        <div class="login-wrapper">
          <div class="login-content">
            <div class="login-userset">
            
              <div class="login-userheading">
                <h3>Create an Account</h3>
                <h4>Continue where you left off</h4>
              </div>
              <Form
                class="register"
                @submit="onSubmit"
                :validation-schema="schema"
                v-slot="{ errors }"
              >
                   <div class="form-login">
                  <label>Name</label>
                  <div class="form-addons">
                    <Field
                      name="name"
                      type="text"
                      class="form-control"
                      v-model="name"
                      :class="{ 'is-invalid': errors.name }"
                    />
                    <img src="/assets/img/icons/mail.svg" alt="img" />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                </div>
                <div class="form-login">
                  <label>Email</label>
                  <div class="form-addons">
                    <Field
                      name="email"
                      type="text"
                      class="form-control"
                      v-model="email"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <img src="/assets/img/icons/mail.svg" alt="img" />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                </div>
                <div class="form-login">
                  <label>Password</label>
                  <div class="pass-group">
                    <Field
                      name="password"
                      v-model="password"
                     :type="showPassword?'password':'text'"
                      class="form-control pass-input"
                      placeholder="Password"
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
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                </div>
                <div class="form-login">
                  <label>Repeat Password</label>
                  <div class="form-addons pass-group">
                  
                    <Field
                     v-model="confirmpassword"
                      name="confirmpassword"
                      :type="showPassword1?'password':'text'"
                      class="form-control pass-inputs"
                      placeholder="Confirm Password"
                      :class="{ 'is-invalid': errors.confirmpassword }"
                    />
                    <span
                      @click="showPassword1=!showPassword1"
                      class="fas toggle-passwords"
                      :class="{
                        'fa-eye': showPassword1,
                        'fa-eye-slash': !showPassword1,
                      }"
                    ></span>
                    <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                    <div class="emailshow text-danger" id="confirmpassword"></div>
                  </div>
                </div>
                <div class="form-login">
                  <a class="btn btn-login">Sign Up</a>
                </div>
              </Form>
              <div class="signinform text-center">
                <h4>
                  Already a user?
                  <router-link to="/" class="hover-a">Sign In</router-link>
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
    <!-- /Main Wrapper -->
  </div>
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
    const showPassword1 = ref(false)
    const password = ref(null);
    const confirmpassword = ref(null);
    const email = ref('')
    const name = ref('');



 
    const schema = Yup.object().shape({
      name:Yup.string().required("Name is required"),
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
      showPassword1,
      password,
      confirmpassword,
      name,
      email,
      schema,
      onSubmit,
    };
  },
};
</script>