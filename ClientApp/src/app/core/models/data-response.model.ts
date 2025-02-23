export class DataResponse<T> {
  data: T[];
  totalCount: number;
  isLoading: boolean;

  constructor(data: T[]) {
    this.data = data;
    this.totalCount = data.length;
    this.isLoading = false;
  }
}

export class SingleDataResponse<T> {
  data: T;
  isLoading: boolean;

  constructor(data: T) {
    this.data = data;
    this.isLoading = false;
  }
}
