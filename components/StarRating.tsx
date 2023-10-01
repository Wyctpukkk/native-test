import React from 'react';
import { View, Image } from 'react-native';
import yellowStar from '../assets/yellow-star.png';
import greyStar from '../assets/grey-star.png';

interface StarRatingProps {
  rating: number;
}

const StarRating = ({ rating }: StarRatingProps) => {
  const renderStars = (num: number) => {
    const stars = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i < num ? yellowStar : greyStar}
          className='h-[11px] w-[11.5px] mr-[8px]'
        />
      );
    }
    return stars;
  };

  return <View className='flex flex-row'>{renderStars(rating)}</View>;
};

export default StarRating;
