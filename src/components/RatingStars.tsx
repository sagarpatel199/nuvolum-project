import { Flex } from "@chakra-ui/react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Rating {
  rate: number;
  count: number;
}

const RatingStars = ({ rating }: { rating: Rating }) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating.rate);
    const hasHalfStar = rating.rate % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} color="gold" />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} color="lightgray" />);
    }

    return stars;
  };

  return <Flex>{renderStars()}</Flex>;
};

export default RatingStars;
