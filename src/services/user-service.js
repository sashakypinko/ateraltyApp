import BaseService from "./base-service";

export class UserService extends BaseService {

    getUser = (id, token) => this.get('/users/get', {id, token});
}

export const UserApi = new UserService();
