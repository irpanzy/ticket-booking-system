const TicketBooking = require("./ticketBooking");
const Validator = require("./validate");

const ticketBooking = new TicketBooking();

const bookTicket = (
  ticketNumber,
  passengerName,
  passengerAge,
  flightClass,
  numberOfSeats
) => {
  try {
    Validator.validateTicketNumber(ticketNumber);
    Validator.validatePassengerName(passengerName);
    Validator.validatePassengerAge(passengerAge);
    Validator.validateFlightClass(flightClass);

    ticketBooking.bookTicket(
      ticketNumber,
      passengerName,
      passengerAge,
      flightClass,
      numberOfSeats
    );

    console.log("Pemesanan tiket berhasil!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

ticketBooking.displayAvailableSeats();

bookTicket(123456, "Irfan Muria", 20, "Bisnis", 3); // Success
// bookTicket(12345, "Irfan Muria", 20, "Bisnis", 3); // Error Message No Tiket Kurang dari 6
// bookTicket(123456, "", 20, "Bisnis", 3); // Error Message Nama Penumpang Kosong
// bookTicket(123456, "Irfan Muria", 17, "Bisnis", 3); // Error Message Usia Penumpang dibawah 18 Tahun
// bookTicket(123456, "Irfan Muria", 20, "Premium", 3); // Error Message Kelas Penerbangan Tidak Valid
