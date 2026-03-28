This ZIP includes a small Vercel deploy fix:
- package.json now pins pnpm with "packageManager": "pnpm@10.0.0"
- package.json now sets Node.js >= 20.9.0 for Next.js 16

Important in Vercel:
1. Open your project
2. Go to Settings -> Environment Variables
3. Add ENABLE_EXPERIMENTAL_COREPACK = 1
4. Redeploy and clear build cache if needed
