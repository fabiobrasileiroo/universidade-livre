/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async exportPathMap() {
    return {
      "/": { page: "/" },
      // Não inclui /curso/[id]
    };
  },
};

export default nextConfig;
