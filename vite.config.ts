import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  const env = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
    },
    // base: env.VITE_ENV === 'production' ? '/admin' : '/',
    // build: {
    //   outDir: env.VITE_ENV === 'production' ? './dist/admin' : './dist'
    // },
    css: {
      devSourcemap: true
    },
    server: {
      port: 5173
    }
  })
}
