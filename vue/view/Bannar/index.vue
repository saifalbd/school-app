<template>
 
      <div class="content">
        <page-add-header title="Bannar list" title1="View Bannars" :items='[
        {
          text: "Add Bannar",
          addname: {name:"bannar.create"},
        },
      ]'/>

     
        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12 col-md-6" v-for="(item,i) in items" :key="item.id">
                 <a-card hoverable>
    <template #cover>
      <img
        alt="example"
        :src="item.image.url"
      />
    </template>
    <template #actions>

      <edit-outlined key="edit" @click="router.push({name:'bannar.edit',params:{id:item.id}})"/>
      <DeleteOutlined key="delete" @click="remove(item,i)"/>
    </template>
    <a-card-meta :title="item.title" :description="item.message">
      <template #avatar>
      
      </template>
    </a-card-meta>
  </a-card>
              </div>
            </div>
            
           
       
          </div>
        </div>
        <!-- /product list -->
      </div>
    
</template>
<script lang="ts">
import { ref } from 'vue';


import {useRouter} from 'vue-router';
import VueSelect from "vue3-select2-component";
import PageAddHeader from "../../components/pageheader/pageaddheader.vue";
import { deleteConfirm, errorAlert } from '../../plugins/utility';
import { SettingOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons-vue'
export default {
    components:{
    VueSelect,
    PageAddHeader,
      SettingOutlined,
    EditOutlined,
    DeleteOutlined ,
  },
  setup(){
    const router = useRouter();
    const items = ref([]);
    const busy = ref(true)
    const fetch = async ()=>{
      try {
        const url = route('api.bannar.index');
        const {data} = await axios.get(url);
        items.value = data;
        busy.value = false
        
      } catch (error) {
        console.log(error)
      }
    }
    fetch();

  


   const remove = async (item,index)=>{
    try {
      const is = await deleteConfirm();
    if(!is) return null;
    const url = route('api.bannar.destroy',{bannar:item.id});
    await axios.delete(url);
    items.value.splice(index,1)
    } catch (error) {
      errorAlert(error)
    }
   }


    return {
      busy,
    router,
      
   items,
      remove
    }
    
  },
  name: "categorylist",
};
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
