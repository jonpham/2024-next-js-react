FROM node:lts-jod
WORKDIR /app
COPY ./package*.json ./
RUN corepack enable
RUN pnpm install
COPY ./.env.docker ./.env.local
COPY ./.nvmrc ./*.ts ./*.m?s ./*.yaml ./
COPY ./.storybook ./public ./src ./
# Development HTTP Port
EXPOSE 3000 
# Start Server for Development
CMD ["pnpm", "dev"]