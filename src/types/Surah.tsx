import type { TypeAyah } from './Ayah';

export type TypeSurah = {
    englishName: string,
    englishNameTranslation: string,
    name: string,
    number: number,
    numberOfAyahs: number,
    revelationType: string,
    ayahs?: [TypeAyah]
}