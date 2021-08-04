class ValidationError extends Error {
    constructor() {
        super();
        this.message = e.message;
        this.statusCode = 400;
    }
}

module.exports = {
    ValidationError,
}