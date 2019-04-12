require.config({
	baseUrl: "/",
	paths : {
		"jquery" : "libs/jquery/jquery-3.2.1",
		"header" : "js/module/header",
		"footer" : "js/module/footer",
		"main"	 : "js/module/main",
		"url" :"js/module/url",
		"template" : "libs/art-template/template-web",
		"tools" : "js/tools",
		"fly" : "libs/jquery-plugins/jquery.fly.min"
	},
	shim : {
		"fly" : {
			deps : ["jquery"]
		}
	}
})