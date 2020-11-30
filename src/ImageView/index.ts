import { PopupToBody } from '../Popup';
import Gallery, { GalleryProps } from './Gallery';

export function GalleryPop(props: GalleryProps) {
  return PopupToBody(Gallery, props);
}

export { Gallery };
