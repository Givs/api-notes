const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

class UserCreateService {

    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async execute({ name, email, password }) {

       const isUserExists = await this.userRepository.findByEmail(email);

       if (isUserExists){
        throw new AppError("Este email já existe");
       }

       const hashedPassoword = await hash(password, 8);

       await this.userRepository.create({ name, email, password: hashedPassoword });
    }
}

module.exports = UserCreateService;