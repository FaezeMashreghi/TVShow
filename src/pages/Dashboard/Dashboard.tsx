import { useEffect } from "react";
import ShowCardGroup from "./_components/ShowCardGroup/ShowCardGroup";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../features/store";
import {
  getAllShowsThunk,
  getShowsByQueryThunk,
} from "../../features/shows/showThunk";

const DashboardPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const showsByGenre = useSelector(
    (state: RootState) => state.shows.showsByGenre,
  );
  const loading = useSelector((state: RootState) => state.shows.loading);
  const error = useSelector((state: RootState) => state.shows.error);
  const searchResult = useSelector(
    (state: RootState) => state.shows.searchResult,
  );

  useEffect(() => {
    dispatch(getAllShowsThunk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (keySerach: string) => {
    dispatch(getShowsByQueryThunk(keySerach));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="mt-8 sm:mt-16">
        {searchResult?.length ? (
          <ShowCardGroup title="Serached item" showItems={searchResult} />
        ) : (
          Object.keys(showsByGenre).map((key) => (
            <ShowCardGroup
              key={key}
              title={key}
              showItems={showsByGenre[key]}
            />
          ))
        )}
      </div>
    </>
  );
};
export default DashboardPage;
