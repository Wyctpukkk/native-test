import React from 'react';
import { View, Image } from 'react-native';
import yellowStar from '../assets/yellow-star.png';
import whiteStar from '../assets/star-white.png';

interface StarRatingProps {
  rating: number;
}

export const StarRatingForHotelPreview = ({ rating }: StarRatingProps) => {
  const renderStars = (num: number) => {
    const stars = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i < num ? yellowStar : whiteStar}
          className='h-[16px] w-[17px] mr-[14px]'
        />
      );
    }
    return stars;
  };

  return <View className='flex flex-row'>{renderStars(rating)}</View>;
};
