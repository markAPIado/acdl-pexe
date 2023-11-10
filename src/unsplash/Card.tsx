import { UnsplashData } from './useImages';

interface CardProps {
  item: UnsplashData;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="md:w-100 card h-auto bg-base-100 shadow-xl duration-300 ease-in-out hover:scale-105 sm:w-full lg:w-full">
      <figure className="image-cover">
        <img
          className="h-48 w-full object-cover"
          src={item.urls.regular || 'https://via.placeholder.com/350'}
          alt={item.alt_description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-slate-200">{item.alt_description}</h2>
        <p className="break-all">{item.description}</p>
      </div>
    </div>
  );
}
