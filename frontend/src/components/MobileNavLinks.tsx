import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center text-black font-semibold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center text-black font-semibold hover:text-orange-500"
      >
        Manage Restaurant
      </Link>
      <Button
        className="flex items-center px-3 font-semibold hover:bg-gray-500"
        onClick={() => logout()}
      >
        Logout!
      </Button>
    </>
  );
}
