import { useState } from 'react';
import Card from '../components/Card';
import useImages from '../hooks/useImages';
import ErrorBanner from '../components/ErrorBanner';
import PaginationButton from '../components/PaginationButton';

export default function HomePage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useImages({ page });

  if (error) {
    return <ErrorBanner message={error.message} />;
  }

  return (
    <>
      <PaginationButton page={page} setPage={setPage} />
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      ) : (
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4">
          {data?.map((item) => <Card key={item.id} item={item} />)}
        </div>
      )}
    </>
  );
}
