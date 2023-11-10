import { useEffect, useState } from 'react';
import fakeService from '../sevices/fake-service';
import { UnsplashData } from './useImages';

export const useFakeData = () => {
  const [data, setData] = useState<UnsplashData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true),
      fakeService
        .getAll()
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
          setLoading(false);
        });
  }, []);

  return { data, loading, error };
};
