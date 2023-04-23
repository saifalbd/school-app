<template>
  <div class="page-header">
    <div class="row">
      <div class="col-sm-12">
        <h3 class="page-title">{{ title }}</h3>
        <ul class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link :to="name">{{ text }}</router-link>
          </li>
          <li class="breadcrumb-item active">{{ text1 }}</li>
        </ul>
      </div>
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
    text: {
      type: String,
      default: "",
    },
    text1: {
      type: String,
      default: "",
    },
    name: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
