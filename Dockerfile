# ---- Stage 1: Install dependencies ----
FROM node:18-alpine AS deps
RUN corepack enable
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Stage 2: Build the Next.js app ----
FROM node:18-alpine AS builder
RUN corepack enable
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm build

# ---- Stage 3: Production image ----
FROM node:18-alpine AS runner
RUN corepack enable
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

CMD ["pnpm", "start"]
