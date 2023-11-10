import { useQuery } from '@tanstack/react-query';
import APIClient from '../sevices/api.client';

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

interface ImageQuery {
  page: number;
}

export default function useImages(query: ImageQuery) {
  const apiClient = new APIClient<UnsplashData>('/photos');

  return useQuery<UnsplashData[], Error>({
    queryKey: ['images', query],
    queryFn: () =>
      apiClient.getAll({
        params: {
          page: query.page
        }
      }),
    staleTime: 1000 * 30 // 30 seconds
  });
}
