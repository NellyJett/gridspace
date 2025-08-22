import { FC } from "react";

interface Gallery13Props {
  className?: string;
}

const Gallery13: FC<Gallery13Props> = ({ className }) => {
  return (
    <img src="/images/gallery13.jpg" alt="gallery13" className={className} />
  );
};

export default Gallery13;