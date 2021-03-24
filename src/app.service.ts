import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Lumela lefatse la Nest.js, Express et al.';
  }
}
