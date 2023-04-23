<template>
 
      <div class="content">
        <page-add-header title="Student list" title1="View/Search Students" :items='[
        {
          text: "Add Student",
          addname: {name:"student.create"},
        },
      ]'/>

     
        <!-- /product list -->
        <div class="card">
          <div class="card-body">
            <div class="table-top">
              <div class="search-set">
                <div class="search-path">
                  <a
                    class="btn btn-filter"
                    id="filter_search"
                    v-on:click="filter = !filter"
                    :class="{ setclose: filter }"
                  >
                    <img src="/assets/img/icons/filter.svg" alt="img" />
                    <span
                      ><img src="/assets/img/icons/closes.svg" alt="img"
                    /></span>
                  </a>
                </div>
                <div class="search-input">
                  <a class="btn btn-searchset"
                    ><img src="/assets/img/icons/search-white.svg" alt="img"
                  /></a>
                  <div id="DataTables_Table_0_filter" class="dataTables_filter">
                    <label>
                      <input
                        type="search"
                        class="form-control form-control-sm"
                        placeholder="Search..."
                        aria-controls="DataTables_Table_0"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div class="wordset">
                <ul>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="pdf"
                      ><img src="/assets/img/icons/pdf.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="excel"
                      ><img src="/assets/img/icons/excel.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a data-bs-toggle="tooltip" data-bs-placement="top" title="print"
                      ><img src="/assets/img/icons/printer.svg" alt="img"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /Filter -->
            <div
              class="card"
              id="filter_inputs"
              :style="{
                display: filter ? 'block' : 'none',
              }"
            >
             <div class="card-body pb-0">
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Category Name" />
                    </div>
                  </div>
                  <div class="col-lg-3 col-sm-6 col-12">
                    <div class="form-group">
                      <input type="text" placeholder="Enter Brand Description" />
                    </div>
                  </div>
                  <div class="col-lg-1 col-sm-6 col-12 ms-auto">
                    <div class="form-group">
                      <a class="btn btn-filters ms-auto"
                        ><img src="/assets/img/icons/search-whites.svg" alt="img"
                      /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Filter -->
         <div class="table-responsive">
              <a-table
              :loading="busy"
                :columns="columns"
                :data-source="items"
                :pagination="false"
               
              >
                <template #bodyCell="{ column, record,index }">
                  <template v-if="column.key === 'id'">
                    <a class="product-img">
                      <img
                        :src="record.avatar.sm_url"
                        alt=""
                      />
                    </a>
                  </template>
                  <template v-else-if="column.key === 'action'">
                          <edit-link :to="{name:'student.edit',params:{id:record.id}}"></edit-link>
                      <remove-btn @click="remove(record,index)"></remove-btn>
                  </template>
                </template>
              </a-table>
            </div>
          </div>
        </div>
        <!-- /product list -->
      </div>
    
</template>
<script lang="ts">
import { ref } from 'vue';
const columns = [
  {
    sorter: true,
  },
  {
    title: "Image",
    dataIndex: "avatar",
    key: "id",

  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => {
        a = a.name.toLowerCase();
        b = b.name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
    {
    title: "Email",
    dataIndex: "email",
  },
    {
    title: "Phone",
    dataIndex: "phone",
  },
    {title: "profession",dataIndex: "profession",},
        {title: "Organization",dataIndex: "organization",},
            {title: "Designation",dataIndex: "designation",},
                {title: "Address",dataIndex: "address",},
                    {title: "Thana",dataIndex: "thana",},
                        
  
  {
    title: "Note",
    dataIndex: "sortNote",
    sorter: (a, b) => a.sortNote.localeCompare(b.sortNote),
  },
  {
    title: "Action",
    key: "action",
    sorter: true,
  },
];

import VueSelect from "vue3-select2-component";
import PageAddHeader from "../../components/pageheader/pageaddheader.vue";
import { deleteConfirm, errorAlert } from '../../plugins/utility';
export default {
    components:{
    VueSelect,
    PageAddHeader
  },
  setup(){
    const filter = ref(false);
    const items = ref([]);
    const busy = ref(true)
    const fetch = async ()=>{
      try {
        const url = route('api.student.index');
        const {data} = await axios.get(url);
        items.value = data.data;
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
    const url = route('api.student.destroy',{student:item.id});
    await axios.delete(url);
    items.value.splice(index,1)
    } catch (error) {
      errorAlert(error)
    }
   }


    return {
      busy,
      filter,
      columns,
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
