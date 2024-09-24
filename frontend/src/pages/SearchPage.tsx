import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

export default function SearchPage() {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <span>
      user searched for: {city}&nbsp;&nbsp;
      <span>
        {results?.data.map((restaurant) => (
          <span>
            [found - {restaurant.restaurantName}, {restaurant.city}]
          </span>
        ))}
      </span>
    </span>
  );
}
