var app = new Vue({
	el:'#musicapp',
	data:{
		songs:[
			'young for you',
			'yesterday once more',
			'someone like you',
			'I feel you',
			'if I were a boy'
		],	
		query:'',
		songInfo:{
			songs:[
				{id:'',name:'',mvid:'',artists:[{img1v1Url:''}]}
			]
		},
		musicUrl:''
	},
	methods:{
		searchSongsList:function(){
			var that = this
			axios.get("https://autumnfish.cn/search?keywords="+this.query).then(function(response){
				console.log(response.data.result)
				that.songInfo=response.data.result
			},function(err){})
		},
		getMusic:function(musicId){
			axios.get('https://autumnfish.cn/song/url?id='+musicId).then(function(response){
				console.log(response)
			},function(err){})
		}
		
		
	}
	
	
})
		
		