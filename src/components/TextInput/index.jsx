import './Styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input 
        className='texte-input'
        type="search" 
        onChange={handleChange}
        value={searchValue}
        placeholder='Procura'
      />
    )
}