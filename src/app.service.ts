import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getNewFunction(): string {
    return 'Esto es para una prueba de git!';
  }
}
