import unsplash from '../../unsplash';
import { UnsplashData } from '../hooks/useImages';

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
