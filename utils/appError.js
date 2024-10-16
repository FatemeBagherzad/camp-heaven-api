class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    console.log('⛔ From App error utils message=', message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
