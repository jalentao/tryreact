import PackageCleaning from './img/package/cleaning.jpg'
import PackageSterilize from './img/package/sterilize.jpg'

const initialState = [{
    name: '99元精细',
    img: PackageCleaning
}, {
    name: '3折: 给爱车杀菌清肺',
    img: PackageSterilize
}]

export default function packages(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
