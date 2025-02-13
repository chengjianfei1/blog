import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

//添加壁纸为每日必应壁纸组件
const __dirname = getDirname(import.meta.url);

//网站配置文件
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Le Vent Se Leve",
  description: "Le Vent Se Leve 的博客演示",

  theme,
  //添加壁纸为每日必应壁纸组件
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
