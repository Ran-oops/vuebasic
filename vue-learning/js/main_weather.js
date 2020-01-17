
/* 			请求地址：https://autumnfish.cn/api/joke/list
		请求方法：get
		请求参数：num(笑话条数，数字)
		响应内容：随机笑话 */
		var app = new Vue({
			el:'#app',
			data:{
				cities:['beijing', 'tianjin','nanjing','shanghai'],
				city:'',
				weatherlist:[
					{date:'',high:'',low:'', type:''},
					{date:'',high:'',low:'', type:''},
					{date:'',high:'',low:'', type:''},
					{date:'',high:'',low:'', type:''},
					{date:'',high:'',low:'', type:''}
				]
	
			},
			methods:{
				searchWeatherInfo:function(){
					var that = this
					axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(function(response){
						console.log(response.data.data.forecast[1].high)
						that.weatherlist=response.data.data.forecast
						
					},function(err){})
				}
			}
		})
