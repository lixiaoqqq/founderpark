<template>
    <div  @click="gp" class="ticket_sales_button"> 
              <div> 立即购票</div>
    </div>
</template>

<script>
export default {
data(){
    return{

    }
},
mounted(){

},
methods:{
    gp(){
        window.location.href=this.$store.state.url
    }
}
}
</script>

<style lang="scss" scoped>
.ticket_sales_button {
  margin-bottom: 10%;
  margin-top: 5%;
  div{
    text-align: center;
    background: #D3FF19;
    padding: 1% 0;
    width: 96%;
    font-size: 12vw;
    font-family: 'OPPOSans_B';

  }
}
</style>