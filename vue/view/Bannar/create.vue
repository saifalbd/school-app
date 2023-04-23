<template>
  <div class="content">
    <page-header
      title="Add Bannar"
      title1="Create new Bannar"
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
              ></input-vue>
            </div>
         

           

            <div class="col-lg-12">
              <single-file-upload
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


const title = ref('');
const message = ref('');
   
    const avatar = ref(null);

    const schema = object({
    
    });

    const onSubmit = async (values,{setErrors})=>{
      try {
        busy.value = true;
        const url = route('api.bannar.store');
        const f = new FormData;
        f.append('title',title.value);
        f.append('message',message.value)
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
      years,
      onSubmit
    };
  },
});
</script>

<style scoped>
</style>