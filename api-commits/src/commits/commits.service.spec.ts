import { Test, TestingModule } from '@nestjs/testing';
import { CommitsService } from './commits.service';

describe('CommitsService', () => {
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitsService],
    }).compile();

    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should fetch commit data', async () => {
    const result = await service.getCommitHistory();
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
    // You can add more assertions here to check for the structure of the data
  });


});

