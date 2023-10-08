type PricePercentile = Record<string, number>;

interface IGeo {
  lat: number;
  lon: number;
}

interface ILocation {
  state: string | null;
  geo: IGeo;
  country: string;
  name: string;
}

export interface IHotelInfo {
  pricePercentile: PricePercentile;
  location: ILocation;
  hotelId: number;
  priceFrom: number;
  hotelName: string;
  stars: number;
  locationId: number;
  priceAvg: number;
}
