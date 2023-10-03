import React from 'react';
import { View, Image } from 'react-native';
import yellowStar from '../../assets/yellow-star.png';
import whiteStar from '../../assets/star-white.png';
import greyStar from '../../assets/grey-star.png';

interface StarRatingProps {
  rating: number;
  white?: boolean;
}

export const StarRating = ({ rating, white }: StarRatingProps) => {
  const starImage = white ? whiteStar : greyStar;
  const starClassName = white
    ? 'min-h-[16px] min-w-[17px] mr-[14px]'
    : 'h-[11px] w-[11.5px] mr-[8px]';

  const renderStars = (num: number) => {
    const stars = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i < num ? yellowStar : starImage}
          className={starClassName}
        />
      );
    }
    return stars;
  };

  return (
    <View className='flex flex-row items-center'>{renderStars(rating)}</View>
  );
};
