import PropTypes from "prop-types";

export default function List({ list, selectItem }) {
  return (
    <>
      <div className="list">
        {
          list.map((item) => (
            <div key={item.id}
            className="list__item"
            onClick={() => {
              console.log(item);
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
