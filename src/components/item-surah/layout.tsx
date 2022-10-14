import { Link } from 'react-router-dom';

import { Surah } from '../../types/Surah';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { closeSidebar } from '../../store/reducers/layout';

import {
    ItemSurah,
    ListSurah
} from './style';

interface UI_ItemSurah_Props extends Surah {
    currentSurah?: number,
}

interface UI_ListSurah_Props {
    find?: string,
    items: Surah[],
    currentSurah?: number,
}

interface UI_ListSurah_Pldr_Props {
    count: number,
}

export function UI_ItemSurah( props: UI_ItemSurah_Props ) {
    const { number, englishName, currentSurah } = props;

    const isSidebarOpen = useAppSelector( ( state ) => state.layout.isSidebarOpen );
    const dispatch = useAppDispatch();

    return currentSurah !== undefined && currentSurah > 0 && currentSurah === number ? (
        <ItemSurah className="-current-item">
            <Link onClick={ () => dispatch( closeSidebar() ) } to={ "/surah/" + number }>{ number }. { englishName }</Link>
        </ItemSurah>
    ) : (
        <ItemSurah>
            <Link onClick={ () => dispatch( closeSidebar() ) } to={ "/surah/" + number }>{ number }. { englishName }</Link>
        </ItemSurah>
    );
}

export function UI_ItemSurah_Pldr() {
    return (
        <ItemSurah className="placeholder">
            <a>{ '-' }</a>
        </ItemSurah>
    );
}

export function UI_ListSurah( props: UI_ListSurah_Props ) {
    const { items, find } = props;

    return (
        <ListSurah>
            { items.filter( ( item: Surah ) => {
                return find === '' || find === undefined ? item : item.englishName.toLowerCase().includes( find.toLowerCase() );
            } ).map( ( item: Surah, key ) => (
                <UI_ItemSurah key={ key } currentSurah={ props.currentSurah } { ...item } />
            ) ) }
        </ListSurah>
    );
}

export function UI_ListSurah_Pldr( props: UI_ListSurah_Pldr_Props ) {
    let Placeholders = [];

    const { count } = props;

    for ( var i = 1; i <= count; i++ ) {
        Placeholders.push( <UI_ItemSurah_Pldr key={ i } /> );
    }

    return <>{ Placeholders }</>;
}