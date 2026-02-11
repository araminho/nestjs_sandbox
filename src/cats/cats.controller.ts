
import { Controller, Get, Post, Req, Header, Param, Body, Query } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get()
  // findAll(@Req() request: Request): string {
  //   return 'This action returns all cats and dogs';
  // }
  async findAll(@Query('age') age: number, @Query('breed') breed: string) {
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  @Post()
  @Header('Cache-Control', 'no-store')
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return 'Cat created';
  }

  @Get('abcd/*')
  findAbcd() {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} cat`;
  }
}
