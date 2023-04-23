



import router from './router/index';
import './bootstrap';

import VueFeather from 'vue-feather';
// import FlagIcon from 'vue-flag-icon';
import { Table,Spin,Dropdown,Menu,MenuItem,Select,Switch,Modal,Checkbox,Card,CardMeta } from 'ant-design-vue';
//a-dropdown-button
import InputVue from './components/Inputs/input.vue';
import SelectVue from './components/Inputs/select.vue';
import EditLink from './components/utiliy/editLink.vue';
import RemoveBtn from './components/utiliy/removeBtn.vue';
import VueSelect from "vue-select";


app.use(router);
app.component(VueFeather.name, VueFeather);
app.component("v-select", VueSelect)
app.component('input-vue',InputVue);
app.component('input-select',SelectVue);
app.component('edit-link',EditLink);
app.component('remove-btn',RemoveBtn)
app.use(Table).use(Spin).use(Dropdown).use(Menu)
.use(MenuItem).use(Select).use(Switch).use(Checkbox)
.use(Card)
.use(CardMeta)
.use(Modal)
//app.use(FlagIcon)

app.mount("#app");