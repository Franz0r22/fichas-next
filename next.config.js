/** @type {import('next').NextConfig} */

module.exports = {
    publicRuntimeConfig: {
      API_URL: process.env.NEXT_PUBLIC_API_FICHAS_URL,
      BEARER_TOKEN: process.env.NEXT_PUBLIC_API_FICHAS_TOKEN,
      CLIENTE_ID: process.env.NEXT_PUBLIC_CLIENTE_ID,
    },
  };
  
