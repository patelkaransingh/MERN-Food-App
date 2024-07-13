import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/form/user-profile-form/UserProfileForm";
import { User } from "@/types";

function UserProfilePage() {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    <span>Loading...</span>;
  }

  if (!currentUser) {
    <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser as User}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
}

export default UserProfilePage;
