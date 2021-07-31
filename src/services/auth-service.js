import BaseService from "./base-service";

class AuthService extends BaseService {

    login = (data) => this.post('/users/authenticate', data);
}

export const AuthApi = new AuthService();