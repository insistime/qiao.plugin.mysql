'use strict';

var qiaoPluginMysql = require('../lib/qiao.plugin.mysql');

var test = async function(){
	qiaoPluginMysql.init(require('./_config.json'));
	
	var res = await qiaoPluginMysql.getColumns('t_blog_type');
	console.log(res);
};

test();