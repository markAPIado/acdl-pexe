import { useState } from 'react';
import Loading from '../components/Loading';
import ErrorBanner from '../components/ErrorBanner';
import ImageGrid from './ImageGrid';
import PaginationButton from './PaginationButton';
import useImages from './useImages';

export default function Unsplash() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useImages({ page });

  if (error) {
    return <ErrorBanner message={error.message} />;
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <PaginationButton page={page} setPage={setPage} />
      {isLoading ? <Loading /> : <ImageGrid data={data} />}
    </>
  );
}
