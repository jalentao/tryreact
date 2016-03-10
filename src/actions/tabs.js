import * as types from '../constants/ActionTypes'

export function changeTab(value) {
    return { type: types.CHANGE_TAB, value }
}