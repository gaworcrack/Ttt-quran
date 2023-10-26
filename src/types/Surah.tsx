import type { TypeAyah } from './Ayah'

export type TypeSurah = {
    nomor: number,
    nama: string,
    namaLatin: string,
    jumlahAyat: number,
    tempatTurun: string,
    arti: string,
    deskripsi: string,
    audioFull: [string],
    ayat?: TypeAyah[],
}