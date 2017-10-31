(function() {
	
	//轮播图的显示框
	var container = document.getElementById("container"),
	
		//所有的图片区域
		list = document.getElementById("list"),
		//图片跳转按钮
		buttons = document.getElementById("buttons"),
		
		//向左翻按钮
		prev = document.getElementById("prev"),
		
		//向右翻按钮
		next = document.getElementById("next"),
		
		//轮播图实现动态效果
		timer = null,
		
		//代表当前显示的图片
		onIndex = 0;
		
		//页面跳转
		function animate(num, target, zd) {
			list.style.left =  (parseInt(getComputedStyle(list).left) + num) + 'px'; 
			if(parseInt(getComputedStyle(list).left) === target) {
				list.style.left = zd;
			}
			
			buttons.getElementsByClassName("on")[0].className = '';
			buttons.getElementsByTagName('span')[onIndex].className = 'on';
			
		}
		
		
		
		prev.onclick = function() {
			onIndex--;
			if(onIndex === -1) {
				onIndex = 4;
			}
			animate(600, 0, "-3000px");
			
		};
		
		next.onclick = function() {
			onIndex++;
			if(onIndex === 5) {
				onIndex = 0;
			}
			 animate(-600, -3600, "-600px");
			 
			
		};
		
		IntervalFn();
		

		
		//取消定时器
		container.onmouseover = function() {
			clearInterval(timer);
		};
		
		//鼠标离开，触法定时器
		container.onmouseout = function() {
			IntervalFn();
		};
		
		//定义定时器
		function IntervalFn() {
			//图片每隔2秒跳转一次
			timer = setInterval(function () {
				next.click();
			}, 2000);
		};
		
		
})();