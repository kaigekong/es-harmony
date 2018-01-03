export default () => {
	/**
	 * 使用对象作为返回载体（带有标签的多返回值）
	 * // Syntax：{ arg1, arg2 } = {arg1: value1, arg2: value2 }
	 */
	function getState() {
		return {
			error: null,
			logined: true,
			user: {}
		};
	}

	const {
	error,
		logined,
		user
} = getState();

	if (error) {
		console.log('error');
	} else if (logined) {
		console.log('logined');
	} else {
		console.log('success');
	}

	/**
	 * 使用数组作为返回载体
	 * // Syntax：[ arg1, arg2 ] = [ value1, value2 ]
	 * // Syntax：[ arg1, , arg2 ] = [ value1, value2, value3 ]
	 * // Syntax：[ arg1, arg2, ...restArgs ] = [ value1, value2, varlue3, value4 ]
	 */

	// const [foo, bar] = [1, 2];

	// const [foo, , bar] = [1, 2, 3];

	const [foo, bar, ...rest] = [1, 2, 3, 4, 5];

	console.log(foo, bar);
	console.log(rest);

	// 解构别名
	function fetchData() {
		return {
			response: ['foo', 'bar']
		};
	}

	const {
	response: data
} = fetchData();

	console.log(data);

};