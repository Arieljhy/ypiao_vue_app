<template>
    <div class="addresslist">
        <div class="address-itm">
            <div class="itm-top">
                <div class="top-t">
                    <span class="adr_name">冀宏宇</span>
                    <span class="adr_phone">18266647973</span>

                </div>
                <div class="top-b">
                    <p class="adr_detail">
                        北京 北京市 海淀区 四季青佟家坟121号
                    </p>

                </div>

            </div>
            <div class="itm-bott">
                <div class="bott-l">
                    
                    <input type="text" style="display:none;">
                    <span  class="">
                    </span>
                    <span>默认选中</span>
                </div>
                <div class="bott-r">
                    <span><i class="iconfont">&#xe62c;</i>编辑</span>
                    <span><i class="iconfont">&#xe673;</i>删除</span>

                </div>

            </div>

            

        </div>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>


.address-itm{
    width:90%;
    height:0;
    padding: 5%;
    padding-bottom: 40%;

    position: relative;
    background-color: #fff;

    margin-top:10px;

    border-radius: 3px;
    .itm-top{
        width:100%;
        height:0;
        padding-bottom:30%;
        
        border-bottom: 1px solid #eee;
        text-align: justify;
        .top-t{


        }
        .top-b{

        }
    }
    .itm-bott{
        width:100%;
        height:0;
        padding-bottom:10%;
        
        font-size:15px;
        display: flex;
        justify-content: space-between;
        .bott-l{
            width:30%;
            height:100%;
            
        }
        .bott-r{
            width:40%;
        }
    }


}
    
</style>