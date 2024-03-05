import PropTypes from "prop-types";
import "../App.css";

export default function List({ list, selectItem }) {
  return (
    <>
      <div className="list">
        {
          list.map((item) => (
            <div key={item.id}
            className="list__item"
            onClick={() => {
              selectItem(item);
            }}
            >{item.name}</div>
          ))
        }
      </div>
    </>
  );
}

List.propTypes = {
  list: PropTypes.array,
  selectItem: PropTypes.func,
}
