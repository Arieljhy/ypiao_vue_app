<template>
<div>
  <mt-header :title="name" class="head">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
  </mt-header>
    
<mt-index-list class="list">
  <div class="top">
  <div class="sel_top">
          <span>搜素城市:</span><input type="text" placeholder="请输入">
      </div>
      <div class="seled_top">
          <span class="">定位城市:</span>
          <div class="city">
              <span>北京</span>
          </div>
          
      </div>
      <div class="rm_city">
          <span>热门城市:</span>
          <div class="city">
            <span>北京</span><span>上海</span><span>广州</span>
            <span>深圳</span><span>成都</span><span>武汉</span>
          </div>
      </div>
</div>    
  
  <mt-index-section index="A">
    <mt-cell title="安顺"></mt-cell>
    <mt-cell title="澳门"></mt-cell>
  </mt-index-section>

  <mt-index-section index="B">
    <mt-cell title="北京"></mt-cell>
    <mt-cell title="包头"></mt-cell>
  </mt-index-section>
  <mt-index-section index="C">
    <mt-cell title="重庆"></mt-cell>
    <mt-cell title="成都"></mt-cell>
    <mt-cell title="长沙"></mt-cell>
    <mt-cell title="常州"></mt-cell>
    <mt-cell title="长春"></mt-cell>
  </mt-index-section>
  <mt-index-section index="D">
    <mt-cell title="大连"></mt-cell>
    <mt-cell title="东莞"></mt-cell>
    <mt-cell title="达州"></mt-cell>
  </mt-index-section>
   <mt-index-section index="F">
    <mt-cell title="佛山"></mt-cell>
    <mt-cell title="福州"></mt-cell>
  </mt-index-section>
   <mt-index-section index="G">
    <mt-cell title="广州"></mt-cell>
    <mt-cell title="桂林"></mt-cell>
    <mt-cell title="贵阳"></mt-cell>
    <mt-cell title="高雄"></mt-cell>
    
  </mt-index-section>
  <mt-index-section index="H">
    <mt-cell title="合肥"></mt-cell>
    <mt-cell title="杭州"></mt-cell>
    <mt-cell title="哈尔滨"></mt-cell>
    <mt-cell title="惠州"></mt-cell>
    <mt-cell title="邯郸"></mt-cell>
    <mt-cell title="呼和浩特"></mt-cell>  
  </mt-index-section>
  <mt-index-section index="J">
    <mt-cell title="金华"></mt-cell>
    <mt-cell title="济南"></mt-cell>
    <mt-cell title="嘉兴"></mt-cell>  
  </mt-index-section>
  <mt-index-section index="K">
    <mt-cell title="昆明"></mt-cell>
  </mt-index-section>
  <mt-index-section index="L">
    <mt-cell title="洛阳"></mt-cell>
    <mt-cell title="拉萨"></mt-cell>
    <mt-cell title="廊坊"></mt-cell>  
  </mt-index-section>
<mt-index-section index="M">
    <mt-cell title="绵阳"></mt-cell>
  </mt-index-section>

    <mt-index-section index="N">
    <mt-cell title="南京"></mt-cell>
    <mt-cell title="南通"></mt-cell>
    <mt-cell title="宁波"></mt-cell>
    <mt-cell title="南昌"></mt-cell>
    <mt-cell title="南宁"></mt-cell>  
  </mt-index-section>
  <mt-index-section index="Q">
    <mt-cell title="青岛"></mt-cell>
    <mt-cell title="泉州"></mt-cell>
    <mt-cell title="秦皇岛"></mt-cell>
  </mt-index-section>

      <mt-index-section index="S">
    <mt-cell title="上海"></mt-cell>
    <mt-cell title="深圳"></mt-cell>
    <mt-cell title="绍兴"></mt-cell>
    <mt-cell title="石家庄"></mt-cell>
    <mt-cell title="沈阳"></mt-cell>
    <mt-cell title="苏州"></mt-cell>   
  </mt-index-section>

    <mt-index-section index="T">
    <mt-cell title="天津"></mt-cell>
    <mt-cell title="太原呢"></mt-cell>
    <mt-cell title="台州"></mt-cell>
    <mt-cell title="台北"></mt-cell> 
  </mt-index-section>

  <mt-index-section index="W">
    <mt-cell title="武汉"></mt-cell>
    <mt-cell title="无锡"></mt-cell>
    <mt-cell title="乌鲁木齐"></mt-cell>
  </mt-index-section>

   <mt-index-section index="X">
    <mt-cell title="西安"></mt-cell>
    <mt-cell title="厦门"></mt-cell>
    <mt-cell title="徐州"></mt-cell>
    <mt-cell title="襄阳"></mt-cell>
    <mt-cell title="香港"></mt-cell>  
  </mt-index-section>
     <mt-index-section index="Y">
    <mt-cell title="扬州"></mt-cell>
    <mt-cell title="银川"></mt-cell>
  </mt-index-section>

   <mt-index-section index="Z">
    <mt-cell title="郑州"></mt-cell>
    <mt-cell title="珠海"></mt-cell>
    <mt-cell title="中山"></mt-cell>
    <mt-cell title="镇江"></mt-cell> 
  </mt-index-section>


</mt-index-list>

</div>
</template>
<script>
export default {
  data(){
    return{
      cityData: [
                    {
                        'cityTp': "A",
                        "cityCode": "ALB",
                        "cityPl": "aerbaniva",
                        "cityNamw": "阿尼巴尼亚"
                    },
                    {
                        'cityTp': "A",
                        "cityCode": "AUS",
                        "cityPl": "aodaliya",
                        "cityNamw": "澳大利亚"
                    },
                    {
                        'cityTp': "B",
                        "cityCode": "BHS",
                        "cityPl": "bahama",
                        "cityNamw": "巴哈马"
                    },
                    {
                        'cityTp': "C",
                        "cityCode": "PRK",
                        "cityPl": "chaoxian",
                        "cityNamw": "朝鲜"
                    },
                ]
    }
  }
  
}
</script>
<style lang="scss" type="text/css" scoped>
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
.top{
  width:100%;
  margin-bottom: 20px;
}
  .list mt-cell{
    text-align:justify;
  }
  .sel_top{
    width: 100%;
    height:50px;
    input{
      display: inline-block;
      width:70%;
      height:30px;
      border: 1px solid #eee;
      border-radius: 5px;
    }
  }
  .sel_top>span,.seled_top>span,.rm_city>span{
    margin-left: 20px;
      float: left;
      margin:10px;
  }
  .city{
    clear: both;
    span{
      display: inline-block;
      width:100px;
      height:40px;
      line-height: 40px;
      text-align: center;
      background-color: #eee;
      margin:5px 10px;
      font-size: 14px;
      border-radius: 5px;
    }
  }
</style>