import Item from './item'
import html2canvas from './html2canvas.min'
import assets_data from '../data'
const default_config = {
	tabBtnNames: {},
	backgroundSetable: false,
    backgroundGroupName: 'Items1',
	rotatable: true,
    scalable: true
}
var s_index = 1

const App = {
	init: function(option){
	
		this.option = Object.assign({}, default_config, option);
		this.currentItem = null;
		this.isProducePic = false;
		this.tabBtnNames = this.option.tabBtnNames;
		// console.log(assets_data)
		this.preload.init();
		
		$("#view, .load, .cs-tab-tools, .footer, .cs-btn-camera, .loading-layer").on("touchmove",function(e){
			e.preventDefault();
		})
		$(document).on("touchend",function(){
		
			App.currentItem && App.currentItem.removeClass("active");
				App.currentItem = null;
			// console.log(App.currentItem)
				
			
	
		})
	},
	ready: function(){
		// console.log(App)
		var _this = this;
		
		//生成菜单
		for(let key in assets_data){
			if(key !== "_res"){
				const name = this.tabBtnNames[key] || key;
				const isSetBg = this.option.backgroundSetable && key.indexOf(this.option.backgroundGroupName) > -1
				$(".cs-tab-tools").append('<div class="cs-tab-btn"><img src="'+name+'"/></div>')
				_this.setMenuItem(assets_data[key], isSetBg);
			}
		}
		$(".cs-tab-btn").eq(0).addClass("active");
		$(".cs-tab-con").eq(0).addClass("active");
		//关闭元素添加菜单
		$(".cs-btn-close").on("touchend",function(e){
			$(".cs-tab-layer").addClass("close");
			$(".cs-tab-btn").removeClass("active");
		});
		$('#opera').on('click',function(){
            let sc = $(document).dialog({
                        type : 'toast',
                        infoIcon: '/images/icon/loading.gif',
                        infoText: '生成海报中...',
                    });
			if($('#hb').css('display')=='inline'){
				$('.pop_hb').css('display','flex')
                sc.close()
				return 
			}
         
			$('.pop_hb').css('display','flex')
			html2canvas($(".pop_hb_contain").get(0),{}).then(function(canvas) {
				$("#hb").attr("src",canvas.toDataURL())
					$('.pop_hb_contain').hide()
					$("#hb").show()
                    sc.close()
			});	
		})
		$(".arrow").on("touchend",function(e){
			if(!$('.cs-tab-contents').hasClass('cs_hidd')){
				$(".arrow").addClass('rotate')
				$('.cs-tab-contents').addClass('cs_hidd')
			}else{
				$(".arrow").removeClass('rotate')
				$('.cs-tab-contents').removeClass('cs_hidd')
			}
			
		});
	
		$('.pop_hb').on('touchend',function(e){
			$('.pop_hb').hide()
		})
		$(".btn-start").on("touchend",function(e){
			$('.load').fadeOut(500);
			$(".main").fadeIn(500);
			e.preventDefault();
		})
		
		
		//菜单选项
		$(".cs-tab-btn").on("touchend",function(e,index){
			// console.log(s_index)
			$('.cs-tab-contents').removeClass('cs_hidd')
			$(".arrow").removeClass('rotate')
			$(".cs-tab-btn").each(function(p){
				$(this).find('img').attr('src',`/images/vanke/gq/Assest/Items${p+1}/b.png`)
			})
			$('.cs-tab-con li[logo]').hide()
			$('.cs-tab-con li').each(function(){
				if($(this).attr('logo') && $(this).attr('logo') == 	s_index){
					
					$(this).show()
				}
			})
			var index = $(this).index(".cs-tab-btn");
			$(".cs-tab-layer").removeClass("close");
			$(this).find('img').attr('src',`/images/vanke/gq/Assest/Items${index+1}/a.png`)
			$(".cs-tab-btn").removeClass("active").eq(index).addClass("active");
			$(".cs-tab-con").removeClass("active").eq(index).addClass("active");
		});
		
		//合成图片
		$(".cs-btn-camera").on("touchstart",function(){
			App.loading.show();
			$(".cs-item").removeClass("active");
			$(".cs-tab-layer,.footer").hide();
			$(".bottom").fadeIn(500);
			if(!App.isProducePic){
				App.isProducePic = true;
				html2canvas($("#view").get(0),{
					allowTaint:false,
					useCORS: true
				  }).then(function(canvas) {
					timeout(500).then(function(){
						$(".s_img").attr("src",canvas.toDataURL())
						$('.n_t').text(text_list[l_index])
						$('.n_text_pro').text(p_text_list[l_index])
						$('.db').css('display','flex')
						App.loading.hide();
						return timeout(1000)
					}).then(function(){
						// $(".tip-layer").addClass("show");
						return timeout(3000)
					}).then(function(){
						// $(".tip-layer").removeClass("show");
					})
				});				
			}
		})
		
		function timeout(time){
			return new Promise(function(resolve,reject){
				setTimeout(resolve,time)
			})
		}
		
	},
	//相机显示隐藏判断，当画面元素数量大于或等于2时显示相机
	setCamera: function(){
		var itemCount = $("#room .cs-item").length;
		if(itemCount>=2){
			$(".cs-btn-camera").fadeIn(300);
		}else{
			$(".cs-btn-camera").hide();
		}
	},
	//生成元素菜单
	setMenuItem: function(dataList, isSetBg = false){
		var _this = this;
		// console.log(dataList)
		var ul = $("<ul>",{
			class: "cs-tab-con"
		}).appendTo(".cs-tab-contents")
		for(var i = 0;i < dataList.length;i++){
		
			let data = dataList[i];
			// if(dataList[i].visible !=  s_index){
			// 	break;
			// }
			// console.log(dataList[i])
			let li = $('<li>').css({
				"backgroundImage": "url("+ data.url +")",
				"backgroundSize": data.width > data.height?"cover" : "auto 92%",
			}).attr('logo',data.visible).data("index",i).appendTo(ul);
			if (isSetBg && !i) {li.addClass('active')}
		}
		
		ul.on("touchstart",">li",function(){
			_this.itemLastLeft = $(this).offset().left;
			_this.itemLastTop = $(this).offset().top;
		}).on("touchend",">li",function(){
			if(Math.abs(_this.itemLastLeft - $(this).offset().left)<15 && Math.abs(_this.itemLastTop - $(this).offset().top)<15){
				const index = $(this).data("index");
				if (isSetBg) {
					ul.children().removeClass('active')
					$(this).addClass('active')
					s_index = 0
					
					if(dataList[index].logo){
						s_index  =  dataList[index].logo
						// console.log(dataList[index].logo)
					}
					if(!s_index){
						$('.cs-room .cs-item[score]').remove()
					}else{
						$('.cs-room .cs-item[score]').remove()
						let name = "al41";
						if(s_index == 1){
							name="al11";
						}
						$('.cs-room').append(`<div class="cs-item active" score="1" style="width: 750px; height: 1448px; left: 0px; bottom: 0px; margin-left: 0px; margin-top: 0px; z-index: 0;">
						<img src="/images/vanke/gq/Assest/Items1/${name}.png" alt="" class="cs-body" style="width: 100%;">
						<div class="cs-btn-remove"></div>
					</div>`)
					}
					l_index = index
					$('#room').css({
						"backgroundImage": "url("+ dataList[index].imgUrl +")",
					})
					return false
				}
				// if(dataList[index].logo == s_index){
				// 	ul.children().removeClass('active')
				// 	$(this).addClass('active')
				
				// 	$('#room').css({
				// 		"backgroundImage": "url("+ dataList[index].imgUrl +")",
				// 	})
				// 	return false
				// }
				// console.log(_this.option )
				_this.currentItem && _this.currentItem.removeClass("active");
				_this.currentItem = new Item(dataList[index], _this.option);
//				_this.currentItem.addClass("active");
				App.setCamera();
			}
			return false;
		})
	},
	//预加载
	preload: {
		res: [...assets_data["_res"]],
		init: function (){
			this.target = new createjs.LoadQueue(false);
    		this.target.installPlugin(createjs.Sound);
			this.target.loadManifest(this.res);
	        this.target.on("progress", this.progress);
	        this.target.on("complete", this.complete);
		},
		progress: function(e) {
			var percent = (App.preload.target.progress*100|0)
			// $(".progress").text(percent);
		
			// console.log(percent);
			// $('.ani span').css('background-position','')
		},
		complete: function(){
			$(".progress").hide();
			$(".btn-start").fadeIn(400);
			// App.music.init();
			App.ready();
		}
	},
	//	背景音乐控制
	music: {
	
		init: function(){
		
			$("#music_ctrl").on("touchend",function(){
				if(!App.music.oBGM.paused){
					App.music.pause();
				}else{
					App.music.play();
				}
			})
		},
		pause: function(){
			
			$('#music_ctrl').addClass("stop");
		},
		play: function(){
			
			$('#music_ctrl').removeClass("stop");
		},
	},
	loading: {
		show: function(){
			$(".loading-layer").fadeIn(300);
		},
		hide: function(){
			$(".loading-layer").fadeOut(300);
		}
	}
}



export default App;