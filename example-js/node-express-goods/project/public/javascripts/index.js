$(function() {
	var addGoods = {
		form: $('form.goods-form'),
		goodsName: $('input[name="goodsName"]'),
		price: $('input[name="price"]'),
		dicount: $('input[name="dicount"]'),
		note: $('textarea[name="note"]'),
		init: function() {
			this.submitClick();
		},
		submitClick: function() {
			var _this = this;
			this.form.on('submit', function(e) {
				e.preventDefault();
				var goodsName = _this.goodsName.val(),
					price = _this.price.val(),
					dicount = _this.dicount.val(),
					note = _this.note.val();
				
				var dataObj = {
					goodsName: goodsName,
					price: price,
					dicount: dicount,
					note: note
				};
				if(goodsName == '' || price == '' || dicount == '' || note == '') {
					return;
				};
				$.ajax({
					url: '/ajax/add',
					type: 'post',
					data: dataObj,
					success: function(data) {
						if(data.code == 2) {
							var div = document.createElement('div');
							var str = '<div class="okcon"><span><em></em>录入成功！</span></div>';
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function() {
								div.remove();
							}, 3000);

						} else {
							var div = document.createElement('div');
							var str = '<div class="errorcon"><span><em></em>录入失败！</span><p>' + data.txt + '</p></div>';
							div.innerHTML = str;
							$(document.body).append(div);
							setTimeout(function() {
								div.remove();
							}, 3000);
						}
					}
				});
			});

		}
	};
	addGoods.init();
});