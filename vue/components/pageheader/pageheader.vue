<template>
  <div class="page-header">
    <div class="page-title">
      <h4>{{ title }}</h4>
      <h6>{{ title1 }}</h6>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    title1: {
      type: String,
      default: "",
    },
  },
};
</script>
