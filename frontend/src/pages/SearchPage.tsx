import { useSearchRestaurants } from "@/api/RestaurantApi";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  if (isLoading) {
    <span>Loading...</span>;
  }

  if (!results?.data || !city) {
    <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px-1fr] gap-5">
      user searched for: {city}&nbsp;&nbsp;
      <div id="cuisines-list">Cuisines list here</div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchResultsInfo total={results?.pagination.total} city={city} />
      </div>
    </div>
  );
}
