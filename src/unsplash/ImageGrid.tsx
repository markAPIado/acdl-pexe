import { UnsplashData } from './useImages';
import Card from './Card';

interface ImageGridProps {
  data: UnsplashData[];
}

export default function ImageGrid({ data }: ImageGridProps) {
  return (
    <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
      {data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}
