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

export default function useImages() {
  const apiClient = new APIClient<UnsplashData>('/photos');

  return useQuery({
    queryKey: ['images'],
    queryFn: apiClient.getAll
  });
}