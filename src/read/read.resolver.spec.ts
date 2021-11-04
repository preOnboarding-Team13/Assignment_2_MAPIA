import { Test, TestingModule } from '@nestjs/testing';
import { ReadResolver } from './read.resolver';

describe('ReadResolver', () => {
  let resolver: ReadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReadResolver],
    }).compile();

    resolver = module.get<ReadResolver>(ReadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
