<template>
  <div class="content">
    <page-header
      title="Product Add Category"
      title1="Create new product Category"
    />

    <!-- /add -->
    <a-spin :spinning="busy">
      <div class="card">
        <div class="card-body">
          <Form
            @submit="onSubmit"
            :validation-schema="schema"
            class="row"
            v-slot="{ errors }"
          >
            <div class="col-12 col-md-6">
              <input-select
                name="year"
                label="Pass Year"
                :options="years"
                v-model="form.year"
                :error="errors.year"
              >
              <template #label><label>Pass Year <span class="manitory">*</span></label></template>
              </input-select>
            </div>
            <div class="col-12 col-md-6">
              <input-vue
                name="nid"
                label="National ID Number"
                v-model="form.nid"
                :error="errors.nid"
              >
               <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template>
              </input-vue>
            </div>
            <div class="col-12">
              <input-vue
                name="name"
                label="Full Name"
                v-model="form.name"
                :error="errors.name"
              >
               <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template>
              </input-vue>
            </div>
            <div class="col-12 col-md-6">
              <input-vue
                name="phone"
                label="Mobile Number"
                v-model="form.phone"
                :error="errors.phone"
              ></input-vue>
            </div>
             <div class="col-12 col-md-6">
              <input-vue
                name="email"
                label="Email"
                v-model="form.email"
                :error="errors.email"
              ></input-vue>
            </div>

            <div class="col-12 col-md-6">
              <input-vue
                name="profession"
                label="Profession"
                v-model="form.profession"
                :error="errors.profession"
              >
               <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template>
              </input-vue>
            </div>
            <div class="col-12 col-md-6">
              <input-vue
                name="organization"
                label="Organization Name"
                v-model="form.organization"
                :error="errors.organization"
              >
               <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template></input-vue>
            </div>
            <div class="col-12 col-md-4">
              <input-vue
                name="designation"
                label="Designation"
                v-model="form.designation"
                :error="errors.designation"
              > <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template></input-vue>
            </div>

            <div class="col-12 col-md-4">
              <input-vue
                name="district"
                label="District"
                v-model="form.district"
                :error="errors.district"
              > <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template></input-vue>
            </div>

            <div class="col-12 col-md-4">
              <input-vue
                name="thana"
                label="Thana"
                v-model="form.thana"
                :error="errors.thana"
              > <template #label="{label}"><label>{{label}}<span class="manitory">*</span></label></template></input-vue>
            </div>

            <div class="col-12">
              <input-vue
                name="address"
                label="Address"
                v-model="form.address"
                :error="errors.address"
              ></input-vue>
            </div>

            <div class="col-lg-12">
              <div class="form-group">
                <label>Description</label>
                <textarea v-model="form.note" rows="3" max-rows="6"></textarea>
              </div>
            </div>

            <div class="col-lg-12">
              <single-file-upload
                label="Avatar"
                @file="avatar = $event"
              ></single-file-upload>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-submit me-2">Submit</button>
              <router-link to="categorylist" class="btn btn-cancel"
                >Cancel</router-link
              >
            </div>
          </Form>
        </div>
      </div>
    </a-spin>
    <!-- /add -->
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { mixed, object, string } from "yup";
import PageHeader from "../../components/pageheader/pageheader.vue";
import SingleFileUpload from "../../components/SingleFileUpload.vue";
import { Form } from "vee-validate";
import { times } from "lodash";
import { formErrors } from "../../plugins/utility";
import {useRouter} from 'vue-router';

export default defineComponent({
  components: {
    Form,
    PageHeader,
    SingleFileUpload,
  },
  setup() {
    const busy = ref(false);
    const router = useRouter();
    const years = times(50).map((n) => {
      let id = 2023 - n;
      let text = id;
      return { id, text };
    });
    // const form = reactive({
    //   year: null,
    //   nid: null,
    //   name: null,
    //   email: null,
    //   phone: null,
    //   profession: null,
    //   organization: null,
    //   designation: null,
    //   district: null,
    //   thana: null,
    //   address: null,
    //   note: null,
    // });
    const form = reactive({"year":2022,"nid":"55852","name":"saidul company","email":null,"phone":"01312288426","profession":"Seo","organization":"redcom demo","designation":"designation","district":"dhaka","thana":"dhaka","address":"mohamadi hoising","note":"adsadasd"})

    const avatar = ref(null);

    const schema = object({
      year: mixed().required("Year Are Required"),
      nid: mixed().required("Nid Are Required"),
      name: string().required("name Are Required"),
      profession: string().required("Input Are Required"),
      organization: string().required("Input Are Required"),
      designation: string().required("Input Are Required"),
      district: string().required("Input Are Required"),
      thana: string().required("Input Are Required"),
    });

    const onSubmit = async (values,{setErrors})=>{
      try {
        busy.value = true;
        const url = route('api.student.store');
        const f = new FormData;
        for (const key in form) {
          let val = form[key];
          if(val){
            f.append(key,val)
          }
        }
        if(avatar.value){
          f.append('avatar',avatar.value)
        }
        await axios.post(url,f);

        router.push({name:'student.index'});
        
      } catch (error) {
        console.error(error)
       setErrors(formErrors(error))
      }
       busy.value = false;
    }

    return {
      busy,
      form,
      schema,
      avatar,
      years,
      onSubmit
    };
  },
});
</script>

<style scoped>
</style>