// 环境变量配置
import { loadEnv } from "vite";
const envName = process.env.npm_lifecycle_script.match(/--mode\s(.*)/)?.[1];
const envData = loadEnv(envName, process.cwd()); // 获取.env文件中的配置
Object.assign(process.env, envData); // 将环境配置信息，添加到process.env

export default defineNuxtConfig({
  css: ["ant-design-vue/dist/antd.css"],
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@ant-design-vue/nuxt", "@nuxt/content"],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "360BioChem",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900",
        },
      ],
    },
  },
  nitro: {
    // 该配置用于服务端请求转发
    routeRules: {
      "/api/": {
        proxy: "http://spider.aikonchem.com:9011/",
      },
    },
  },
});
