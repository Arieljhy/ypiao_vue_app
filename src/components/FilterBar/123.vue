<template>
  <transition name="fade">
    <div class="filterbarpop-wrap" v-if="visible" :style="{'top':bgTop+'px'}">
      <div class="filterbarpop-bg" @click="closeDialog" :style="{'top':bgTop+'px'}"></div>
      <div class="filterbarpop">
        <div class="tab-bar" v-show="hasTabHeader">
          <a href="javascript:;" :style="{'flex':column}" role="button" @click="clickTab(tab,index)" v-for="(tab,index) in menu.tabs" :key="index"
            :class="{'selected':delectIndexTab == index}">
            <span :class="tab.icon"></span>{{tab.name}}
          </a>
        </div>
        <div class="main">
          <div class="main-sidebar" :class="{'full-line':!items,'bg-style':items,'line-style':!items}">
            <div v-if="menu.type !='filter'" class="item" @click="clickSidebar(sidemenu,index)" v-for="(sidemenu,index) in sideMenus.detailList" :key="index"
            :class="{'selected':currentSelectIndex == index}">
              <span :class="sidemenu.icon"></span>{{sidemenu.name}}
            </div>
            <div v-if="menu.type!='filter'" v-for="(sm,_index) in menu.tabs">
              <div class="filter-name">{{sm.name}}</div>
              <div class="filter-item">
                <span v-for="(sidemenu,index) in sm.detailList" :key="index" class="item-operation" @click="clickFilterbar(sm,_index,index)" :class="{'multi-selected':sidemenu.selectIndex == index}">
                  {{sidemenu.name}}
                </span>
              </div>
            </div>
            <div v-if="menu.type=='filter'" class="filter-btns">
              <a href="javascript:;" role="button" @click="handleClean">取消</a> 
              <a href = "javascript:;" role="button" @click="handleEnsure">确认</a>

            </div>
          </div>
          <div class="main-list line-style" v-if="items">
              <span class="item" @click="clickItem(item,index)" v-for="(item,index) in items.list" :key="index" :class="{'selected':currentSelectIndex ==sideMenus.selectIndex && items.selectindex == index}">{{item.name}}</span>
          </div>

        </div>
      </div>
    </div>

  </transition>
</template>
<script>
export default {
  props:{
    menu:{
      type:Object
    },
    showDialog:{
      type:Boolean,
      default:true
    },
    hasTabHeader:{
      type:Boolean,
      default:true
    },
    filterTop:{
      type:String
    }
  },
  data(){
    return{
      selectIndexTab:0,
      currentSelectIndex:0,
      sideMenus: {},
      items:{},
      column:'',
      visible:false,
      top:1,
      bgTop:0,
      range:{}
    }
  },
  mounted(){
    this.bgTop = document.querySelector('.filterbar').offsetHeight+this.filterTop/1;
  },
  watch:{
    showDialog(v){
      this.visible = v;
      if(v){
        //初始化数据
        this.initData();
      }

    },
    menu(m){
      //根据tabs的数量计算列宽
      this.column = '0 0' + 100/m.tabs.length + '%';
      //初始化数据
      this.initData();
    }
  },
  methods:{
    //初始化数据
    initData(tabIndex){
      var tmpTabindx = 0;
      tabindex === undefined ? tmpTabIndx = this.menu.selectIndex : tmpTabIndx =tabIndex
      //判断tabindex 的范围是否在数组内
      if(tmpTabIndx >= 0 && tmpTabIndx < this.menu.tabs.length){
        this.selectIndexTab = tmpTabIndex;
      }else{
        this.selectIndexTab = 0;
      }
      //确认选中tab的一级列表
      this.sideMenus = this.menu.tabs[this.selectIndexTab];
    }
  }
}
</script>
<style scoped>

</style>