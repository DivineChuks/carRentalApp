interface CarsProps {
  make: string,
  image?: string,
  model: string,
  desc: string,
  year: number,
  price: number,
  kilometers: number,
  area: string
  regionalSpecs: string
}


export interface AllCarsModel {
  id: string;
  city: string;
  cars: CarsProps[];
}

export interface FilterNameProps {
  filterName: string;
}

export interface initialStateProps {
  carsList: AllCarsModel[];
  filteredCars: CarsProps[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
