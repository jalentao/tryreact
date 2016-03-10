import { combineReducers } from 'redux'
import themes from './themes'
import packages from './packages'
import comments from './comments'
import butlers from './butlers'
import tabs from './tabs'
import plays from './plays'

const rootReducer = combineReducers({
    themes,
    packages,
    comments,
    butlers,
    tabs,
    plays
})

export default rootReducer
