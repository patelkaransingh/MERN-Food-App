import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.svg";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSearchSubmit = (SearchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${SearchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:px-32">
        <h1 className="text-3xl md:text-5xl font-semibold md:font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today.
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="Search by city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-semibold md:font-bold text-2xl md:text-3xl tracking-tight">
            Order takeaway even faster!
          </span>
          <span>
            Download mern-eats app for faster ordering and personalised
            recommendations.
          </span>
          <img src={appDownload} className="max-w-[200px] md:max-w-[270px]" />
        </div>
      </div>
    </div>
  );
}
