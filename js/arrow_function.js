/**
 * 单一参数的单行箭头函数
 * // Syntax：arg => statement
 */
const single = foo => `${foo} world`;

console.info(single('Hello'));

let array = ['a', 'bc', 'def', 'ghij'];

array = array.filter(item => item.length >= 2);

console.log(array);

/**
 * 多参数的单行箭头函数
 * // Syntax：(arg1, arg2) => statement
 */
const multi = (foo, bar) => foo + bar;

array = array.sort((a, b) => a.length < b.length);

console.log(array);


/**
 * 单一参数的多行箭头函数
 * // Syntax：arg => { ... }
 */

const fn = foo => {
	return `${foo} world`;
}

/**
 * 多参数的多行箭头函数
 * // Syntax：(arg1, arg2) => { ... }
 */
const fn2 = (a, b) => {
	return a + b;
}

/**
 * 无参数的箭头函数
 * // Syntax：() => statement
 */

const greet = () => 'Hello World!';


// 箭头函数
const arr = [1, 2, 3];

const squares = arr.map(x => x * x);

console.info(squares);

const names = ['Will', 'Jack', 'Peter', 'Steve', 'John', 'Hugo', 'Mike'];

const newSet = names.map((name, index) => ({
		id: index,
		name: name
	}))
	.filter(man => man.id % 2 == 0)
	.map(man => [man.name])
	.reduce((a, b) => a.concat(b));

console.log(newSet);


// This 穿透
const obj = {
	hello:'world',
	foo(){
		// this
		const bar = () => this.hello;

		return bar;
	}
};

window.hello = 'ES6';
window.bar = obj.foo();
console.log(window.bar());