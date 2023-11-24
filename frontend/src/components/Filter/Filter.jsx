import "./Filter.css";
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);

  const handleTitleFilterChange = (e) => {
    return dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    return dispatch(setAuthorFilter(e.target.value));
  };

  const handleResetFilters = () => {
    return dispatch(resetFilters());
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={handleTitleFilterChange}
            type="text"
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            type="text"
            placeholder="Filter by author..."
          />
        </div>
        <button onClick={handleResetFilters}>Reset All Filter</button>
      </div>
    </div>
  );
};

export default Filter;
