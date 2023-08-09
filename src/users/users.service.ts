import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  
    async createUser(createUser: CreateUserDto) {
        try {
            const { email, pass_word } = createUser;
            let newUser = {
                email,
                pass_word
            }

            return {
                message: "Update successfully",
                content: newUser
            }
        } catch (err) {
            throw new HttpException(err.response, err.status); 
        }

    }
}
