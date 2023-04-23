<template>
    <router-link class="me-3" :to="to">
                      <img src="/assets/img/icons/edit.svg" alt="img" />
    </router-link>
</template>

<script>
export default {
    props:{
        to:{
            type:Object,
            required:true
        }
    },
    setup (props) {
        

        return {props}
    }
}
</script>

<style lang="scss" scoped>

</style>