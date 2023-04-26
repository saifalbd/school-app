<template>
  <div class="content">
    <page-add-header
      title="Student list"
      title1="View/Search Students"
      :items="[
        {
          text: 'Add Student',
          addname: { name: 'student.create' },
        },
      ]"
    />

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
                    @change="onSearch"
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
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="excel"
                  ><img src="/assets/img/icons/excel.svg" alt="img"
                /></a>
              </li>
              <li>
                <a
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="print"
                  ><img src="/assets/img/icons/printer.svg" alt="img"
                /></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- /Filter -->

        <!-- /Filter -->
        <div class="table-responsive">
          <a-table
            :loading="busy"
            :columns="columns"
            :data-source="filteredItems"
            :pagination="false"
          >
            <template #bodyCell="{ column, record, index }">
              <template v-if="column.key === 'id'">
                <a class="product-img">
                  <img :src="record.avatar.sm_url" alt="" />
                </a>
              </template>
              <template v-else-if="column.key == 'status'">
                <a-dropdown-button :type="record.status?'primary':'danger'">
                  {{record.status?'Active':'InActive'}}
                  <template #overlay>
                    <a-menu>
                      <a-menu-item  v-if="record.status" @click="activeToggle(record)">
                        Do InActive
                      </a-menu-item>
                        <a-menu-item  @click="activeToggle(record)" v-else>
                        Do Active
                      </a-menu-item>
                      
                   
                    </a-menu>
                  </template>
                </a-dropdown-button>
              </template>
              <template v-else-if="column.key === 'action'">
                <edit-link
                  :to="{ name: 'student.edit', params: { id: record.id } }"
                ></edit-link>
                <remove-btn @click="remove(record, index)"></remove-btn>
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
import { ref } from "vue";
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
    title: "Year",
    dataIndex: "year",
    sorter: {
      compare: (a, b) => {
        a = a.year;
        b = b.year;
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: {
      compare: (a, b) => {
        a = a.status;
        b = b.status;
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
  { title: "profession", dataIndex: "profession" },
  { title: "Organization", dataIndex: "organization" },
  { title: "Designation", dataIndex: "designation" },
  { title: "Address", dataIndex: "address" },
  { title: "Thana", dataIndex: "thana" },

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
import { deleteConfirm, errorAlert } from "../../plugins/utility";
import { lowerCase, trim } from "lodash";
export default {
  components: {
    VueSelect,
    PageAddHeader,
  },
  setup() {
    const filter = ref(false);
    const items = ref([]);
    const filteredItems = ref([]);
    const busy = ref(true);
    const fetch = async () => {
      try {
        const url = route("api.student.index");
        const { data } = await axios.get(url);
        items.value = data.data;
        filteredItems.value = data.data;
        busy.value = false;
      } catch (error) {
        console.log(error);
      }
    };
    fetch();

    const remove = async (item, index) => {
      try {
        const is = await deleteConfirm();
        if (!is) return null;
        const url = route("api.student.destroy", { student: item.id });
        await axios.delete(url);
        items.value.splice(index, 1);
      } catch (error) {
        errorAlert(error);
      }
    };

    const onSearch = (event) => {
      let target = event.target;
      let val = trim(lowerCase(target.value));
      if (val) {
        filteredItems.value = items.value.filter((e: any) => {
          let name = lowerCase(e.name);
          let has = name.search(val) > -1;
          return has;
        });
      } else {
        filteredItems.value = items.value;
      }
    };

    const activeToggle = async (item)=>{
      console.log(item)
      const url = route('api.activeToggle',{student:item.id});
      await axios.get(url);
      item.status = item.status==1?0:1;
    }

    return {
      activeToggle,
      busy,
      filter,
      columns,
      filteredItems,
      items,
      onSearch,
      remove,
    };
  },
  name: "categorylist",
};
</script>
<style>
.ant-tooltip {
  display: none !important;
}
</style>
