import { CHANGE_TAB } from '../constants/ActionTypes'
import Theme from './img/tab/theme.jpg'
import ThemeActive from './img/tab/theme_active.jpg'
import Play from './img/tab/play.jpg'
import PlayActive from './img/tab/play_active.jpg'
import Welfare from './img/tab/welfare.jpg'
import WelfareActive from './img/tab/welfare_active.jpg'
import Mine from './img/tab/mine.jpg'
import MineActive from './img/tab/mine_active.jpg'

const initialState = [{
    text: '主题',
    img: Theme,
    activeImg: ThemeActive,
    value: 'theme',
    active: true
}, {
    text: '活动',
    img: Play,
    activeImg: PlayActive,
    value: 'play'
}, {
    text: '福利',
    img: Welfare,
    activeImg: WelfareActive,
    value: 'welfare'
}, {
    text: '我的',
    img: Mine,
    activeImg: MineActive,
    value: 'mine'
}]

export default function tabs(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_TAB':
            return state.map(function(item, key){
                item.active = item.value===action.value?true:false
                return item
            })
        default:
            return state
    }
}
