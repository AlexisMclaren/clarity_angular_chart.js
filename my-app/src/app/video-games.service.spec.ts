import { TestBed } from '@angular/core/testing';

import { VideoGamesService } from './video-games.service';

describe('VideoGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoGamesService = TestBed.get(VideoGamesService);
    expect(service).toBeTruthy();
  });
});
