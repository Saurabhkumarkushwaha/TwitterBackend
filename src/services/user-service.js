import { UserRespository } from '../repository/index.js';

class UserService {
    constructor() {
        this.userRespository = new UserRespository();
    }

    async signup(data) {
        try {
            const user = await this.userRespository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
        
    }
}

export default UserService;