import { v4 } from 'uuid';

interface ReserveRentalEvent {
  rental: string;
  rentalFrom: string;
  rentalTo: string;
  requestId: string;
  runType: string;
}

export const handler = async (event: ReserveRentalEvent) => {
  const { requestId, runType, rental, rentalFrom, rentalTo } = event;

  console.log(`Reserving rentals request: ${JSON.stringify(event, null, 2)}`, process.env.TABLE_NAME);

  if (runType === 'failCarRentalReservation') {
    throw new Error('Failed to book the car rental');
  }

  const carRentalReservationId = v4();
  console.log(`carReservationId: ${carRentalReservationId}`);

  return {
    status: 'ok',
    carRentalReservationId
  };
};