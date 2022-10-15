import MovieList from "./MovieList";
import TabNavigation from "./TabNavigation";

export default function Content() {
  return (
    <>
      <TabNavigation />
      <div className="wrapper-content min-h-[500px] flex flex-row mt-4 items-center">
        <div className="w-full">
          <MovieList />
        </div>
      </div>
    </>
  );
}
