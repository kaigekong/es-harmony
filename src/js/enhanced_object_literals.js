export default () => {
	/**
	 * 函数类属性的省略语法
	 * // Syntax：{ method() { ... } }
	 */
	const obj = {
		// Before
		foo: function () {
			return 'foo';
		},
		// After
		bar() {
			return 'bar';
		}
	};

	/**
	 * 支持__proto__注入
	 * // Syntax：{ __proto__: ... }
	 */

	/*
	// 该导入库方法暂不支持
	
	import {
		EventEmitter
	} from 'events';
	
	const machine = {
		__proto__: new EventEmitter(),
		method() {
	
		}
	};
	
	console.log(machine);
	
	console.log(machine instanceof EventEmitter);
	
	machine.on('event', msg => console.log(`Received message: ${msg}`));
	
	machine.emit('event', 'Hello World');
	
	machine.method();*/

	/**
	 * 可动态计算的属性名
	 * // Syntax：{ [statement]: value }
	 */
	const prefix = 'es2015';

	const objProp = {
		[prefix + 'enhancedObject']: 'foobar'
	};

	const fibo = {
		a: 0,
		b: 1,
		[Symbol.iterator]() {
			return {
				next() {
					[fibo.a, fibo.b] = [fibo.b, fibo.a + fibo.b];
					return {
						done: false,
						value: fibo.b
					};
				}
			};
		}
	};

	for (const n of fibo) {
		if (n > 100) {
			break;
		}
		console.log(n.toString() + ' ');
	}

	/**
	 * 将属性名定义省略
	 * // Syntax：{ injectVariable }
	 */
	const foo = 123;

	const bar = () => foo;

	const objInject = {
		foo,
		bar
	};

	console.log(objInject);

};