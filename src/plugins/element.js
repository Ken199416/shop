import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Message, Container, Header, Aside, Main, Menu,
  Submenu, MenuItemGroup, MenuItem, Breadcrumb, BreadcrumbItem, Card, Row,
  Col, Table, TableColumn, Switch, Tooltip, Pagination, Dialog, MessageBox, Tag, Select
  , Option, Loading, DatePicker, Drawer, Popover, Steps, Step,Upload ,Link ,Tabs,TabPane
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
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
Vue.use(Select)
Vue.use(Option)
Vue.use(Loading)
Vue.use(DatePicker)
Vue.use(Drawer)
Vue.use(Popover)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Upload)
Vue.use(Link)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message
