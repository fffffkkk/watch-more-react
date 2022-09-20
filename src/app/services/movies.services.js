import axios from 'axios'

const API_URL = process.env.REACT_APP_RAPID_API_URL

axios.defaults.baseURL = API_URL
axios.defaults.headers = {
	'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_RAPID_API_HOST,
}
axios.defaults.params = {titleType: 'movie', year: '2020', limit: '25'}

export const MoviesService = {
	async getAll() {
		return axios.get('/titles')
	},
	async getMoviesByYear() {
		return axios.get('/titles')
	}
}