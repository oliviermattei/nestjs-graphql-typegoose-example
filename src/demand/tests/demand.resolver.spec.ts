import { Test, TestingModule } from '@nestjs/testing';
import { DemandResolver } from '../demand.resolver';

describe('UserResolver', () => {
  let resolver: DemandResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemandResolver],
    }).compile();

    resolver = module.get<DemandResolver>(DemandResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
