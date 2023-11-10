import { useEffect, useState } from 'react';
import fakeService from '../sevices/fake-service';

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface UnsplashData {
  id: string;
  created_at: string;
  description: string;
  alt_description: string;
  urls: Urls;
}

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
