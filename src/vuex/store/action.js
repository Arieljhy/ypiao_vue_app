//actions 类似于mutation，用于提交mutation来改变状态，而不直接变更状态，可以包含任意异步操作
 

 
export default{
  addGoods({commit},params){ //params对应mutation对象中参数info
    commit(ADD_GOODS,params);
  },
  addNum({commit},params){
    console.log("addNum");
    commit(ADD_NUM,params);
  },
  reduceNum({commit},params){
    commit(REDUCE_NUM,params);
  },
  deleteGoods({commit},params){
    commit(DELETE_GOODS,params);
  },
  clearShopCart({commit}){
    commit();
  }
}