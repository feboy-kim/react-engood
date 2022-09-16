module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...module(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
