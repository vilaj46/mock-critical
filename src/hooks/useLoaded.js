import { useState } from 'react';

function useLoaded(initialLoad = false) {
  const [loaded, setLoad] = useState(initialLoad);
  const load = () => setLoad(true);
  const unload = () => setLoad(false);
  return [loaded, load, unload];
}

export default useLoaded;
