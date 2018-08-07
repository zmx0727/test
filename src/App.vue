<template>
  <div id="app">
    <div id='userin'>欢迎尊敬的您：<a @click = 'toSelf'>{{userName.attributes.name}}</a></div>
    <div id='userOut'><a  @click = 'loginOut'>登出</a></div>
    <h1>{{title}}</h1>
    <input type="text" v-model='thing' placeholder="请输入备忘" class="item_submit">
    <button @click='submit' class="item_txt">记录</button>
    <ul>
      <li v-for='(todo,index) in todos'>
        <label>{{index+1}}.{{todo.attributes.thing}}</label>
        <time>{{todo.createdAt}}</time>
        <button @click='change(index)' class="item_txt" :index='index'>修改</button>
        <button @click='clear(index)' class="item_txt" :index='index'>删除</button>
        <hr/>
      </li>
    </ul>
  </div>
</template>
<script>
    let AV = require('leancloud-storage');
    let { Query, User } = AV;
    AV.init('mWa1nHqquRVlmvwIpT8IFNTJ-gzGzoHsz', 'ntMFAoRipT4jQttbOlepYP6P');
export default{
  name:'App',
  data(){
    return{
      todos:[],
      title:'备忘录',
      thing:'',
      userName:this.$route.params.user
    }
  },
  mounted:function(){
    let query = new AV.Query('TodoFile');
    query.find().then(function(result){
        this.todos = result
    }.bind(this))
    console.log(this.userName)
  },
  methods:{
    toSelf(){
      this.$router.push({name:'me'})
    },
    loginOut(){
      AV.User.logOut();
      this.$router.push({name:'mainLayout'})
    },
    submit:function(){
    let query = new AV.Query('TodoFile');
    let getThing = [];
     if(this.thing!==''){
        let TodoFile = AV.Object.extend('TodoFile');
        let todoFile = new TodoFile();
        todoFile.set('thing',this.thing)
        todoFile.save().then(function (todo){
          this.todos.push(todo)
     }.bind(this),
     function (error) {
     console.log(error)  
       });
      }
      else{
      window.alert('请输入备忘！')
    }
    },
    clear:function(index){
       let query = new AV.Query('TodoFile');
       let getValue =  confirm('确定删除？')
       if(getValue){
          let id = this.todos[index].id;
          let todoFile = AV.Object.createWithoutData('TodoFile', id);
          todoFile.destroy().then(function (success) {
            console.log('删除成功')
    }, function (error) {
     alert("错误"+error+'删除失败请重试')
    });
        this.todos.splice(index,1)
       }
    },
    change:function(index){
      let query = new AV.Query('TodoFile');
      let getValue = prompt('更改为什么？','')
      if(getValue!==''&&getValue!==null){
      let id = this.todos[index].id;
      let todoFile = AV.Object.createWithoutData('TodoFile', id)
      todoFile.set('thing', getValue);
      todoFile.save().then(
        console.log('修改成功！')
        )
      this.todos[index].attributes.thing = getValue;
      } 
    },
  },
}
</script>
<style type="text/css" scoped>
  body{
    background-color: grey;
  }
  h1{
    font-size: 100px;
    font-family: sans-serif;
    position: center;
  }
  #app{
    margin: 0px 50px 50px 50px;
    padding: 40px;
    text-align: center;
  }
  ul{
    text-decoration: none;
    font-size: 30px;
    font-family: sans-serif;
    background-color: green;
    padding: 20px;
    border: 1px solid black;
  }
  li{
    list-style: none;
  }
  hr{
   border: 1px dotted black;
  }
  .checked label{
    text-decoration:line-through;
  }
  time{
    font-size: 20px;
  }
.item_submit
{
background-color:black;
width:240px;
height:50px;
font-size:20px;
color:white;
font-weight:bold;
border-radius:10px;
}
.item_txt
{
border:1px solid red;
width:100px;
height:40px;
font-size:20px;
font-weight:bold;
}
#userin{
  position: fixed;
  left: 5px;
  top:0px;
  font-size: 20px;
  font-weight: bold;
}
#userOut{
  position: fixed;
  right: 5px;
  top:0px;
  font-size: 20px;
  font-weight: bolder;
  font-family: sans-serif;
}
a{
  text-decoration:none;
  color: blue;
}
a:hover{color:grey;
cursor:pointer;}
a:visited{
  color: grey;
}
</style>