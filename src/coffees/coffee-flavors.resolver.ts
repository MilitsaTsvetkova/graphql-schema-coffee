import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { FlavorsByCoffeeLoader } from './flavors-by-coffee.loader';

@Resolver('Coffee')
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors')
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
