import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/form/manage-restaurant-form/ManageRestaurantForm";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
}
