let login = (username, password) => {
	if(username !== 'admin'  || password !== 'radical') {
		console.log('incorrect login');
	}
};

login('admin', 'radical');

console.log("login js es6");