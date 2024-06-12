import { CarProps } from '@/types'

export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': 'f13ed3efbfmshed77ceba09c678ep180190jsn1170f4598930',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera'

  // Call api
  const response = await fetch(url, { headers: headers })

  const result = await response.json()

  return result
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL('https://cdn.imagin.studio/getimage')

  const { make, year, model } = car

  url.searchParams.append('customer', 'kidooooo')
  url.searchParams.append('make', make)
  url.searchParams.append('model', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)

  return `${url}`
}
