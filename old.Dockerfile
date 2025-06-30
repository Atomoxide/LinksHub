FROM node:18-alpine AS deps
RUN corepack enable

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of your application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Build Next.js app
RUN pnpm build

# Only include necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./next.config.js

# Start the Next.js app
CMD ["pnpm", "start"]

# # Run the application
# CMD ["pnpm", "dev"]