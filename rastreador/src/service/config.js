import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://rastreamento.ns2online.com.br/search/'
})