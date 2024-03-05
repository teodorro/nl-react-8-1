import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../App.css";

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
export default function Details({ selectedItem, setLoading }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (selectedItem == null) {
      return;
    }
    setLoading(true);
    fetchData(selectedItem.id)
      .then((result) => {
        if (!ignore) {
          setData(result);
        }
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [selectedItem, setLoading]);

  async function fetchData(id) {
    return await fetch(`${url}${id}.json`);
  }

  async function setData(data) {
    const jsonData = await data.json();
    console.log(jsonData);
    setItem(jsonData);
  }

  return (
    <div>
      <img
        className="detail-image"
        src={item != null && `${item.avatar}?=${Date.now()}`}
        alt={item?.name}
      />
      <div className="detail-name">{item != null && item.name}</div>
      <div className="detail">
        {item != null && `City: ${item.details.city}`}
      </div>
      <div className="detail">
        {item != null && `Company: ${item.details.company}`}
      </div>
      <div className="detail">
        {item != null && `Position: ${item.details.position}`}
      </div>
    </div>
  );
}

Details.propTypes = {
  selectedItem: PropTypes.object,
  setLoading: PropTypes.func,
};
