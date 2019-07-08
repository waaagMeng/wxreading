<template>
    <div class="findtab">
        <div class="radio-wrap">  
      <!-- <div class="radio-group" v-model="tabView">   
        <span 
           v-for="(tab ,index) in tabs" 
           :class="{cur:iscur==index}" 
           @click="iscur=index,tabChange('select' + (index + 1))">
             {{tab.name}}
        </span>  
      </div>   -->
      <div style="margin:10px 0;"></div>  
      <keep-alive>   
        <component v-bind:is="tabView"></component>  
      </keep-alive>   
    </div>  

    </div>
</template>

<script>
export default {
    name: 'findtab',
    data() {
        return {
          tabView: 'select1',
          iscur: 0,   
          tabs: [{name: "选项一"}, {name: "选项二"} ,{name: "选项三"}]
        }
    },
    components: {  
    select1,  
    select2,  
    select3  
  },  
  methods: {  
    tabChange:function(tab){  
      this.tabView = tab;  
    }  
  }  

}

</script>

<style>

</style>
