import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('test')
export class TestController {
  @Get('profile-query')
  getUserProfileQuery(@Query('id') id: string) {
    return `user id is ${id}`;
  }

  @Get('profile-param/:id')
  getUserProfileParam(@Param('id') id: string) {
    return `user id is ${id}`;
  }

  @Post('profile-body')
  postUserProfileBody(@Body('id') id: string) {
    return `user id is ${id}`;
  }
}
