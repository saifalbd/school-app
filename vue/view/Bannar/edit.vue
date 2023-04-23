<template>
  <div class="content">
    <page-header
      title="Edit Bannar"
      title1="Edit new Bannar"
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
           
        

            <div class="col-12">
              <input-vue
                name="title"
                label="title"
                v-model="title"
                :error="errors.title"
              ></input-vue>
            </div>
<div class="col-12">
              <input-vue
                name="message"
                label="message"
                v-model="message"
                :error="errors.message"
              > </input-vue>
            </div>
         

           

            <div class="col-lg-12">
              <single-file-upload
              :avatar="image"
                label="image"
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
    props:{
        id:{
        type:[Number,String],
        required:true
        }
    },
  components: {
    Form,
    PageHeader,
    SingleFileUpload,
  },
  setup({id}) {
    const busy = ref(true);
    const router = useRouter();
  


const title = ref('');
const message = ref('');
   
    const avatar = ref(null);
    const image = ref(null)

    const schema = object({
    
    });



    const fetch = async ()=>{
        try {
            const url = route('api.bannar.show',{bannar:id});
            const {data} = await axios.get(url)
            title.value = data.title;
            message.value = data.message;
            image.value = data.image;

            busy.value = false;
        } catch (error) {
            console.error(error)
        }
    }
    fetch()

    const onSubmit = async (values,{setErrors})=>{
      try {
        busy.value = true;
        const url = route('api.bannar.update',{bannar:id});
        const f = new FormData;
        f.append('title',title.value);
        f.append('message',message.value)
          f.append('_method','PUT')
        if(avatar.value){
          f.append('image',avatar.value)
        }
        await axios.post(url,f);

        router.push({name:'bannar.index'});
        
      } catch (error) {
        console.error(error)
       setErrors(formErrors(error))
      }
       busy.value = false;
    }

    return {
      busy,
      schema,
      title,
      message,
      avatar,
      image,
      onSubmit
    };
  },
});
</script>

<style scoped>
</style>