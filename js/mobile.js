(function(window){
	'use strict';

	function Mobile(){
		this.board;

	}

	Mobile.prototype = {
		constructor:Mobile,

		_init:function(board){
			var self = this;
			self.board = board;
		},
		testaqie:function(key){
			var btnaqie = document.getElementsByClassName('button1');

            for(var b=0;b<btnaqie.length;b++){
                btnaqie[b].onclick=function(){
                    if(this.innerHTML=='up'){
                        alert(1)
                    }
                    switch(this.innerHTML){
                        case 'up':
                        key = 'top';
                        break;
                        case 'down':
                        snake.redirect = 'down';
                        break;
                        case 'left':
                        snake.redirect = 'left';
                        break;
                        case 'right':
                        snake.redirect ='right';
                        break;
                    }
                }
                
            }
		},
		press:function(key){          //键盘控制
			// console.log('right');   调试有没有执行
			var refresh = false;			//平滑效果 ？？？？？？？
			switch(key){
				case 'top':

				if(this.board.validMove(0,0)){
					this.board.shape.rotate();
					refresh = true;
				}
				//翻转
				break;
				case 'right':
				if(this.board.validMove(1,0)){  //判断是否越界
					this.board.shape.x+=1;   //键盘控制方块移动
					refresh = true;
				}				
				break;
				case 'down':
				if(this.board.validMove(0,1)){
					this.board.shape.y+=1;
					refresh = true;

				}
				//加速下落
				break;
				case 'left':
				if(this.board.validMove(-1,0)){
					this.board.shape.x-=1;
					refresh = true;
				}
				break;
			};
			if(refresh){
				this.board.refresh();
				this.board.shape.draw(this.board.context);
				if(key ==='down'){
					var self = this;
					window.clearInterval(window.TetrisConfig.intervalId);
					window.TetrisConfig.intervalId = window.setInterval(function(){
						self.board.tick();
					},TetrisConfig.speed);
					/*
					setInterval(function(){			//导致下落速度越来越快
						self.board.tick();
					},TetrisConfig.speed);*/
				}
			}
		}
		
	};
	window.Mobile = Mobile;
})(window);