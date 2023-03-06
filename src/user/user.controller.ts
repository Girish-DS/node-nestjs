import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { UserService } from './user.service';
import { CreateUser, UpdateUser } from '../utils/dto/user.dto';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('createUser')
  @ApiBody({
    type: () => CreateUser,
    description: 'response of the user details with required fields'
  })
  @ApiOperation({ summary: 'Creating a new user' })
  async createNewUser(@Body() datum: CreateUser, @Res() res: Response) {
    try {
      const resp = await this.userService.createNewUser(datum);

      if (resp) return res.status(201).send(resp);
      return res.status(405).send(resp);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Get('allUsers')
  @ApiOperation({ summary: 'Get all the users list' })
  async getAllUsers(@Res() res: Response) {
    try {
      const data = await this.userService.getAllUsers();
      console.log(data);

      if (data) return res.status(200).send(data);
      return res.status(400).send(data);
    } catch (error) {
      return res.status(400).send([]);
    }
  }

  @Put('updateUser')
  @ApiBody({
    type: () => UpdateUser,
    description: 'Request to Update the User details'
  })
  @ApiOperation({ summary: 'Update the user' })
  async updateUser(@Body() datum, @Res() res: Response) {
    try {
      const data = await this.userService.updateUser(datum);
      return res.status(400).send(data);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  @Delete('deleteUserById/:id')
  @ApiParam({
    name: 'id',
    description: 'delete the user with id',
    type: String,
    required: true,
  })
  @ApiOperation({ summary: 'Delete the user by Id' })
  async deleteUserById(@Param('id') id, @Res() res: Response) {
    try {
      const data = await this.userService.deleteUserById(id);
      if (data) return res.status(200).send(data);
      return res.status(400).send(data);
    } catch (error) {
      return res
        .status(400)
        .send({ errorMessage: 'Something went wrong', error });
    }
  }
}
