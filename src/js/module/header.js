define(["jquery"], function ($) {
	class Header {
		constructor () {
			this.init().then(() => {;
			this.textfield = $("#textfield");
			this.searchContainer = $("#search_result_search_fm");
			this.search();
			})
		}
		init () {
			return new Promise((resolve, reject) => {
				$("#header-container").load("/html/module/header.html",  () => {
					// 回调函数，指的是load加载结束以后执行的代码
					/*resolve();*/
					resolve();
				});
			})
		}
			search () {
				let _this = this;
				this.textfield.on("keyup", function () {
					let keyWord = $(this).val().trim();
					// 内容不为空才请求
					if(keyWord !== ""){
						// getJSON可以完成jsonp跨域，数据返回了自动调用后面的回调
						$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd="+keyWord, res => {
							let list = res.s;
							let ul = $("<ul>");
							list.forEach( function(item, index) {
								$("<li>").html(item).appendTo(ul);
							});
							_this.searchContainer.empty().show().append(ul);
						})
					}else{
						// 把上一次请求渲染出来的container隐藏
						_this.searchContainer.hide();
					}

					
				})

				this.textfield.on("blur", function () {
					setTimeout(() => {
						_this.searchContainer.hide();
					},200);
					
				})

				this.searchContainer.on("click", "li", function (e) {
					_this.textfield.val($(this).html());
					_this.searchContainer.hide();
				})
			}
	}
	return new Header();
})