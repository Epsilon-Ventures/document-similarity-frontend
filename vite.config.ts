import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === 'development';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        pages: resolve(__dirname, 'src', 'pages'),
        components: resolve(__dirname, 'src', 'components'),
        hooks: resolve(__dirname, 'src', 'hooks'),
        lib: resolve(__dirname, 'src', 'lib'),
        services: resolve(__dirname, 'src', 'services'),
        data: resolve(__dirname, 'src', 'data'),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? '[name]__[local]__[hash:base64:5]'
          : '[hash:base64:5]',
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      hmr: {
        clientPort: 3000,
      },
    },
  };
});
