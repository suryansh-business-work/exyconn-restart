/** @type {import('next').NextConfig} */

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "https://www.pexels.com/",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      }
    ],
  },
}

export default nextConfig;
