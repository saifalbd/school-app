<template>
  <div class="form-group">
   <slot name="label">
         <label>{{props.label}}</label>
    </slot>
     <Field
      :name="props.name"
        :modelValue="props.modelValue"
 
      @update:modelValue="emit('update:modelValue',$event)"
    
                  v-slot="{ handleChange, handleBlur,field }">
  

    <v-select 
    

                      :class="{ 'is-invalid': !!props.error }"
   :modelValue="props.modelValue"
                  
                    @change="handleChange" 
                    @blur="handleBlur"
                       :placeholder="props.placeholder"
                      :options="options" 
                     label="text"
                     :reduce="op => op.id"
                      v-bind="field"
                    ></v-select>

    </Field>
    <div class="invalid-feedback">{{ props.error }}</div>
  </div>
</template>

<script>
import { Field } from "vee-validate";
import VueSelect from "vue3-select2-component";

export default {
  components: {
    Field,
    VueSelect,
  },
  emits: ["update:modelValue"],
  props: {
      placeholder:{
      type:String,
      default:''
    },
    error: {required:true},
    name:{
       type:String,
      default:''   
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "label",
    },
    // this allows using the `value` prop for a different purpose

    // use `title` as the prop which take the place of `value`
    modelValue: {
      type: [String,Number],
      default: "",
    },
  },
  setup(props, { emit }) {
    return {
      props,
      emit,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>