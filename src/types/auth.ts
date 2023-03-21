export interface LoginBody {
  email: string;
  password: string;
}

export interface AuthPayload {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Auth extends AuthPayload {
  password: string;
}

export interface ValidationError extends Error {
  code: number;
  keyPattern: {
    email?: string;
    phone?: string;
  };
  errors: {
    [x: string]: {
      properties: {
        path: string;
        message: string;
      };
    };
  };
}
