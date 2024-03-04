import { Test, TestingModule } from '@nestjs/testing';
import { ClipsController } from './controllers/clips.controller';
import { ClipsService } from './service/clips.service';

describe('ClipsController', () => {
  let controller: ClipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClipsController],
      providers: [ClipsService],
    }).compile();

    controller = module.get<ClipsController>(ClipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
