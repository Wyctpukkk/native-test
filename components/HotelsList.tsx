import { View, Text, FlatList } from 'react-native';
import { useFontLoader } from '../hooks/useFontLoader.ts';
import { HotelsCart } from './HotelsCart.tsx';

export const HotelsList = () => {
  const fontsLoaded: boolean = useFontLoader();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className='mt-[24px]'>
      <Text className='text-[18px] font-[700] font-["Gotham-bold"] mb-[8px]'>
        Подходящие бронирования
      </Text>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <HotelsCart hotel={item} />}
        keyExtractor={(item) => item.hotelId}
      />
    </View>
  );
};

const DATA = [
  {
    pricePercentile: {
      '50': 11000.0,
      '99': 11000.0,
      '3': 11000.0,
      '10': 11000.0,
      '75': 11000.0,
      '35': 11000.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 10628,
    priceFrom: 11000.0,
    hotelName: 'Corinthia Hotel St Petersburg',
    stars: 5,
    locationId: 12196,
    priceAvg: 11000.0,
  },
  {
    pricePercentile: {
      '50': 8000.0,
      '99': 8000.0,
      '3': 8000.0,
      '10': 8000.0,
      '75': 8000.0,
      '35': 8000.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 14066,
    priceFrom: 8000.0,
    hotelName: 'Solo Sokos Hotel Palace Bridge',
    stars: 5,
    locationId: 12196,
    priceAvg: 8000.0,
  },
  {
    pricePercentile: {
      '50': 10500.0,
      '99': 10500.0,
      '3': 10500.0,
      '10': 10500.0,
      '75': 10500.0,
      '35': 10500.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 333452,
    priceFrom: 10500.0,
    hotelName: 'Petro Palace Hotel',
    stars: 5,
    locationId: 12196,
    priceAvg: 10500.0,
  },
  {
    pricePercentile: {
      '50': 6000.0,
      '99': 6000.0,
      '3': 6000.0,
      '10': 6000.0,
      '75': 6000.0,
      '35': 6000.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 277083,
    priceFrom: 6000.0,
    hotelName: 'Saint-Petersburg Hotel',
    stars: 4,
    locationId: 12196,
    priceAvg: 6000.0,
  },
  {
    pricePercentile: {
      '50': 4675.0,
      '99': 4675.0,
      '3': 4675.0,
      '10': 4675.0,
      '75': 4675.0,
      '35': 4675.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 23980209,
    priceFrom: 4675.0,
    hotelName: 'AKYAN St-Petersburg',
    stars: 4,
    locationId: 12196,
    priceAvg: 4675.0,
  },
  {
    pricePercentile: {
      '50': 9100.0,
      '99': 9100.0,
      '3': 9100.0,
      '10': 9100.0,
      '75': 9100.0,
      '35': 9100.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 31193226,
    priceFrom: 9100.0,
    hotelName: 'Petr Hotel',
    stars: 4,
    locationId: 12196,
    priceAvg: 9100.0,
  },
  {
    pricePercentile: {
      '50': 3000.0,
      '99': 3000.0,
      '3': 3000.0,
      '10': 3000.0,
      '75': 3000.0,
      '35': 3000.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 333395,
    priceFrom: 3000.0,
    hotelName: 'Agni Club Hotel',
    stars: 3,
    locationId: 12196,
    priceAvg: 3000.0,
  },
  {
    pricePercentile: {
      '50': 4500.0,
      '99': 4500.0,
      '3': 4500.0,
      '10': 4500.0,
      '75': 4500.0,
      '35': 4500.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 1769457918,
    priceFrom: 4500.0,
    hotelName: 'Station Hotel S13',
    stars: 3,
    locationId: 12196,
    priceAvg: 4500.0,
  },
  {
    pricePercentile: {
      '50': 2250.0,
      '99': 2250.0,
      '3': 2250.0,
      '10': 2250.0,
      '75': 2250.0,
      '35': 2250.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 148682318,
    priceFrom: 2250.0,
    hotelName: 'Friends by Gostiny Dvor',
    stars: 2,
    locationId: 12196,
    priceAvg: 2250.0,
  },
  {
    pricePercentile: {
      '50': 5000.0,
      '99': 5000.0,
      '3': 5000.0,
      '10': 5000.0,
      '75': 5000.0,
      '35': 5000.0,
    },
    location: {
      state: null,
      geo: {
        lat: 59.95,
        lon: 30.316667,
      },
      country: 'Russia',
      name: 'St. Petersburg',
    },
    hotelId: 333480,
    priceFrom: 5000.0,
    hotelName: 'Blues',
    stars: 2,
    locationId: 12196,
    priceAvg: 5000.0,
  },
];
