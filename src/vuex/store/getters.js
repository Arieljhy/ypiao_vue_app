//基于state数据的二次包装，常用于数据的筛选和多个数据的相关性计算
// import state from '/states.js';
 
export default{
  totalPrice(){
    let totalPrice = 0;   // 计算总价
    for(let i =0;i<state.shopList.length;i++){
      totalPrice += parseInt(state.shopList[i].price*state.shopList[i].num*100)/100;
    }
    return totalPrice;
  },
  totalCount(){
    let totalCount = 0;   // 计算总数
    for(let i =0;i<state.shopList.length;i++){
      totalCount += parseInt(state.shopList[i].num);
    }
    return totalCount;
  }
}