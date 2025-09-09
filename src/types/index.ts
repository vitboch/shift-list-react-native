export interface Shift {
  logo: string;
  address: string;
  companyName: string;
  dateStartByCity: string;
  timeStartByCity: string;
  timeEndByCity: string;
  currentWorkers: number;
  planWorkers: number;
  workTypes: string;
  priceWorker: number;
  customerFeedbacksCount: number;
  customerRating: number;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ApiResponse {
  shifts: Shift[];
}

export interface LocationError {
  code: number;
  message: string;
}
