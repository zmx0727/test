	<template>
    <div>
      <form @submit.prevent>
              <input name="mailAddress" type="text" placeholder="请输入邮箱" v-model='mailAddress'><span>{{mailPoint}}</span>
              <input name="user" type="text" placeholder="请输入用户名" v-model='user'><span>{{userNamePoint}}</span>
              <input name="username" type="text" placeholder="请输入账号" v-model='userName'><span>{{userPoint}}</span>
      <input name="password" type="password" id="password"
      placeholder="请输入密码" v-model='passWord'/><span>{{passPoint}}</span>
              <button id='submit' style="width:100%;" @click='push()'>注册</button>
          </form>
        </div>
</template>
<script type="text/javascript">
  export default{
      name : 'passWord',
  }
</script>
<style type="text/css" scoped>
  input[type=text], input[type=file], input[type=password], input[type=email], select { border: 1px solid #DCDEE0; vertical-align: middle; border-radius: 3px; height: 50px; padding: 0px 16px; font-size: 14px; color: #555555; outline:none; width:100%;margin-bottom: 15px;line-height:50px; color:#888;}
input[type=text]:focus, input[type=file]:focus, input[type=password]:focus, input[type=email]:focus, select:focus { border: 1px solid #27A9E3; }
input[type=submit], input[type=button] { display: inline-block; vertical-align: middle; padding: 12px 24px; margin: 0px; font-size:16px; line-height: 24px; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; color: #ffffff; background-color: #27A9E3; border-radius: 3px; border: none; -webkit-appearance: none; outline:none; width:100%; }
button{
  display: inline-block; vertical-align: middle; padding: 12px 24px; margin: 0px; font-size:16px; line-height: 24px; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; color: #ffffff; background-color: #27A9E3; border-radius: 3px; border: none; -webkit-appearance: none; outline:none; width:100%;
}
</style>