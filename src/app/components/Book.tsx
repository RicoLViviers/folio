/* eslint-disable @next/next/no-img-element */
type BookProps = {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  rating?: number;
};

export default function Book({
  id,
  title,
  author,
  price,
  image,
  rating,
}: BookProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white p-4 transition-shadow duration-200 hover:shadow-lg">
      <a
        href={`/books/${id}`}
        className="flex h-55 items-center justify-center rounded-lg overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="h-full max-w-full rounded-lg transition-transform duration-200 hover:scale-105"
        />
      </a>

      <div className="flex flex-1 flex-col pt-4">
        <a
          href={`/books/${id}`}
          className="font-semibold text-gray-900 transition-colors hover:text-blue-700"
        >
          <h3 className="line-clamp-2 text-base leading-6">
            {title}
          </h3>
        </a>

        <p className="mt-1 text-sm text-gray-500">
          by {author}
        </p>

        {rating !== undefined && (
          <div
            className="mt-2 flex items-center gap-1 text-sm"
            aria-label={`Rated ${rating} out of 5`}
          >
            <span className="text-amber-500" aria-hidden="true">
              ★
            </span>
            <span className="font-medium text-gray-700">
              {rating.toFixed(1)}
            </span>
            <span className="text-gray-400">/ 5</span>
          </div>
        )}

        <p className="mt-3 text-xl font-bold text-gray-900">
          R {price.toFixed(2)}
        </p>

        <button
          type="button"
          className="mt-auto w-full rounded-full bg-amber-400 px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
        >
          Add to basket
        </button>
      </div>
    </article>
  );
}