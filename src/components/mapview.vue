<template>
<div>
  <mt-header :title="name" class="head">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
  </mt-header>
   <baidu-map :center="center"  :zoom="zoom"  :dragging="true" :scroll-wheel-zoom="true" class="map"
     @ready="handler" 
     @click="getClickInfo"
     @moving="syncCenterAndZoom"  
     @moveend="syncCenterAndZoom"
     @zoomend="syncCenterAndZoom">
  
     <bm-local-search :keyword="keyword" :auto-viewport="true" :location="location" class="search"></bm-local-search>
   
     <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
   
     <bm-geolocation
       anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
       :showAddressBar="true"
       :autoLocation="true"
     ></bm-geolocation>
    
     <bm-marker :position="{lng:center.lng, lat: center.lat}"></bm-marker>
   </baidu-map>



</div>
</template>
<script>
 import baiduMap from 'vue-baidu-map/components/map/Map';
export default {
  data(){
        return{
          //百度地图初始化数据
            baidumapSwitch:false,
            center: { lng: 116.309492, lat: 39.918535},
            zoom: 15,
            location: "北京市",
            keyword: "请输入搜索关键词"
        }
      },
    methods:{//百度地图初始化（这个一定要！否则地图回加载不出来）
            handler({ BMap, map }) {},
            //点击获取到当前经纬度
            getClickInfo(e) {
            console.log(e.point.lng);
            console.log(e.point.lat);
            this.center.lng = e.point.lng;
            this.center.lat = e.point.lat;
            },
            //双向绑定经纬度以及缩放尺寸
            syncCenterAndZoom(e) {
            const { lng, lat } = e.target.getCenter();
            this.center.lng = lng;
            this.center.lat = lat;
            // this.zoom = e.target.getZoom();
            },
            //经纬度同步
            baidumap(){
            this.baiduDevicelocationx = this.center.lng
            this.baiduDevicelocationy = this.center.lat
            }     
        },
        components:{
            baiduMap
        }
}

</script>
<style scoped>
.head{
  background-color: #fe5929;
    color:#fff;
    font-size: 15px;
    border-radius: 3px;
        height: 50px;
    padding: 5px 0px;
    margin-bottom: 20px;
    font-size: 16px;
}
.map{
    width: 100%;
    height: 500px;
}

</style>