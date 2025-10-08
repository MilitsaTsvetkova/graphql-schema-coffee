import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from '../graphql';

@Injectable()
export class CoffeesService {
  findAll() {
    return [];
  }
  findOne(id: number) {
    return null;
  }
  create(createCoffeeInput: CreateCoffeeInput) {
    return null;
  }
}
