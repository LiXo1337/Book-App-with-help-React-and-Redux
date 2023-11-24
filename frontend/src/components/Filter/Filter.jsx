import "./Filter.css";
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
  selectTitleFilter,
  selectAuthorFilter,
  selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter),
    authorFilter = useSelector(selectAuthorFilter),
    onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);

  const handleTitleFilterChange = (e) => {
    return dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    return dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilter = () => {
    return dispatch(setOnlyFavoriteFilter());
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              onClick={handleOnlyFavoriteFilter}
            />
            Only Favorite
          </label>
        </div>
        <button onClick={handleResetFilters}>Reset All Filter</button>
      </div>
    </div>
  );
};

export default Filter;
