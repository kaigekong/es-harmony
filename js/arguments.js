/**
 * 默认参数值
 * // Syntax：function fn(arg = defaultValue) { ... }
 */

function fn(arg = 'foo') {
	console.log(arg);
}

fn();
fn('bar');

const obj = {
	msg: 'World',
	greet(message = this.msg) {
		console.log(`Hello ${message}`);
	}
};

obj.greet();
obj.greet('ES2015');

/**
 * 剩余参数
 * // Syntax：function fn([arg, ]...restArgs) { ... }
 */

function rest(foo, ...rest) {
	console.log(`foo: ${foo}`);
	console.log(`Rest Arguments：${rest.join(',')}`);
}

rest(1, 2, 3, 4, 5);