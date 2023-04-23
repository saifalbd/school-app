<template>
  <!-- Sidebar -->
  <div class="sidebar" id="sidebar" :class="$route.meta.sidebarClass">
    <div class="slimScrollDiv">
      <div class="sidebar-inner slimscroll">
        <perfect-scrollbar
          class="scroll-area"
          :settings="settings"
          @ps-scroll-y="scrollHanle"
        >
          <div id="sidebar-menu" class="sidebar-menu">
            <ul>
              <li class="submenu-open">
                <h6 class="submenu-hdr">Main</h6>
                <ul>
                  <li :class="{ active: isActive('home') }">
                    <router-link :to="{ name: 'home' }"
                      ><vue-feather type="grid"></vue-feather
                      ><span> Dashboard</span>
                    </router-link>
                  </li>
                   <li :class="{ active: isActive([
                   'bannar.index',
                   'bannar.create',
                   'bannar.edit'
                   ]) }">
                    <router-link :to="{ name: 'bannar.index' }"
                      ><vue-feather type="grid"></vue-feather
                      ><span>Bannar</span>
                    </router-link>
                  </li>
                </ul>
              </li>
              <li class="submenu-open">
                <h6 class="submenu-hdr">Students</h6>
                <ul>
                  <li>
                    <router-link
                      :class="{
                        active: isActive(['student.index','student.create', 'student.edit']),
                      }"
                      :to="{ name: 'student.index' }"
                      ><vue-feather type="box"></vue-feather
                      ><span>Students</span></router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :class="{ active: isActive('student.create') }"
                      :to="{ name: 'student.create' }"
                      ><vue-feather type="plus-square"></vue-feather
                      ><span>Add Student</span></router-link
                    >
                  </li>
                
              
                </ul>
              </li>

          
            </ul>
          </div>
        </perfect-scrollbar>
      </div>
    </div>
  </div>
  <!-- /Sidebar -->
</template>
<script lang="ts">
import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";
import { useRoute } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    PerfectScrollbar,
  },
  setup(props, context) {
    const route = useRoute();

    const settings = ref({
      suppressScrollX: true,
    });

    const scrollHanle = (evt) => {};

    const isActive = (name: string | string[]) => {
      let rName = route.name as string;
      if (!rName) return false;
      if (Array.isArray(name)) {
        return name.includes(rName);
      } else {
        return rName == name;
      }
    };

    return {
      scrollHanle,
      settings,
      isActive,
    };
  },
};
</script>
