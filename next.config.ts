import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 开发环境启用 React Compiler，生产环境自动禁用
  reactCompiler: process.env.NODE_ENV !== "production" ? {
    enabled: true,
  } : false,
  // 生产构建优化
  output: "standalone",
};

export default nextConfig;
