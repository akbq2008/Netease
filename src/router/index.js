import Vue from "vue";
import Router from "vue-router";
//按需引入

import "muse-ui/lib/styles/base.less";
import {
  Alert,
  AppBar,
  AutoComplete,
  Avatar,
  Badge,
  BottomNav,
  BottomSheet,
  Breadcrumbs,
  Button,
  Card,
  Checkbox,
  Chip,
  DateInput,
  DataTable,
  Dialog,
  Divider,
  Drawer,
  ExpansionPanel,
  Form,
  Grid,
  GridList,
  Helpers,
  Icon,
  List,
  LoadMore,
  Menu,
  Pagination,
  Paper,
  Picker,
  Popover,
  Progress,
  Radio,
  Select,
  SlidePicker,
  Slider,
  Snackbar,
  Stepper,
  SubHeader,
  Switch,
  Tabs,
  TextField,
  Tooltip,
  theme
} from "muse-ui";
import "muse-ui/lib/styles/theme.less";
import "muse-ui-loading/dist/muse-ui-loading.css";
import Loading from "muse-ui-loading";
Vue.use(Loading);
Vue.use(Alert);
Vue.use(AppBar);
Vue.use(AutoComplete);
Vue.use(Avatar);
Vue.use(Badge);
Vue.use(BottomNav);
Vue.use(BottomSheet);
Vue.use(Breadcrumbs);
Vue.use(Button);
Vue.use(Card);
Vue.use(Checkbox);
Vue.use(Chip);
Vue.use(DateInput);
Vue.use(DataTable);
Vue.use(Dialog);
Vue.use(Divider);
Vue.use(Drawer);
Vue.use(ExpansionPanel);
Vue.use(Form);
Vue.use(Grid);
Vue.use(GridList);
Vue.use(Helpers);
Vue.use(Icon);
Vue.use(List);
Vue.use(LoadMore);
Vue.use(Menu);
Vue.use(Pagination);
Vue.use(Paper);
Vue.use(Picker);
Vue.use(Popover);
Vue.use(Progress);
Vue.use(Radio);
Vue.use(Select);
Vue.use(SlidePicker);
Vue.use(Slider);
Vue.use(Snackbar);
Vue.use(Stepper);
Vue.use(SubHeader);
Vue.use(Switch);
Vue.use(Tabs);
Vue.use(TextField);
Vue.use(Tooltip);
Vue.use(Router);

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/home/recommend/recommendContent"
    },
    //本地
    {
      path: "/local",
      name: "local",
      meta: {
        keepAlive: true
      },
      redirect: "/local/personal",
      component: resolve => require(["views/Index.vue"], resolve),
      children: [
        {
          path: "personal",
          component: resolve =>
            require(["views/content/local/Local.vue"], resolve)
        }
      ]
    },
    // 首页
    {
      path: "/home",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/Index.vue"], resolve),
      redirect: "/home/recommend/recommendContent",
      children: [
        {
          path: "recommend",
          name: "recommend",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/home/Index.vue"], resolve),
          children: [
            {
              path: "recommendContent",
              name: "recommendContent",
              meta: {
                keepAlive: true
              },
              component: resolve =>
                require(["views/content/home/HomeRecommend.vue"], resolve)
            }
          ]
        },
        {
          path: "friend",
          name: "friend",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/home/Index.vue"], resolve),
          children: [
            {
              path: "friendContent",
              name: "friendContent",
              meta: {
                keepAlive: true
              },
              component: resolve =>
                require(["views/content/home/Friend.vue"], resolve)
            }
          ]
        },
        {
          path: "anchorStation",
          name: "anchorStation",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/home/Index.vue"], resolve),
          children: [
            {
              path: "anchorStationContent",
              name: "anchorStationContent",
              meta: {
                keepAlive: true
              },
              component: resolve =>
                require(["views/content/home/AnchorStation.vue"], resolve)
            }
          ]
        }
      ]
    },
    // 视频
    {
      path: "/video",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/Index.vue"], resolve),
      redirect: "/video/videoRecommend",
      children: [
        {
          path: "videoRecommend",
          name: "videoRecommend"
        },
        {
          path: "music",
          name: "music",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/video/Music.vue"], resolve)
        },
        {
          path: "showTime",
          name: "showTime",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/video/ShowTime.vue"], resolve)
        },
        {
          path: "mv",
          name: "mv",
          meta: {
            keepAlive: true
          },
          component: resolve => require(["views/content/video/Mv.vue"], resolve)
        },

        {
          path: "secondElement",
          name: "secondElement",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/video/SecondElement.vue"], resolve)
        },
        {
          path: "dance",
          name: "dance",
          meta: {
            keepAlive: true
          },
          component: resolve =>
            require(["views/content/video/Dance.vue"], resolve)
        }
      ]
    }, //登录
    {
      path: "/login",
      name: "login",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/Login.vue"], resolve)
    },
    {
      path: "/phoneLogin",
      name: "phoneLogin",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/PhoneLogin.vue"], resolve)
    },
    {
      path: "/play",
      name: "play",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/common/Play.vue"], resolve)
    },
    {
      path: "/dayRecommend",
      name: "dayRecommend",
      meta: {
        keepAlive: false
      },
      component: resolve =>
        require(["views/content/home/DayRecommend.vue"], resolve)
    },
    {
      path: "/register",
      name: "register",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/Register.vue"], resolve)
    },
    {
      path: "/error",
      name: "error",
      meta: {
        keepAlive: true
      },
      component: resolve => require(["views/common/Error.vue"], resolve)
    },
    {
      path: "/currentPlay",
      name: "currentPlay",
      meta: {
        keepAlive: false
      },
      component: resolve => require(["views/common/CurrentPlay.vue"], resolve)
    },
    {
      path: "*",
      redirect: "/error"
    }
  ]
});
