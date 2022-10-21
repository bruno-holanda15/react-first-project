import './styles.css';

export const PostTextInput = ({handleChange, searchValue}) => {
    return (<input className='text-input'
        onChange={handleChange}
        value={searchValue}
        type="search"
    />)
}