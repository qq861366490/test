$(function(){
	var goods = {
		
		init: function(){
			this.createGoods();
		},
		createGoods: function(){
			var str = location.search;
			var str2 = str.replace(/\?/,'');
			$.ajax({
				url: '/ajax/goods',
				type: 'post',
				data: {
					_id: str2
				},
				success: function(data) {
					var str3 = `
						<li><span>商品名称:</span><span>${data.goodsName}</span></li>
						<li><span>价格:</span><span>¥${data.price}.00</span></li>
						<li><span>原价:</span><span class="price2">¥<s>${parseInt(parseFloat(data.price)/parseFloat(data.dicount/10))}.00</s></span></li>
						<li><span>商品信息:</span><span class="note">${data.note}</span></li>
					`;
					$('#goods-con').html(str3);
				}
				
			});	
		}
		
	};
	
	goods.init();
});
