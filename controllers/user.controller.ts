import { JsonController, Get, QueryParams } from "routing-controllers";


class exampleQueryParam {  
  search!: string[] | string;
  
  expand!: string;
}


@JsonController('/users')
export default class Users{

  @Get('/')
  async getUser(
    @QueryParams(){ search, expand } : exampleQueryParam,
  ){
    return [{hello: 'world'}];
  }
}

