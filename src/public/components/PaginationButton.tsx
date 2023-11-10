interface PaginationButtonProps {
  page: number;
  setPage: (page: number) => void;
}

export default function PaginationButton({
  page,
  setPage
}: PaginationButtonProps) {
  return (
    <div className="mb-10 flex">
      <div className="join mx-auto hover:shadow-lg">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="btn join-item"
        >
          « Prev
        </button>
        <button className="btn join-item">Page {page}</button>
        <button onClick={() => setPage(page + 1)} className="btn join-item">
          Next »
        </button>
      </div>
    </div>
  );
}
