<template>
    <section class="container table-container customScrool">            
            <div class="flex_header_table" :style={minWidth:minWidth}>
                <h4 v-for="(item, index) in tableHeader" :key="index">{{ item }}</h4>                
            </div>
            <div class="flex_body_table" :style={minWidth:minWidth}>
              <slot name="list"></slot>                           
            </div>                       
    </section>
</template>

<script>
export default {
  name: "TableFlex",
  props:{
    tableHeader:{
      type:Array    
    }
  },     
  data:() =>({
    minWidth: 100
  }), 
  mounted() {    
    this.minWidth = this.tableHeader.reduce((total,count)=>total += 100,100) + 'px'           
  }
};
</script>

<style>
.table-container{
  margin-top: 20px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #f0f0f0;
  width: 100%;
  overflow-x: auto;  
}
.flex_header_table {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 200;
  font-size: 14px;
  padding: 10px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 0.6px solid #DBD9D1;
}
.flex_header_table h4 {
  font-weight: normal;
  color: #2c2c2c;
  text-transform: uppercase;
  font-weight: 600;
}
.flex_body_table > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #DBD9D1;
  border-radius: 50px;
  font-weight: 200;
  font-size: 14px;
  padding: 20px;
  margin-bottom: 10px;
  text-align: center;
  transition: all 0.3s ease-in-out;
}
.flex_header_table h4,
.flex_body_table > div > p,.flex_body_table > div > div {
  max-width: 100%;
  width: 100%;
}
</style>
