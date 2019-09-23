import api from '../index'
import urls from './urls'


const header = {}

export default {
    matches(params) {
        // return出去了一个promise
        return api.get(urls.matches + '/video/column/video/list/', params, header)
    },
    login(data, params, header) {
        return api.post(urls.matches + '/user/sign_in/', params, header, data)
    },
    //首页精品列表
    homeBoutique(params) {
        return api.get(urls.matches + '/commodity/home/boutique/list/', params, header)
    },
    //拍卖会列表
    getAuctionList(params) {
        return api.get(urls.matches + '/auction/auctions/list/query_code/', params, header)
    },
    //机构详情
    organizationInfo(params) {
        return api.get(urls.matches + '/auction/organization/info/', params, header)
    },
    //拍品列表
    AuctionsGoodsList(params) {
        return api.get(urls.matches + '/auction/auctions/goods/list/', params, header)
    }
}