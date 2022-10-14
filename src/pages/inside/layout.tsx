import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Surah } from '../../types/Surah';

import UI_MobileHeader from '../../components/mobile-header/layout';
import UI_Sidebar from '../../components/sidebar/layout';
import { UI_ItemAyah, UI_ListAyah_Pldr } from '../../components/item-ayah/layout';

import '../../fonts/alqalam/style.css';
import {
    InsidePage,
    MainContent,
    BlockHeader,
    BlockTitle,
    BlockDesc,
    EditorContent,
    Source
} from './style';

const cacheSurahArab: Surah[] = [];
const cacheSurahIndonesia: Surah[] = [];

type InitialState = {
    arab: Surah,
    indo: Surah,
};

const initialValue: Surah = {
    englishName: '',
    englishNameTranslation: '',
    name: '',
    number: 0,
    numberOfAyahs: 0,
    revelationType: '',
};

const defaultState: InitialState = {
    arab: initialValue,
    indo: initialValue,
};

export default function UI_InsidePage() {
    const { id }: { id?: string } = useParams();

    const [ surah, setSurah ] = useState<InitialState>( defaultState );
    const [ isLoading, setIsLoading ] = useState<boolean>( true );

    const surahId: number = Math.max( 1, parseInt( id ? id : '1' ) );

    useEffect( () => {
        if ( cacheSurahArab[ surahId ] ) {
            setSurah( {
                arab: cacheSurahArab[ surahId ],
                indo: cacheSurahIndonesia[ surahId ],
            } );

            setIsLoading( false );
        } else {
            setIsLoading( true );

            const _getSurahArab = async () => {
                return axios.get( `https://api.alquran.cloud/v1/surah/${surahId}` );
            };

            const _getSurahIndonesia = async () => {
                return axios.get( `https://api.alquran.cloud/v1/surah/${surahId}/id.indonesian` );
            };

            Promise.all( [ _getSurahArab(), _getSurahIndonesia() ] ).then( ( results ) => {
                if ( results[ 0 ].data.code === 200 && results[ 1 ].data.code === 200 ) {
                    cacheSurahArab[ surahId ] = results[ 0 ].data.data;
                    cacheSurahIndonesia[ surahId ] = results[ 1 ].data.data;

                    setSurah( {
                        arab: results[ 0 ].data.data,
                        indo: results[ 1 ].data.data,
                    } );

                    setIsLoading( false );
                }
            } );
        }
    }, [ id ] );

    const surahIndo = surah.indo.ayahs || [];

    return (
        <InsidePage id="app--page">
            <UI_MobileHeader />

            <UI_Sidebar currentSurah={ surahId } />

            <MainContent>
                <Source>
                    API Source: <a href="https://api.alquran.cloud">https://api.alquran.cloud</a>. Fork me on <a href="https://github.com/fachririyanto/digital-quran">Github</a>.
                </Source>

                <BlockHeader>
                    <BlockTitle className={ isLoading ? 'placeholder' : '' }>{ isLoading ? '-' : surah.arab.number + '. ' + surah.arab.englishName }</BlockTitle>

                    { isLoading ?
                        <BlockDesc className="placeholder">-</BlockDesc> :
                        <BlockDesc>
                            { surah.indo.englishNameTranslation }, { surah.indo.numberOfAyahs } Ayah, { surah.indo.revelationType }
                        </BlockDesc>
                    }
                </BlockHeader>

                { isLoading ? (
                    <EditorContent>
                        <UI_ListAyah_Pldr count={ 10 } />
                    </EditorContent>
                ) : (
                    <EditorContent>
                        { surah.arab.ayahs?.map( ( item, key ) =>
                            <UI_ItemAyah
                                key={ key }
                                number={ item.numberInSurah }
                                englishText={ item.text }
                                IndonesiaText={ surahIndo[ key ].text }
                            />
                        ) }
                    </EditorContent>
                ) }
            </MainContent>
        </InsidePage>
    );
}