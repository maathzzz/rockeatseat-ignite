import { ImgHTMLAttributes } from "react"; 
import styles from "./Avatar.module.css";

// extends traz a propriedades globais da tag Image
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder = true, src, alt, title} : AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
      alt={alt}
      title={title}
    />
  )
}
