class TicketBooking {
  constructor() {
    this.availableSeats = 100;
    this.ticketPrice = {
      Ekonomi: 500000,
      Bisnis: 1500000,
      FirstClass: 3000000,
    };
    this.totalPrice = 0;
  }

  displayAvailableSeats() {
    console.log(`Jumlah kursi yang tersedia: ${this.availableSeats}`);
  }

  bookTicket(
    ticketNumber,
    passengerName,
    passengerAge,
    flightClass,
    numberOfSeats
  ) {
    if (numberOfSeats <= 0) {
      throw new Error("Jumlah kursi yang dipesan harus lebih dari 0");
    }

    if (this.availableSeats < numberOfSeats) {
      throw new Error("Jumlah kursi yang tersedia tidak cukup");
    }

    this.availableSeats -= numberOfSeats;

    this.totalPrice = this.ticketPrice[flightClass] * numberOfSeats;

    if (this.totalPrice <= 0) {
      throw new Error("Harga tiket tidak valid");
    }

    console.log(`Pemesanan tiket berhasil: ${ticketNumber}`);
    console.log(`Nama penumpang: ${passengerName}`);
    console.log(`Usia penumpang: ${passengerAge}`);
    console.log(`Kelas Penerbangan: ${flightClass}`);
    console.log(`Jumlah kursi yang dipesan: ${numberOfSeats}`);
    console.log(`Harga tiket per kursi: Rp ${this.ticketPrice[flightClass]}`);
    console.log(`Total harga tiket: Rp ${this.totalPrice}`);
    console.log(`Kursi tersisa: ${this.availableSeats}`);
  }
}

module.exports = TicketBooking;
