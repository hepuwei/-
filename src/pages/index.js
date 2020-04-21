import loadable from 'react-loadable';
import Loading from "../common/loading";

export const Goodthing = loadable({
  loader:()=>import("./goodthing"),
  loading:Loading
})

export const Market = loadable({
  loader:()=>import("./market"),
  loading:Loading
})

export const Shoping = loadable({
  loader:()=>import("./shoping"),
  loading:Loading
})

export const World = loadable({
  loader:()=>import("./world"),
  loading:Loading
})

export const Mine = loadable({
  loader:()=>import("./mine"),
  loading:Loading
})

export const Login = loadable({
  loader:()=>import("./login"),
  loading:Loading
})

export const Crazytime = loadable({
  loader:()=>import("./crazytime"),
  loading:Loading
})

export const City = loadable({
  loader:()=>import("./city"),
  loading:Loading
})