import { useState, useEffect } from 'react';
import axios from 'axios';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeSidebar } from '../../store/reducers/layout';

import {
    Wrapper,
    AppInfo,
    AppName,
    AppClose,
    FormSearch,
    ListSurah,
    InputText
} from './style';

import { Surah } from '../../types/Surah';

import { UI_ListSurah, UI_ListSurah_Pldr } from '../item-surah/layout';

import Logo from '../../assets/logo.svg';

interface UI_Sidebar_Props {
    currentSurah?: number,
}

export default function UI_Sidebar( props: UI_Sidebar_Props ) {
    const [ find, setFind ] = useState<string>( '' );
    const [ items, setItems ] = useState<Surah[]>( [] );
    const [ isLoading, setIsLoading ] = useState<boolean>( true );

    const cacheItems = localStorage.getItem( 'react_quran_items' );

    const isSidebarOpen = useAppSelector( ( state ) => state.layout.isSidebarOpen );
    const dispatch = useAppDispatch();

    useEffect( () => {
        let parsedItems = null;

        if ( typeof cacheItems === 'string' ) {
            parsedItems = JSON.parse( cacheItems );
        }

        if ( parsedItems ) {
            // load from local storage
            setItems( parsedItems );

            setIsLoading( false );
        } else {
            // load from API
            axios.get( 'http://api.alquran.cloud/v1/surah' ).then( ( res ) => {
                if ( res.data.code === 200 ) {
                    localStorage.setItem( 'react_quran_items', JSON.stringify( res.data.data ) );

                    setItems( res.data.data );
                } else {
                    setItems( [] );
                }

                setIsLoading( false );
            } );
        }
    }, [] );

    return (
        <Wrapper id="app--sidebar" className={ isSidebarOpen ? '-is-open' : '' }>
            <AppInfo>
                <AppName>
                    <img loading="lazy" src={ Logo } alt="Digital Quran" />
                    <span className={ isLoading ? 'placeholder' : '' }>Digital Quran</span>
                </AppName>
                <AppClose>
                    <button type="button" onClick={ () => dispatch( closeSidebar() ) }>
                        <i className="material-icons">close</i>
                    </button>
                </AppClose>
            </AppInfo>

            <FormSearch>
                <div className={ isLoading ? 'placeholder' : '' }>
                    <input className={ InputText } placeholder="Find surah..." onChange={ e => setFind( e.target.value ) } />
                </div>
            </FormSearch>

            <ListSurah>
                { isLoading ? <UI_ListSurah_Pldr count={ 20 } /> : <UI_ListSurah items={ items } find={ find } currentSurah={ props.currentSurah } /> }
            </ListSurah>
        </Wrapper>
    );
}