import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

export default function SearchResultsInfo({ total = 0, city }: Props) {
  return (
    <div className="text-base flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-2 text-sm underline cursor-pointer text-blue-500"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
}
