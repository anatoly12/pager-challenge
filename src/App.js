import { useState, useCallback } from 'react';

import ResultTable from './components/ResultTable';
import Header from './components/Header';
import { searchPeople } from './utils';

function App() {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const handleSearch = useCallback(async () => {
    setLoading(true);
    try {
      const data = await searchPeople(value);
      setResult(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [value]);

  return (
    <div>
      <Header
        value={value}
        setValue={setValue}
        loading={loading}
        onSearch={handleSearch}
      />
      <div className="p-4">
        <ResultTable result={result} />
      </div>
    </div>
  );
}

export default App;
