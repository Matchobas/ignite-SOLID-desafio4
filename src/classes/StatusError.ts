interface ICreateError {
  status: number;
  message: string;
}

class StatusError extends Error {
  status: number;

  constructor({ status = 200, message }: ICreateError) {
    super();
    this.status = status;
    this.message = message;
  }
}

export default StatusError;
