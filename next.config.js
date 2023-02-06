/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  
  env: {
    // api
    USERS_API_ENDPOINT : process.env. USERS_API_ENDPOINT,

  },

  async rewrites() {
    return [
      // users  detils page
      { source: '/users/:id', destination: '/users/details?id=:id'},
    ]
  },
}
