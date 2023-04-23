<template>
    
      <!-- Main Wrapper -->
    <div class="main-wrapper">
        <header-vue/>
        <sidebar-vue></sidebar-vue>
        <div class="page-wrapper">
             <router-view></router-view>
          
        </div>
    </div>
</template>

<script lang="ts">
// import {mounted} from './intialLoad';
import {onMounted} from 'vue';

import headerVue from './header.vue';
import SidebarVue from './sidebar.vue';
export default {
    components:{
        headerVue,
        SidebarVue
    },
    setup () {
        

onMounted(()=>{
    // mounted()
})
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>