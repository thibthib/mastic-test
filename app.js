const test = new Promise(resolve => {
	resolve();
});

test.then(() => {
	console.log('yay');
});
