import Vue from 'vue'
import axios from 'axios'
const vue = new Vue()

axios.defaults.timeout = 10000  //默认请求时间
axios.defaults.baseURL = 'http://localhost:3000'

//封装get请求
export function fetchGet(url,param) {
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:param
        })
        .then(response => {
            resolve(response.data)
        },err => {
            reject(err)
        })
        .catch((error) => {
            reject(err)
        })
    })
}

export default {
    //搜索
    Search(params) {
        return fetchGet('/search',params)
    },
    //热搜列表
    SearchList() {
        return fetchGet('/search/hot')
    },
    //歌单
    PlayLists() {
        return fetchGet('/top/playlist',params)
    },
    //全部mv
    AllMv() {
        return fetchGet('/mv/all',params)
    },
    //轮播图
    Banner() {
        return fetchGet('/banner')
    }
}