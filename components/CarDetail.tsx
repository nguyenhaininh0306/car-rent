import { CarProps } from '@/types'
import React from 'react'

interface CarDetailProps {
  isOpen: boolean
  onClose: () => void
  car: CarProps
}

const CarDetail = ({ isOpen, onClose, car }: CarDetailProps) => {
  return <div>CarDetail</div>
}

export default CarDetail
