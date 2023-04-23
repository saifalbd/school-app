<template>
  <div class="form-group">
    <slot name="label" v-bind="{label:props.label}">
         <label>{{props.label}}</label>
    </slot>
 
    <Field
      :name="props.name"
      :type="props.type"
      :modelValue="props.modelValue"
      :placeholder="props.placeholder"
      @update:modelValue="emit('update:modelValue',$event)"
      class="form-control"
      :class="{ 'is-invalid': !!props.error }"
    />
    
    <div class="invalid-feedback">{{ props.error }}</div>
  </div>
</template>

<script>
import { Field } from "vee-validate";
export default {
     model: {
    prop: 'modelValue',
    event: 'change'
  },
  components: {
    Field,
  },
   emits: ['update:modelValue'],
  props: {
    type:{
      type:String,
      default:'text'
    },
    placeholder:{
      type:String,
      default:''
    },
    name:{
      type:String,
      default:'title'
    },
    error:{required:true},
    label: {
      type: String,
      default: "label",
    },
   // this allows using the `value` prop for a different purpose
  
    // use `title` as the prop which take the place of `value`
    modelValue: {
      type: [String,Number],
      default: ''
    }
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