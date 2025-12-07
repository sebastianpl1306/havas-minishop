import Image from "next/image";
import style from "../styles/hero.module.css";

export const HeroComponent = () => {
  return (
    <section className={style.hero}>
      <Image
        src="/fondo.webp"
        alt="Fondo hero"
        fill
        priority   
        quality={90}
        fetchPriority="high"
        className={style.hero_image}
      />
      <h3 className="logo">MiniShop</h3>
      <p className={style.hero__title}>Siempre encontrarás lo que necesitas</p>
    </section>
  )
}