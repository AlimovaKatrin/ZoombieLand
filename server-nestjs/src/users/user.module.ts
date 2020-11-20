import {Module} from '@nestjs/common';
import {UsersService} from './user.service';
import {UsersController} from './users.controller';

@Module({
    controllers: [UsersController],
    providers: [UsersService]
})
export class UserModule {
}
