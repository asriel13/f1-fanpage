import { useQuery } from 'react-query';

export default function Home() {
  const { isLoading, error, data, isFetching } = useQuery('', async () => {
    const res = await fetch('http://localhost:3001/');
    return res.json();
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className="App">
      <h1>{data.username}</h1>
      <div>{isFetching ? 'Updating...' : ''}</div>
    </div>
  );
}
