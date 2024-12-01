import { build, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(
  {plugins: [react()]},
  (configsEnv)=>{
    return{
      server:{
        port:5173,
        open:true,
      },
      build:{
        outDir:'build',
        sourcemap:true,
        rollupOptions: {
          external: ['/components/LoadingCountry.jsx']
        },
      },
    }
  }
)


