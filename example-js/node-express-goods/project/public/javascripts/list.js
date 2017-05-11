$(function(){
	var list = {
		init: function(){
			this.createLi();
		},
		createLi: function(){
			$.ajax({
				url: '/ajax/list',
				type: 'post',
				success: function(data) {
					var li = '';
					
					for(var i=0,len=data.length; i <len ; i++){
						li +=`<li>
								<a href="/goods?${data[i]._id}">
									${data[i].goodsName}
								</a>
							</li>`;	
					};
					$('#goodsList').html(li);
					console.log(data);
				}
				
			});	
		}
	};
	list.init();
	
	
});
