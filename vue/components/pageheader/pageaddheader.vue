<template>
  <div class="page-header">
    <div class="page-title">
      <h4>{{ title }}</h4>
      <h6>{{ title1 }}</h6>
    </div>
    <div class="page-btn" v-for="(item, index) in items" :key="index">
      <router-link :to="item.addname" class="btn btn-added"
        ><img src="/assets/img/icons/plus.svg" class="me-2" alt="img" />{{
          item.text
        }}</router-link
      >
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
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
