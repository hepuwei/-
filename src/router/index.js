import {Goodthing,Market,Shoping,World,Mine,Login,City} from "pages";

export const TabBarRoute=[
  {
    path:"/market",
    component:Market,
    meta:{
      flag:true,
    },
    text:"逛商场",
    icon:"\ue713"
  },
  {
    path:"/goodthing",
    component:Goodthing,
    meta:{
      flag:true,
    },
    text:"好物圈",
    icon:"\ue602"
  },
  {
    path:"/shoping",
    component:Shoping,
    meta:{
      flag:true,
    },
    text:"购物",
    icon:"\ue616"
  },
  {
    path:"/world",
    component:World,
    meta:{
      flag:true,
    },
    text:"海外购",
    icon:"\ue609"
  },
  {
    path:"/mine",
    component:Mine,
    meta:{
      flag:true,
    },
    text:"我的",
    icon:"\ue61d"
  }
];

export const NoTabBarRoute = [
  {
    path:"/login",
    component:Login,
    meta:{
        flag:false
    }
  },
  {
    path:"/city",
    component:City,
    meta:{
        flag:false
    }
  }
]

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute);