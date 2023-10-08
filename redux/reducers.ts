import { type IHotelInfo } from '../interfaces/apiInterface.ts';

export interface InitialInterface {
  hotels: IHotelInfo[];
  location: string;
  checkIn: string;
  checkOut: string;
  count: string;
  favor: IHotelInfo[];
  user: string;
}

const initial: InitialInterface = {
  hotels: [],
  location: '',
  checkIn: '',
  checkOut: '',
  count: '',
  favor: [],
  user: '',
};

export default function reducer(
  // eslint-disable-next-line default-param-last
  state = initial,
  action: {
    type: any;
    payload: { location: any; checkIn: any; checkOut: any; count: any };
  }
) {
  switch (action.type) {
    case 'LOAD_HOTELS': {
      const { location, checkIn, checkOut, count } = action.payload;

      return {
        ...state,
        location,
        checkIn,
        checkOut,
        count,
      };
    }

    case 'LOAD_HOTELS_SUCCESS': {
      return {
        ...state,
        hotels: action.payload,
      };
    }

    case 'ADD_FAVOR': {
      return {
        ...state,
      };
    }

    case 'ADD_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: [...state.favor, action.payload],
      };
    }

    case 'DEL_FAVOR': {
      return {
        ...state,
      };
    }

    case 'DEL_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: action.payload,
      };
    }

    case 'SORT_FAVOR': {
      return {
        ...state,
      };
    }

    case 'SORT_FAVOR_SUCCESS': {
      return {
        ...state,
        favor: action.payload,
      };
    }

    case 'SET_USER': {
      return {
        ...state,
        user: action.payload,
      };
    }

    case 'CHECK_USER': {
      return {
        ...state,
      };
    }

    case 'CHECK_USER_SUCCESS': {
      return {
        ...state,
        user: action.payload,
      };
    }

    case 'DEL_USER': {
      return {
        ...state,
        user: '',
      };
    }

    default:
      return state;
  }
}
