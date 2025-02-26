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


# 生产阶段
FROM node:20-alpine AS production

WORKDIR /app

# 设置环境变量
ENV NODE_ENV=production

# 暴露端口
EXPOSE 3000

# 启动应用
CMD ["node", ".zeabur/.output/server/index.mjs"]
