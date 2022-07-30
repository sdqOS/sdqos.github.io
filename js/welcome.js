const logger = require('hexo-log')();

Function.prototype.getMultiLine = function () {
		var lines = new String(this);
		lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
		return lines;
}
var str = function () {

}
logger.info(str.getMultiLine());
