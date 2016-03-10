import BeijingCard from './img/theme/beijing_card.jpg'
import Cleaning from './img/theme/cleaning.jpg'
import Maintain from './img/theme/maintain.jpg'
import Coating from './img/theme/coating.jpg'
import PaintCare from './img/theme/paint_care.jpg'
import Peccancy from './img/theme/peccancy.jpg'
import Spray from './img/theme/spray.jpg'
import YearlyCheck from './img/theme/yearly_check.jpg'

const initialState = [{
    name: '保养',
    url: '/weixin/pre-3.shtml',
    img: Maintain
}, {
    name: '贴膜',
    url: '/weixin/pre-4.shtml',
    img: Coating
}, {
    name: '年检',
    url: '/weixin/pre-5.shtml',
    img: YearlyCheck
}, {
    name: '进京证',
    url: '/weixin/pre-6.shtml',
    img: BeijingCard
}, {
    name: '内饰清洁',
    url: '/weixin/pre-7.shtml',
    desc: '车里有点脏',
    img: Cleaning
}, {
    name: '漆面护理',
    url: '/weixin/pre-8.shtml',
    desc: '车漆不够亮',
    img: PaintCare
}, {
    name: '钣喷',
    url: '/weixin/pre-9.shtml',
    desc: '车身有剐蹭',
    img: Spray
}, {
    name: '违章',
    url: '/weixin/pre-10.shtml',
    desc: '查询/处理',
    img: Peccancy
}]

export default function themes(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
