import { UnsplashData } from '../hooks/useFakeData';

interface CardProps {
  item: UnsplashData;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="md:w-100 card h-auto bg-base-100 shadow-xl sm:w-full lg:w-full">
      <figure className="image-cover">
        <img
          className="w-full"
          src={item.urls.regular}
          alt={item.alt_description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-200">{item.alt_description}</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
