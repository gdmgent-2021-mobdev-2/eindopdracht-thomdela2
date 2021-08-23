class AppError extends Error {
    constructor(error) {
        super();
        this.message = String(error);
    }
}

export default AppError;