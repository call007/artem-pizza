import lazySizes from "lazysizes";
import { ImgHTMLAttributes, useEffect, useRef, useState } from "react";
import * as Styled from "./styles";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export function LazyImage({ className, src, ...restProps }: Props) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [initialSrc, setInitialSrc] = useState(src);

  /**
   * При смене ссылки на картинку заставляем lazysizes отображать новую картинку
   */
  useEffect(() => {
    if (imageRef.current && initialSrc !== src) {
      lazySizes.loader?.unveil(imageRef.current);
    }

    setInitialSrc(src);
  }, [src, initialSrc]);

  return (
    <Styled.Image
      ref={imageRef}
      className={className ? `lazyload ${className}` : "lazyload"}
      data-src={src}
      alt=""
      {...restProps}
    />
  );
}
