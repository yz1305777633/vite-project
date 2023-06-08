import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname,'./src'),
      "@components": resolve(__dirname,'./src/components')
    }
  },
  clearScreen: false,
  plugins: [
    Components({ 
      /* options */
      dts: true, 
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView'],
      }],
      resolvers: [
        HeadlessUiResolver(),
      ],
      extensions: ['vue','svg'],
      deep: true,
      allowOverrides: false,
      directives: true,
      directoryAsNamespace: true,
      globalNamespaces: ['global'],
      include: [/\.vue$/, /\.vue\?vue/,/\.[tj]sx?$/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
    VueRouter({
      dataFetching: true,
      extensions: ['.page.vue', '.vue'],
      routesFolder: [
        'src/pages'
      ],
      importMode: 'async',
      logs: true,
      dts: './typed-router.d.ts',
      exclude: [
        '**/ignored/**',
        // '**/ignored/**/*',
        '**/__*',
        '**/__**/*',
        '**/*.component.vue',
        // resolve(__dirname, './src/pages/ignored'),
        //
        // './src/pages/**/*.spec.ts',
      ],
    }),
    vue(),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        'pinia',
        VueRouterAutoImports,
        {
          'vue-router/auto': ['useLink', 'useRoute', 'useRouter']
        },
      ],
      dirs:['./src/pinia/*']
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[ext]/[name].[ext]",
        chunkFileNames: "assets/js/[name]-[hash].js"
      }
    }
  }
})
