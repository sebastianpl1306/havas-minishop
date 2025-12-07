import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '@/src/actions/product.actions';

import styles from '@/src/styles/product-detail.module.css';
import { RatingComponent } from '@/src/Components/RatingComponent';

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <main className={`${styles['product-detail']} container`}>
      <div className={styles["product-card__image-wrapper"]}>
        <Image
          src={product.image}
          alt={product.title}
          className={styles["product-card__image"]}
          width={300}
          height={300}
        />
      </div>
      <div className={styles["product-detail__content"]}>
        <h1 className={styles["product-detail__title"]}>{product.title}</h1>
        <h3 className={styles["product-detail__price"]}>$ {product.price.toFixed(2)}</h3>
        <p className={styles["product-detail__description"]}>{product.description}</p>
        <RatingComponent rating={product.rating.rate} />
      </div>
    </main>
  );
}