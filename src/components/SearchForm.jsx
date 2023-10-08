import { useSearchParams } from 'react-router-dom';
import { Searchbar } from './Parts.styled';

const SearchForm = ({ submit }) => {
  //const[value, setValue] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const queryByParams = searchParams.get('search') || ''

  // useEffect(
  //   () => {queryByParams !== value && setValue(queryByParams)}, 
  //   [queryByParams, value]
  // );

  const handleChange = ({ target: { value } }) => {
    value ? setSearchParams({ search: value }) : setSearchParams({})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(queryByParams);
  }

  return (
    <Searchbar>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchMovies">Search products</label>
          <input
            name="title"
            type="text"
            onChange={handleChange}
            id="searchMovies"
            value={queryByParams}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </Searchbar>
  );
}

export default SearchForm
