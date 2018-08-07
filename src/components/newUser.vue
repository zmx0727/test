<template>
	<div class="login_box">
	<div class='login_1'>欢迎登录云笔记</div>	
      <div class="login_l_img"><img src="@/assets/login-img.png" /></div>
      <div class="login">
          <div class="login_logo"><img src="@/assets/login_logo.png" /></div>
          <div class="login_name">
               <p style='font-size:25px;font-weight:bold'>注册</p>
          </div> 	
          <form @submit.prevent>
              <input name="mailAddress" type="text" placeholder="请输入邮箱" v-model='mailAddress'><span>{{mailPoint}}</span>
              <input name="user" type="text" placeholder="请输入账号" v-model='users'><span>{{userNamePoint}}</span>
              <input name="username" type="text" placeholder="请输入用户名" v-model='userName'><span>{{userPoint}}</span>
			<input name="password" type="password" id="password"
			placeholder="请输入密码" v-model='passWord'/><span>{{passPoint}}</span>
              <button id='submit' style="width:100%;" @click='push()'>注册</button>
          </form>
          <div style='float:left;margin-top:10px'><a @click = 'toforget'>忘记密码？</a></div>
          <div style='float:right;margin-top:10px'><a @click = 'toMain'>已有账号？</a></div>
      </div>
      <div class="copyright">李杨有限公司 版权所有©2016-2018 技术支持电话：888-88888888</div>
</div>
</template>
<script type="text/javascript">
	export default{
		name : 'newUser',
		data(){
			return{
				users:'',
				userName:'',
				mailAddress:'',
				passWord :'',
				mailPoint:'',
				userNamePoint:'账号为4到16位（字母，数字，下划线，减号，点号）',
				userPoint:'*用户名为4到16位（字母，数字，下划线，减号，汉字）',
				passPoint:'*密码最少6位，包括至少1个大写字母，1个小写字母，1个数字'
			}
		},
		methods:{
			toMain:function(){
				this.$router.push('mainLayout')
			},
			toforget(){
				this.$router.push('forget')	
			},
			push: function(){
				let users = this.users;
				let usernames = this.userName;
				let pass = this.passWord;
				let email = this.mailAddress
				let ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
				let unPattern = /^([a-zA-Z]*|[\u4E00-\u9FA5\uf900-\ufa2d]*)$/;
				let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;
				let uPattern = /^[a-zA-Z0-9_-]{4,16}$/
				if(email!==''){
					if(email.match(ePattern)){
						this.mailPoint = '可用的邮箱'
					}else{
						this.mailPoint = '邮箱不存在'
					}
				}
				else{
					this.mailPoint = '请输入邮箱'
				}
				if(users!==''){
					if(users.match(uPattern)){
						this.userNamePoint = '可用的账号'
					}else{
						this.userNamePoint = '账号不可用'
					}
				}
				if(usernames!==''){
					if(usernames.match(unPattern)){
						this.userPoint = '可用的用户名'
					}
					else{
						this.userPoint = '用户名输入错误'
					}
				}
				if(pass!==''){
					if(pass.match(pPattern)){
						this.passPoint = '密码格式正确'
					}else{
						this.passPoint = '密码格式错误'
					}
				}
				if(this.userPoint === '可用的用户名'&&this.mailPoint === '可用的邮箱'&&this.passPoint === '密码格式正确'&&this.userNamePoint === '可用的账号'){
					let AV = require('leancloud-storage');
				    let { Query, User } = AV;
					let user = new AV.User();
					user.setUsername(users)
					user.setPassword(pass)
					user.setEmail(email)
					user.signUp().then(function(loginedUser){
						loginedUser.set('name',usernames)
						loginedUser.save();
						this.$router.push({
						name : 'App',
							params : {
							user:loginedUser
							}
						}),function(error){
						alert(JSON.stringify(error))
				    }
				}.bind(this))
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
* { font: 13px/1.5 '微软雅黑'; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; -box-sizing: border-box; padding:0; margin:0; list-style:none; box-sizing: border-box; }
body, html { height:100%; overflow:hidden; }
body { background:#93defe; background-size: cover; }
a { color:#27A9E3; text-decoration:none; cursor:pointer; }
img{ border:none;}
.login_box{ width:1100px; margin:20px auto 0;}
.login_box .login_l_img{ float:left; width:432px; height:440px; margin-left:50px;}
.login_box .login_l_img img{width:500px; height:440px; }
.login {height:360px; width:400px; padding:50px; background-color: #ffffff;border-radius:6px;box-sizing: border-box; float:right; margin-right:50px; position:relative; margin-top:50px;}
.login_logo{ width:120px; height:120px; border:5px solid #93defe;border-radius:100px; background:#fff; text-align:center; line-height:110px; position:absolute; top:-60px; right:140px;}
.login_name{ width:100%; float:left; text-align:center; margin-top:20px;}
.login_name p{ width:100%; text-align:center; font-size:18px; color:#444; padding:10px 0 20px;}
.login_logo img{ width:60px; height:60px;display: inline-block; vertical-align: middle;}
input[type=text], input[type=file], input[type=password], input[type=email], select { border: 1px solid #DCDEE0; vertical-align: middle; border-radius: 3px; height: 50px; padding: 0px 16px; font-size: 14px; color: #555555; outline:none; width:100%;margin-bottom: 15px;line-height:50px; color:#888;}
input[type=text]:focus, input[type=file]:focus, input[type=password]:focus, input[type=email]:focus, select:focus { border: 1px solid #27A9E3; }
input[type=submit], input[type=button] { display: inline-block; vertical-align: middle; padding: 12px 24px; margin: 0px; font-size:16px; line-height: 24px; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; color: #ffffff; background-color: #27A9E3; border-radius: 3px; border: none; -webkit-appearance: none; outline:none; width:100%; }
button{
	display: inline-block; vertical-align: middle; padding: 12px 24px; margin: 0px; font-size:16px; line-height: 24px; text-align: center; white-space: nowrap; vertical-align: middle; cursor: pointer; color: #ffffff; background-color: #27A9E3; border-radius: 3px; border: none; -webkit-appearance: none; outline:none; width:100%;
}
.copyright { 
font-size:18px; color:black; display:block;width:100%; float:left; text-align:center; margin-top:335px;font-family: sans-serif;}

#password_text{border: 1px solid #DCDEE0; vertical-align: middle; border-radius: 3px; height: 50px; padding: 0px 16px; font-size: 14px; color: #888; outline:none; width:100%;margin-bottom: 15px;display: block; line-height:50px;}
.login_1{
	font-size: 80px; font-weight: bolder; font-family: sans-serif;text-align: center; margin-bottom: 100px;
}
a {
	font-family:serif; font-size: 18px; font-weight: bold;
}
a:hover{color: grey;}
form>span{
	color: red;font-size: 18px; font-family: sans-serif;margin-left: 15px;
	line-height: 10px;
}
</style>