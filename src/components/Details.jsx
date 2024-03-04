import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const url =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/";
export default function Details({ selectedItem }) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (selectedItem == null) {
      return;
    }
    fetchData(selectedItem.id)
      .then((result) => {
        if (!ignore) {
          setData(result);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedItem]);

  async function fetchData(id) {
    return await fetch(`${url}${id}.json`);
  }

  async function setData(data) {
    const jsonData = await data.json();
    console.log(jsonData);
    setItem(jsonData);
    console.log(item?.avatar);
  }

  return (
    <div className="details">
      <img src={item != null && item.avatar} alt="" />
      <div className="detail">{item != null && item.name}</div>
      <div className="detail">{item != null && item.details.city}</div>
      <div className="detail">{item != null && item.details.company}</div>
      <div className="detail">{item != null && item.details.position}</div>
    </div>
  );
}

Details.propTypes = {
  selectedItem: PropTypes.object,
};