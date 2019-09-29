<template>
<div class="filterbar" :style="{'top':top+'px'}">
    <div>
        <div class="container">
            <div class="row">
                <div class="col" :class="{'selected':index==selectedIndexmenu}"
                @click="handleShowDialog(barMenu,index)" v-for="(barMenu,index) in barMenus" :key="index">{{barMenu.name}}
                    <span :class="index==selectedIndexMenu?barMenu.selectIcon:barMenu.defaulticon"></span>
                </div>
            </div>
            <filter-bar-pop></filter-bar-pop>
        </div>
    </div>

</div>
</template>
<script>
import FilterBarPop from '../FilterBarPop.vue'
export default{
    props:{
        barMenus:{
            type:Array,
            required:true,
            validator:function(value){
                return true;
            }
        },
        top:String
    },
    data(){
        return{
            isShow:false,
            hasTabHeader:false,
            selectedMenu:{},
            selectedIndexMenu:undefined
        }
    },
    methods:{
        handleShowDialog(menu,index){
            this.isShow=true;
            this.selectedMenu = menu;
            this.selectedIndexMenu = index;
            if(menu.showTabHeader){
                this.hasTabHeader = true;
            }else{
                this.hasTabHeader = false;
            }
            let _menu = JSON.parse(JSON.stringify(menu));
            _menu.tabs= {};
            this.$emit('showDialog',_menu);

        },
        handleChangeTab(tab){
            this.$emit('changeTab',tab.index);
        },
        handleChangeMainItem(mainItem){
            let _mainItem = JSON.parse(JSON.stringfy(mainItem));
            this.$emit('changeMainItem',_mainItem);
        },
        handleCloseDialog(){
            this.isShow=false;
            this.selectedIndexMenu = -1;
            this.$emit('closeDialog');
        },
        changeSelect(){
            var selectData = [];
            this.barMenus.forEach(function(barMenu,index,arr){
                let _selectBarData={};
                _selectBarData.name = barMenu.name;
                _selectBarData.value = barMenu.value;
                _selectBarData.tab={};
                let tab = barMenu.tabs[barMenu.selectIndex];
                _selectBarData.tab.name = tab.name;
                _selectBarData.tab.value = tab.value;
                let mainItem = tab.detailList[tab.selectIndex];
                _selectBarData.tab.mainItem.name = mainItem.name;
                _selectBarData.tab.mainItem.value = mainItem.value;
                let subItem = false;
                if(mainItem.list){
                    subItem = mainItem.list[mainItem.selectIndex];
                    _selectBarData.tab.mainItem.subItem.name = subItem.name;
                    _selectBarData.tab.mainItem.subItem.value = subItem.value;
                }
            })
        }
    }
}
</script>