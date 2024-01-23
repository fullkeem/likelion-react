import FormControl from './FormControl';
import './01-searchbar.css';
import IconNaver from './IconNaver';
import SearchButton from './SearchButton';

const SearchBar = () => {
  <form className="searchBar" onSubmit={(e) => e.preventDefault()}>
    <div className="searchBarGroup" role="group">
      <IconNaver />
      <FormControl />
    </div>
    <SearchButton />
  </form>;
};

export default SearchBar;
