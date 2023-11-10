import Card from '../components/Card';
import useImages from '../hooks/useImages';

export default function HomePage() {
  const { data, isLoading } = useImages();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}
