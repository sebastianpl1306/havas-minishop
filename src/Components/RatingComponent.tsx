import { MdOutlineStar } from "react-icons/md"
import styles from "@/src/styles/rating.module.css"

interface RatingComponentProps {
  rating?: number;
}

export const RatingComponent = ({ rating = 0 }: RatingComponentProps) => {
  const ratingParsed = Math.floor(rating);

  return (
    <div className={styles.rating}>
        <p className={styles.rating__text}>Calificación</p>
        <div className={styles.rating__stars}>
            { ratingParsed > 0 && (<MdOutlineStar size={25}/>)}
            { ratingParsed > 1 && (<MdOutlineStar size={25}/>)}
            { ratingParsed > 2 && (<MdOutlineStar size={25}/>)}
            { ratingParsed > 3 && (<MdOutlineStar size={25}/>)}
            { ratingParsed > 4 && (<MdOutlineStar size={25}/>)}
            { ratingParsed > 5 && (<MdOutlineStar size={25}/>)}
        </div>
    </div>
  )
}