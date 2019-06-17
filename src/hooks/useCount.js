import { useState } from 'react';

export default function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  return [count, setCount];
}
