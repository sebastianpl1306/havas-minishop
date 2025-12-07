import Image from 'next/image';
import { Product } from '../interfaces/ResponseApi';
import styles from '../styles/product.module.css';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className={styles["product-card"]}>
        <div className={styles["product-card__image-wrapper"]}>
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            className={styles["product-card__image"]}
            width={200}
            height={200}
            quality={80}
            loading="lazy"
            fetchPriority="auto"
          />
        </Link>
        </div>
        <div className={styles["product-card__content"]}>
        <Link href={`/product/${product.id}`} className={styles["product-card__title"]}>{product.title}</Link>
        <p className={styles["product-card__price"]}>${product.price.toFixed(2)}</p>
        </div>
    </article>
  )
}