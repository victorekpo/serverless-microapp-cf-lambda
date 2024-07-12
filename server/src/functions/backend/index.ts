import { v4 } from 'uuid';

export const handler = async (event: any) => {
  const { requestId, runType, rental, rentalFrom, rentalTo } = event;

  console.log(`Reserving rentals request: ${JSON.stringify(event, null, 2)}`, process.env.TABLE_NAME);

  if (runType === 'failCarRentalReservation') {
    throw new Error('Failed to book the car rental');
  }

  const carRentalReservationId = v4();
  console.log(`carReservationId: ${carRentalReservationId}`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'ok',
      carRentalReservationId,
    })
  };
};