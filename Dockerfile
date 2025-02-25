# 构建阶段
FROM node:20-alpine AS build

WORKDIR /app

# 复制package.json和package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install -g pnpm
RUN pnpm install

# 复制源代码
COPY . .

# 构建应用
RUN pnpm build

# 检查.output目录是否存在
RUN ls -la && ls -la .output || echo ".output目录不存在"

# 生产阶段
FROM node:20-alpine AS production

# 复制构建阶段生成的文件和必要的依赖
COPY --from=build /zeabur/.output ./.output

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", ".output/server/index.mjs"]
