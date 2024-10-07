import "./App.css";
import { Article } from "./components/Article";
import { useEffect, useState } from "react";
export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
      }
    };
    fetchFoodData();
  }, []);
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading....</div>;

  const searchFilter = (e) => {
    const searchValue = e.target.value;
    if (searchValue === "") {
      setFilteredData(data);
      return;
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const foodSearch = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedButton("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedButton(type);
  };

  const filteredButton = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    { name: "Dinner", type: "dinner" },
  ];
  return (
    <>
      <header className="py-4 px-4 pt-14 bg-neutral-700">
        <div className=" flex  sm:flex-row flex-col gap-5  items-center sm:justify-between px-16 ">
          <h1 className="text-white font-bold text-4xl">
            F<span className="text-red-600">oo</span>dy Z
            <span className="text-red-600">o</span>ne
          </h1>
          <input
            onChange={searchFilter}
            type="search"
            className="bg-inherit text-white px-2 py-1 border-2 border-red-600 placeholder-white"
            placeholder="Search Food...."
          />
        </div>
        <div className="flex gap-2 items-center justify-center mt-8">
          {filteredButton.map((value) => (
            <button
              isSelected={selectedButton === value.type}
              key={value.name}
              className={`py-1 px-2 ${
                selectedButton === value.type ? "bg-red-800" : "bg-red-600"
              } text-white outline-none rounded-md`}
              onClick={() => foodSearch(value.type)}
            >
              {value.name}
            </button>
          ))}
        </div>
      </header>
      <Article data={filteredData} />
    </>
  );
}

export default App;
