import React from 'react';

export interface ImageViewMethods {
  rotate: () => void;
  zoom: (scale?: number) => void;
  rest: () => void;
}

export interface GalleryContextType {
  index: number;
  addImage: (index: number, methods: ImageViewMethods) => void;
  removeImage: (index: number) => void;
}

function loop() {}

const GalleryContext = React.createContext<GalleryContextType>({ index: 0, addImage: loop, removeImage: loop });

export default GalleryContext;
