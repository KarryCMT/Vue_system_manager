import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Row,
  Col,
  Table,
  TableColumn,
  Switch,
  Tooltip,
  Pagination,
  Dialog,
  MessageBox,
  Tag,
  Tree,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Steps,
  Step,
  CheckboxGroup,
  Checkbox,
  Upload   
} from 'element-ui'

Vue.use(Upload)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Button)
Vue.use(TabPane)
Vue.use(Tabs)
Vue.use(Alert)
Vue.use(Cascader)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(VueQuillEditor)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.component('tree-table',TreeTable)
axios.defaults.baseURL = 'http://39.97.124.157:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
Vue.prototype.$http = axios
Vue.filter('dateFormat',function(originVal){//定义全局时间格式处理
  const dt =  new Date(originVal)
  const y = dt.getFullYear() //年
  const m = (dt.getMonth() + 1 + '').padStart(2,'0')//月
  const d= (dt.getDate() + '').padStart(2,'0')//日
  const hh = (dt.getHours() + '').padStart(2,'0') //时
  const mm = (dt.getMinutes() + '').padStart(2,'0')//分
  const ss = (dt.getSeconds() + '').padStart(2,'0')//秒
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}` //返回格式
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
