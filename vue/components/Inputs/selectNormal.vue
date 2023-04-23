<template>
  <div class="form-group">
    <label>{{ props.label }}</label>
     <Field
      :name="props.name"
      :modelValue="props.modelValue"
      :placeholder="props.placeholder"
      @update:modelValue="emit('update:modelValue',$event)"
      class="form-control"
      as="select"
      :class="{ 'is-invalid': props.error }"
    >
      <option value="" disabled>Choose a {{props.label}}</option>
      <!-- :selected="props.modelValue && props.modelValue.includes(op.id)" -->
  <option v-for="op in options" :key="op.id" :value="op.id">{{ op.text }}</option>
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