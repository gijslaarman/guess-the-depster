import { useState } from 'react';
import names from './names'

interface AutocompleteProps {
    setAnswer: (answer: string) => void;
}

const Autocomplete = ({ setAnswer }: AutocompleteProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const answer = data.get('name');
    setAnswer(answer?.toString() || '');
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input style={{
        marginTop: '1rem',
        display: 'block',
        width: '100%',
        padding: '0.5rem',
        borderRadius: '4px',
        border: '1px solid #ccc'
      
      }} name="name" type="search" list="names" placeholder="Type a name..." onChange={(event) => setInputValue(event.target.value)} value={inputValue} />
      <datalist id="names">
        {names.map((i) => (
          <option key={i} value={i} />
        ))}
      </datalist>

      <button type="submit" style={{
        marginTop: '1rem',
        display: 'block',
        width: '100%',
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: '4px',
        padding: '0.5rem',
        border: 'none'
      }}>
          Guess who?
      </button>
    </form>
  );
};

export default Autocomplete;
