import { useState } from 'react';

export default function useImages(initialImages = []) {
  const [images, setImages] = useState(initialImages);
  return [images, setImages];
}
