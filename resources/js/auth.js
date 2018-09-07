class Auth {
	constructor () {
	    this.token = window.localStorage.getItem('token');

	    let userData = window.localStorage.getItem('user');
	    this.user = userData == 'undefined' ? null : JSON.parse(userData);

	    if (this.token) {
	        axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
	    }
	}

    login (token, user) {        
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

	    this.token = token;
	    this.user = user;

	    Event.$emit('userLoggedIn');
    }

	check () {
	    return !! this.token;
	}

	getUser() {
    axios.get('/api/get-user')
        .then(({data}) => {
            this.user = data;
        })
        .catch(({response}) => {
            if (response.status === 401) {
                this.logout();
            }
        });
	}
}

export default Auth;