# Vriends - A Web with Virtual World.

Dibuat menggunakan library React.js, dan menggunakan Framework Next.js, serta menggunakan bahasa pemograman TypeScript.

## A. Sebelum Instalasi

- Pastikan kamu memiliki Node.js dengan minimal versi 16.x

## B. Cara Instalasi

- Clone project ini, lalu masuk ke directory utama nya menggunakan terminal.
- Lalu jalankan perintah:

  ```
  npm run install
  ```

  atau

  ```
  yarn
  ```

  Command ini digunakan untuk menginstall segala packages yang dibutuhkan.

- Setelah proses instalasi package selesai, selanjutnya jalankan perintah ini untuk menginstall tambahan deklarasi types, karena menggunakan TypeScript.
  ```
  npm run types
  ```
  atau
  ```
  yarn types
  ```

## C. Cara Menjalankan Web

Untuk menjalankan web nya, gunakan perintah: <br />

```
npm run dev
```

atau

```
yarn dev
```

Web akan berjalan di laman: `http://localhost:3000`. Jika ada program yang sudah menggunakan port `3000`, maka webnya akan otomatis mengganti port nya menjadi `3001`. Begitu seterusnya.

## D. Halaman (Page) yang tersedia

Saat menjalankan web nya, otomatis Framework Next.js akan memberikan URL dimana webnya sedang berjalan. Sesuaikan saja URL nya.

- Halaman Utama: http://localhost:3000
- Halaman Read More: http://localhost:3000/more
- Halaman Virtual World: http://localhost:3000/virtual_world
