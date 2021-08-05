class AuthError extends Error {
    constructor() {
        super();
        this.message = 'Looks like you\'re unauthorized';
        this.statusCode = 401;
    }
}

module.exports = AuthError;