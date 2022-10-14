import { Ayah } from './Ayah';

export interface Surah {
    englishName: string,
    englishNameTranslation: string,
    name: string,
    number: number,
    numberOfAyahs: number,
    revelationType: string,
    ayahs?: [ Ayah ]
}