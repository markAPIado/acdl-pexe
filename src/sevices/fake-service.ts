import unsplash from '../unsplash/unsplash-data';
import { UnsplashData } from '../unsplash/useImages';

class FakeService {
  getAll(): Promise<UnsplashData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(unsplash as UnsplashData[]);
      }, 2000);
    });
  }
}

export default new FakeService();
