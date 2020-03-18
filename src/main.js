import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import TreeTable from 'vue-table-with-tree-grid'
import {Button,Timeline,TimelineItem,Form,FormItem,Input,Message,Container,Header,Aside,Main,Menu,Submenu,MenuItem,Breadcrumb,BreadcrumbItem,Card,
Row,Col,Table,TableColumn,Switch,Tooltip,Pagination,Dialog,MessageBox,Tag,Tree,Select,Option,Cascader,Alert,Tabs,TabPane,Steps,Step,CheckboxGroup,Checkbox,Upload
} from 'element-ui'
Vue.use(Upload).use(TimelineItem).use(Timeline).use(CheckboxGroup).use(Checkbox).use(Steps).use(Step).use(Button).use(TabPane).use(Tabs).use(Alert).use(Cascader).use(Form).use(FormItem).use(Input).use(Container).use(Header).use(Aside).use(Main).use(Menu).use(Submenu).use(MenuItem).use(Breadcrumb).use(BreadcrumbItem).use(Card).use(Row).use(Col).use(Table).use(TableColumn).use(Switch).use(Tooltip).use(Pagination).use(Dialog).use(Tag).use(Tree).use(Select).use(Option).use(VueQuillEditor)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.component('tree-table', TreeTable)
axios.defaults.baseURL = 'http://39.97.124.157:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  NProgress.start()
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 在最后必须 return config
  return config
})
axios.interceptors.response.use(config => {
  //对响应数据做些事
  NProgress.done()
  return config;

})
Vue.prototype.$http = axios
Vue.filter('dateFormat', function (originVal) {//定义全局时间格式处理
  const dt = new Date(originVal)
  const y = dt.getFullYear() //年
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')//月
  const d = (dt.getDate() + '').padStart(2, '0')//日
  const hh = (dt.getHours() + '').padStart(2, '0') //时
  const mm = (dt.getMinutes() + '').padStart(2, '0')//分
  const ss = (dt.getSeconds() + '').padStart(2, '0')//秒
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}` //返回格式
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
