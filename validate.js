class validate {
  static validateTicketNumber(ticketNumber) {
    if (!/^\d{6}$/.test(ticketNumber)) {
      throw new Error("Nomor tiket harus unik dan terdiri dari 6 digit angka");
    }
  }

  static validatePassengerName(passengerName) {
    if (!passengerName || passengerName.length > 50) {
      throw new Error(
        "Nama penumpang tidak boleh kosong dan maksimal 50 karakter"
      );
    }
  }

  static validatePassengerAge(passengerAge) {
    if (passengerAge < 18) {
      throw new Error("Usia penumpang minimal 18 tahun");
    }
  }

  static validateFlightClass(flightClass) {
    const validClasses = ["Ekonomi", "Bisnis", "First Class"];
    if (!validClasses.includes(flightClass)) {
      throw new Error("Kelas penerbangan tidak valid");
    }
  }
}

module.exports = validate;
