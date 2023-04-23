<template>

<div id="app">
  <router-view></router-view>
</div>

</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: {
  },
  setup() {
    const name = ref<string>("Bijaya");
    return {
      name,
    };
  },
});
</script>