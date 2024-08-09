import { FullStar } from "./FullStar";
import { EmptyStar } from "./EmptyStar";

interface Props {
  rating: number;
}

const Rating: React.FC<Props> = ({ rating }) => {
  // Звезда и пустая звезда Unicode
  const fullStar = <FullStar />;
  const emptyStar = <EmptyStar />;

  // Формируем массив звездочек
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? fullStar : emptyStar
  );

  return stars;
};

export default Rating;
