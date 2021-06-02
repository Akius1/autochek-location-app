import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  const mockLocationService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService],
    })
      .overrideProvider(LocationService)
      .useValue(mockLocationService)
      .compile();

    service = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
