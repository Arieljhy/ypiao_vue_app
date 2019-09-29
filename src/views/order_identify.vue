<template>
    <div>
        <div class="header">
        <mt-header :title="tit" class="head">
            <router-link to="/ticket_detial" slot="left">
                <mt-button icon="back">返回</mt-button>          
            </router-link> 
        </mt-header>
    </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            detaillist:[
                  {
                    "code": "11",
                    "name": "北京市",
                    "children": [
                      {
                          "code": "1101",
                          "name": "市辖区",
                          "children": [
                            {
                              "code": "110101",
                              "name": "东城区"
                            },
                            {
                              "code": "110102",
                               "name": "西城区"
                            }
                          ]
                      }
                    ]
                  },
                  {
                    "code": "11",
                    "name": "天津市",
                    "children": [
                      {
                        "code": "1101",
                        "name": "市辖区",
                        "children": [
                          {
                            "code": "110101",
                            "name": "12区"
                          }, {
                             "code": "110102",
                            "name": "34区"
                          }
                        ]
                      }
                    ]
                  }
                ]
        }
    }
    
}
</script>
<style lang="scss" scoped>
    
</style>