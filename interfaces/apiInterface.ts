type PricePercentile = Record<string, number>;

interface Geo {
  lat: number;
  lon: number;
}

interface Location {
  state: string | null;
  geo: Geo;
  country: string;
  name: string;
}

export interface HotelInfo {
  pricePercentile: PricePercentile;
  location: Location;
  hotelId: number;
  priceFrom: number;
  hotelName: string;
  stars: number;
  locationId: number;
  priceAvg: number;
}
