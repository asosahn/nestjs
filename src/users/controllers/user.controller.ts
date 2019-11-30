import { CreateUser } from './../models/User';
import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getUser(@Query() createUser: CreateUser): string {
    return this.appService.getUser();
  }
}
