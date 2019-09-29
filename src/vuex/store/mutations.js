//mutations，改变state数据的唯一途径，且不能用于处理异步事件
 
// import mutationTypes from '@/mutationTypes.js'
 
const mutations = {
    [mutationTypes.ADD_GOODS](state, info) {
      let isOwn = state.shopList.some(function(item){
        if(item.id == info.id){
          if(item.inventory!=0){
            item.num++;
            item.inventory--;
          }
          return true;
        }else{
          return false;
        }
      });
 
      if(!isOwn){
        state.shopList.push({id:info.id,name:info.name,price:info.price,inventory:info.inventory-1,num:1});
      }
    },
    [mutationTypes.ADD_NUM](state, index) {
      if(state.shopList[index].inventory!=0){
        state.shopList[index].num++;
        state.shopList[index].inventory--;
      }
    },
    [mutationTypes.REDUCE_NUM](state, index) {
      if(state.shopList[index].num == 0){
        state.shopList.splice(index,1);
      }else{
        state.shopList[index].num--;
        state.shopList[index].inventory++;
      }
    },
    [mutationTypes.DELETE_GOODS](state, index) {
      state.shopList.splice(index,1);
    },
    [mutationTypes.CLEAR_SHOP_CART](state) {
      state.shopList = [];
    },
  };

 
export default mutations;