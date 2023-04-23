<template>
  <div class="form-group">
    <label>{{props.label}}</label>
    <div class="single-file-box" :class="{ has: !!src ,'is-invalid':!!props.error}">
      <div class="image-box">
        <img :src="src" alt="" srcset="" />
      </div>
      <div class="image-upload">
        <input type="file" @change="fileChange"  @blur="handleBlur"/>
        <div class="image-uploads">
          <img src="/assets/img/icons/upload.svg" alt="img" />
          <h4>Drag and drop a file to upload</h4>
        </div>
      </div>
    </div>
        <div class="invalid-feedback">{{props.error}}</div>
  </div>
</template>

<script lang="ts">
import { ref,watch } from "vue";
import { hasIn } from 'lodash';
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    error:{
      default:''
    },
    avatar:{
      
      default:()=>({})
    }
  },
  setup(props, { emit }) {
    const image = ref<File | null>(null);
    const src = ref<string | ArrayBuffer | null>("");

    watch(() => props.avatar, (newValue) => {
      if(hasIn(newValue,'url')){
src.value = (newValue as any).url as string;
      }
    
    });

    const handleBlur = (event)=>{
      emit('blur',event)
    }
    const fileChange = (event: Event) => {
      let target = event.target as HTMLInputElement;
      let files = target.files;
      if (files?.length) {
        let file = files[0];
        emit("file", file);
        console.log(file)
        image.value = file;
        const fileRead = new FileReader();
        fileRead.onload = () => {
          src.value = fileRead.result;
        };
        fileRead.readAsDataURL(file);
      } else {
        emit("file", null);
        src.value = '';
      }
      emit('change',event)
    };

    return { src,props, fileChange,handleBlur };
  },
};
</script>

<style lang="scss" scoped>
</style>