<template>

      <div class="content">
        <page-header title="Product Add sub Category" title1="Create new product Category" />

        <!-- /add -->
          <a-spin :spinning="busy" tip="Loading...">
        <div class="card">
          <div class="card-body">
            
            <Form :validation-schema="schema" @submit="onSubmit" class="row" v-slot="{errors}">
              <!-- <div class="col-lg-6 col-sm-6 col-12">
                <div class="form-group">
                  
                  <input-select name="parent"
                   label="Parent Category"
                    :options="parents"
                     v-model="parent" 
                    :error="errors.parent" 
                    placeholder="Choose Category"></input-select>
              
                </div>
              </div> -->

              
              

               <div class="col-lg-12 col-sm-6 col-12">
                <div class="form-group">
                    <Field name="parent"
                   v-model="parent"  
                    
                  
                     v-slot="{ handleChange, handleBlur,field }">
 <vue-select 

                      :class="{ 'is-invalid': !!errors.parent }"
                  
                    @change="handleChange" 
                    @blur="handleBlur"
                  
                      :options="parents" 
                     label="text"
                     :reduce="mediaType => mediaType.id"
                      v-bind="field"
                    ></vue-select>

                    <div class="invalid-feedback">{{ errors.parent }}</div>
  
</Field>
                </div>
              </div>
             

              
          
           
           
              <div class="col-lg-12">
                <button type="submit" class="btn btn-submit me-2">Submit</button>
                <router-link to="subcategorylist" class="btn btn-cancel"
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
<script>
import { ref } from 'vue';
import VueSelect from 'vue-select';
import PageHeader from "../components/pageheader/pageheader.vue";
import {Form,Field} from 'vee-validate';
import { number, object, string } from 'yup';
import { formErrors } from '../plugins/utility';
import SingleFileUpload from '../components/SingleFileUpload.vue';
import {useRouter} from 'vue-router';
export default {
    components:{
      SingleFileUpload,
    VueSelect,
    PageHeader,
    Form,
    Field
  },
  setup() {
        const router = useRouter();
    const busy = ref(false);
    const parents = ref([]);
    const name = ref('');
     const image = ref<File|null>(null);
    const parent = ref(null);
    const description = ref('')
    dropdowns('subCategories',(data)=>{
      parents.value = [{id:1,text:'shose caksks sk'},...data];
    })


    const schema = object({
      name:string().required('name Are Required'),
      parent:string().required('parent are Required')
    })

    const onSubmit = async (values, { setErrors }) => {
  
      try {
      const url = route("api.category.store");
        const fdata = new FormData();
        fdata.append("name", name.value);
        fdata.append('parent',parent.value)
        fdata.append("description", description.value);
        if (image.value) {
          fdata.append("image", image.value);
        }

     await axios.post(url, fdata);
     router.push({name:'categorylist'})
      } catch (error) {
        setErrors(formErrors(error));
      }
    };

    return {busy,parents,name,parent,description,schema,onSubmit}
  
  },
  name: "subaddcategory",
};
</script>
