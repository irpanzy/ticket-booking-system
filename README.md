# Sistem Pemesanan Tiket Pesawat dengan Design by Contract (DbC)

## Deskripsi

Proyek ini adalah implementasi sistem pemesanan tiket pesawat menggunakan **Design by Contract (DbC)** di Node.js. Sistem ini memastikan bahwa pemesanan tiket dilakukan sesuai dengan aturan yang telah ditentukan, dengan memvalidasi data input (precondition) dan memastikan kondisi setelah pemesanan (postcondition).

## Fitur Utama

1. **Validasi Precondition**:
   - Nomor tiket harus terdiri dari 6 digit angka.
   - Nama penumpang tidak boleh kosong dan maksimal 50 karakter.
   - Usia penumpang harus minimal 18 tahun.
   - Kelas penerbangan yang dipilih harus salah satu dari "Ekonomi", "Bisnis", atau "First Class".
2. **Validasi Postcondition**:
   - Setelah pemesanan berhasil, jumlah kursi yang tersedia akan berkurang.
   - Harga total tiket dihitung secara otomatis dan harus lebih besar dari 0.
3. **Fitur Pemesanan**:

   - Memungkinkan untuk memilih lebih dari satu kursi.
   - Harga tiket otomatis dihitung berdasarkan jumlah kursi yang dipilih dan kelas penerbangan yang dipilih.

4. **Daftar Kursi yang Tersedia**:
   - Menampilkan jumlah kursi yang tersedia sebelum dan setelah pemesanan.

## Penjelasan Kode

1. **index.js**:
   File ini adalah file utama yang digunakan untuk menjalankan aplikasi. Di sini, pengguna memasukkan informasi pemesanan tiket, seperti nomor tiket, nama penumpang, usia penumpang, kelas penerbangan, dan jumlah kursi yang dipesan. Setelah input divalidasi, pemesanan akan dilakukan.

2. **ticketBooking.js**:
   File ini berisi logika untuk memproses pemesanan tiket. Setelah validasi berhasil, metode bookTicket() mengurangi jumlah kursi yang tersedia sesuai dengan jumlah yang dipesan dan menghitung total harga tiket berdasarkan harga per kursi dan kelas penerbangan yang dipilih.
   Fungsi-fungsi Utama:

   - displayAvailableSeats(): Menampilkan jumlah kursi yang tersedia.
   - bookTicket(): Memproses pemesanan tiket dan mengurangi jumlah kursi yang tersedia. Menghitung harga total tiket berdasarkan jumlah kursi yang dipesan.

3. **validate.js**:
   File ini berisi fungsi-fungsi validasi untuk memastikan bahwa input yang diberikan oleh pengguna sesuai dengan precondition yang telah ditentukan.
   Fungsi Validasi:

   - validateTicketNumber(): Memastikan nomor tiket harus unik dan terdiri dari 6 digit angka.
   - validatePassengerName(): Memastikan nama penumpang tidak kosong dan maksimal 50 karakter.
   - validatePassengerAge(): Memastikan usia penumpang minimal 18 tahun.
   - validateFlightClass(): Memastikan kelas penerbangan yang dipilih valid (Ekonomi, Bisnis, atau First Class).

## Contoh Implementasi

1. **Succes**:

   - Input

     ```js
     bookTicket(123456, "Irfan Muria", 20, "Bisnis", 3); // Success
     ```

   - Output

     ![image](https://github.com/user-attachments/assets/53c29449-b4b8-4dbe-95eb-29b0b4b02953)

2. **Error Message No Tiket Kurang dari 6**:

   - Input

     ```js
     bookTicket(12345, "Irfan Muria", 20, "Bisnis", 3); // Error Message No Tiket Kurang dari 6
     ```

   - Output

     ![image](https://github.com/user-attachments/assets/314e29b8-4436-47d0-9cfd-5c961515f028)

3. **Error Message Nama Penumpang Kosong**:

   - Input

     ```js
     bookTicket(123456, "", 20, "Bisnis", 3); // Error Message Nama Penumpang Kosong
     ```

   - Output

     ![image](https://github.com/user-attachments/assets/5365bdeb-2e1f-47d5-8fee-3ec48068ebd6)

4. **Error Message Usia Penumpang dibawah 18 Tahun**:

   - Input

     ```js
     bookTicket(123456, "Irfan Muria", 17, "Bisnis", 3); // Error Message Usia Penumpang dibawah 18 Tahun
     ```

   - Output

     ![image](https://github.com/user-attachments/assets/0594f77d-236b-4494-93f6-1bd357e1dcb2)

5. **Error Message Kelas Penerbangan Tidak Valid**:

   - Input

     ```js
     bookTicket(123456, "Irfan Muria", 20, "Premium", 3); // Error Message Kelas Penerbangan Tidak Valid
     ```

   - Output

     ![image](https://github.com/user-attachments/assets/f61e2390-beb6-4018-8d73-70097fa2d82a)
