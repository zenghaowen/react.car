import {SETINPUTVAL,TODOADD, ADDCAR,JIANCAR} from './actionTypes'
const initState = {
  inputVal: '',
  todoList: [],
  productList:[
    {id: 1,name: 'apple',price: 18},
    {id: 2,name: 'banana',price: 15},
    {id: 3,name: 'orange',price: 10}
  ],
  carList:[]
}

export default (state = initState, action) => {

  switch (action.type) {
    case SETINPUTVAL:

      return Object.assign({}, state, {
        inputVal: action.value
      });

    case TODOADD:

      return Object.assign({}, state, {
        todoList: [...state.todoList, state.inputVal]
      })
    case ADDCAR:
      // 要添加的商品
      let product=action.product
      // 判断要添加的商品是否已经存在
      let index=state.carList.findIndex(item => item.id===product.id)
      if(index>-1){
        // 存在
        // state.carList[index].num++
        let newCarlist=JSON.parse(JSON.stringify(state.carList))
        newCarlist[index].num++
        newCarlist[index].total=newCarlist[index].price*newCarlist[index].num
        return Object.assign({},state,{
          carList:newCarlist
        })

      }else{
        // 不存在
        product =Object.assign({},product,{
          num:1,
          total:product.price*1
        })
        return Object.assign({},state,{
          carList:[...state.carList,product]
        })
      }
      case JIANCAR:
      let product2=action.product
      // 判断要添加的商品是否已经存在
      let index2=state.carList.findIndex(item => item.id===product2.id)
      if(index2>-1){
        let newCarlist2=JSON.parse(JSON.stringify(state.carList))
        if(newCarlist2[index2].num>1){
          newCarlist2[index2].num--
        newCarlist2[index2].total=newCarlist2[index2].price*newCarlist2[index2].num
        }else{
          newCarlist2.splice(index2,1)
        }
        return Object.assign({},state,{
          carList: newCarlist2
        })
      }else{
        return state
      }
    default:
      return state;
  }
}
