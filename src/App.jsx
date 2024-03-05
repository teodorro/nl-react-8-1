import { useEffect, useState } from "react";
import Details from "./components/Details";
import List from "./components/List";
import LoadingIndicator from "./components/LoadingIndicator";
import "./App.css";

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json";

function App() {
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    fetchData()
      .then((result) => {
        if (!ignore) {
          setData(result);
        }
      })
      .catch((error) => console.error(error));
    return () => {
      ignore = true;
    };
  }, []);

  async function setData(data) {
    const jsonData = await data.json();
    console.log(jsonData);
    setList(jsonData);
  }

  async function fetchData() {
    return await fetch(url);
  }

  function selectItem(item) {
    setSelectedItem(item);
  }

  return (
    <>
      <div className="app">
        <div className="list__container">
          <List
            list={list}
            selectItem={selectItem}
          ></List>
        </div>
        <div className="details__container">
          {selectedItem != null ? (
            <Details
              selectedItem={selectedItem}
              setLoading={setLoading}
            ></Details>
          ) : (
            <></>
          )}
        </div>
        {loading ? (
          <div className="loading__container">
            <div className="loading">
              <LoadingIndicator loading={loading}></LoadingIndicator>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
