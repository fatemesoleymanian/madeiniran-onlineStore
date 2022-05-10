export default function ({ $axios, error: nuxtError }) {
    this.$axios.setToken(localStorage.getItem('116111107101110'), 'Bearer')

    // Adds header: `Content-Type: application/x-www-form-urlencoded` to only post requests
    this.$axios.setHeader('Content-Type', 'application/json', [
      'post'
    ])
  }
  
  