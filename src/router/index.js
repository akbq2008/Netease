import Vue from "vue";
import Router from "vue-router";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
// 本地
import Local from "@/components/content/local/Local";
// 本地
// 首页
import HomeRecommend from "@/components/content/home/HomeRecommend";
import Friend from "@/components/content/home/Friend";
import AnchorStation from "@/components/content/home/AnchorStation";
import DayRecommend from "@/components/content/home/DayRecommend";
// 首页
// 视频
import videoRecommend from "@/components/content/video/Recommend";
import Music from "@/components/content/video/Music";
import ShowTime from "@/components/content/video/ShowTime";
import Mv from "@/components/content/video/Mv";
import SecondElement from "@/components/content/video/SecondElement";
import Dance from "@/components/content/video/Dance";
// 视频
//登录
import Login from "@/components/Login";
import Index from "@/components/Index";
import PhoneLogin from "@/components/PhoneLogin";
// import MuseUI from "muse-ui";
// import "muse-ui/dist/muse-ui.css";完整引入
import Play from "@/components/common/Play";
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
      component: resolve => require(["../components/Index.vue"], resolve)
    },
    // 首页
    {
      path: "/home",
      component: resolve => require(["../components/Index.vue"], resolve),
      redirect: "/home/recommend/recommendContent",
      children: [
        {
          path: "recommend",
          name: "recommend",
          component: resolve =>
            require(["../components/content/home/Index.vue"], resolve),
          children: [
            {
              path: "recommendContent",
              name: "recommendContent",
              component: resolve =>
                require([
                  "../components/content/home/HomeRecommend.vue"
                ], resolve)
            }
          ]
        },
        {
          path: "friend",
          name: "friend",
          component: resolve =>
            require(["../components/content/home/Index.vue"], resolve),
          children: [
            {
              path: "friendContent",
              name: "friendContent",
              component: resolve =>
                require(["../components/content/home/Friend.vue"], resolve)
            }
          ]
        },
        {
          path: "anchorStation",
          name: "anchorStation",
          component: resolve =>
            require(["../components/content/home/Index.vue"], resolve),
          children: [
            {
              path: "anchorStationContent",
              name: "anchorStationContent",
              component: resolve =>
                require([
                  "../components/content/home/AnchorStation.vue"
                ], resolve)
            }
          ]
        }
      ]
    },
    // 视频
    {
      path: "/video",
      component: resolve => require(["../components/Index.vue"], resolve),
      redirect: "/video/videoRecommend",
      children: [
        {
          path: "videoRecommend",
          name: "videoRecommend"
          // component: resolve =>
          //   require(['../components/content/video/Recommend.vue'], resolve),
        },
        {
          path: "music",
          name: "music",
          component: resolve =>
            require(["../components/content/video/Music.vue"], resolve)
        },
        {
          path: "showTime",
          name: "showTime",
          component: resolve =>
            require(["../components/content/video/ShowTime.vue"], resolve)
        },
        {
          path: "mv",
          name: "mv",
          component: resolve =>
            require(["../components/content/video/Mv.vue"], resolve)
        },

        {
          path: "secondElement",
          name: "secondElement",
          component: resolve =>
            require(["../components/content/video/SecondElement.vue"], resolve)
        },
        {
          path: "dance",
          name: "dance",
          component: resolve =>
            require(["../components/content/video/Dance.vue"], resolve)
        }
      ]
    }, //登录
    {
      path: "/login",
      name: "login",
      component: resolve => require(["../components/Login.vue"], resolve)
    },
    {
      path: "/phoneLogin",
      name: "phoneLogin",
      component: resolve => require(["../components/PhoneLogin.vue"], resolve)
    },
    {
      path: "/play",
      name: "play",
      component: resolve => require(["../components/common/Play.vue"], resolve)
    },
    {
      path: "/dayRecommend",
      name: "dayRecommend",
      component: resolve =>
        require(["../components/content/home/DayRecommend.vue"], resolve)
    }
  ]
});
