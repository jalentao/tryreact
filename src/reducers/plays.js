const initialState = [{
    user: {
        name: '叮叮当',
        sex: '0',
        age: '20',
        avatar: 'dingding'
    },
    detail:{
        title: '一场说走就走的淘金之旅行,相约三溪镇,五峰溪山油菜花',
        cover: 'cover',
        location:'吴凤溪',
        startTime: '1499233222',
        price: '78',
        memberNum: 6,
        type: '踏青采摘',
        organizer: '蜀道姓户外运动公司-山人行户外俱乐部',
        liked:false
    },
    photos:[
        'jkljkl',
        'jkdlf',
        'jkll',
        'jklfks',
        'jkljlk',
        'jkljlk'
    ],
    status:'1',
    createTime: '1388328893',
    distance: 111
}]

export default function plays(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}
