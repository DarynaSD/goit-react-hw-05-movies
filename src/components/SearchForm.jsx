import { useSearchParams } from 'react-router-dom';
import { Button, FormWrap, Input } from './Parts.styled';

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
    <form onSubmit={handleSubmit}>
      <FormWrap>
        <Input
          name="title"
          type="text"
          onChange={handleChange}
          id="searchMovies"
          value={queryByParams}
          placeholder="I search..."
          required
        />
        <Button type="submit">Search</Button>
      </FormWrap>
    </form>
  );
}

export default SearchForm
