import UserService from "../../src/services/user-service.js";
import  UserRespository  from "../../src/repository/user-repository.js";

jest.mock('../../src/repository/user-repository.js');

describe('user service signup test', () => {
    test('should successfully created a user', async () => {
        const data = {
            email: 'a@b.com',
            password: '123456'
        };
        (UserRespository.prototype.create).mockReturnValue({...data, createdAt: '2025-07-05', updatedAt: '2025-07-05'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);

    });
}) 