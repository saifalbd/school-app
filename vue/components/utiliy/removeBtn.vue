<template>
  <a class="me-3 confirm-text" href="javascript:void(0);" @click="emit('click',$event)">
    <img src="/assets/img/icons/delete.svg" alt="img" />
  </a>
</template>

<script>
export default {
  setup(props,{emit}) {
    return {emit};
  },
};
</script>

<style lang="scss" scoped>
</style>