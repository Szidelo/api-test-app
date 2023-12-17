import axios from 'axios'

const API_KEY = "903f4472-44fc-4271-9765-130866244af5"

const fetchNews = async (keyword: string) => {
    const response = await axios.get(`http://eventregistry.org/api/v1/article/getArticles?apiKey=${API_KEY}&keyword=${keyword}`)
    console.log(response)
    return response
}

export { fetchNews }