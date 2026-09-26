import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => {
    return {
      beforeFiles: [
        { source: '/', destination: '/index.html' },
        { source: '/auth', destination: '/auth.html' },
        { source: '/scrims', destination: '/scrims.html' },
        { source: '/ranking', destination: '/ranking.html' },
        { source: '/campeonatos', destination: '/campeonatos.html' },
        { source: '/agentes-livres', destination: '/agentes-livres.html' },
        { source: '/regras', destination: '/regras.html' },
        { source: '/dashboard', destination: '/dashboard.html' },
        { source: '/perfil', destination: '/perfil.html' },
        { source: '/sobre', destination: '/sobre.html' },
        { source: '/personalizadas', destination: '/personalizadas.html' },
        { source: '/organizador', destination: '/organizador.html' },
        { source: '/time', destination: '/time.html' },
        { source: '/admin', destination: '/admin.html' },
      ],
    };
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '/',
};

export default nextConfig;
