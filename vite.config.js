import { resolve } from 'path'
import { defineConfig } from 'vite'


module.exports = defineConfig({
    build: {
        // mylib: {
        //     entry: resolve(__dirname, "resources/js/layout.js"),
        // },     

        rollupOptions: {
          input: {
        //     main: resolve(__dirname, 'index.html'),
        //     // homepage: resolve(__dirname, 'homepage.html'),
                thelib: resolve(__dirname, "resources/js/layout.js"),
          },
        },
      },

    // build: {
    //     lib: {
    //         entry: path.resolve(__dirname, "resources/js/layout.js"),
    //     },
    // },
});
