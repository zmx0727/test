<template>
  <div>
    <router-view :key='activeQuery'>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'init',
  data () {
    return {
      users:''
    }
  },
  computed:{
  	activeQuery:function(){
  		return this.$router.query +new Date();
  	}
  }
}
</script>