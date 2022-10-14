import {
    Wrapper,
    Number,
    TextWrap,
    TextEnglish,
    TextIndonesia
} from './style';

interface UI_ItemAyah_Props {
    number: number,
    englishText: string,
    IndonesiaText: string,
}

interface UI_ListAyah_Pldr_Props {
    count: number,
}

export function UI_ItemAyah( props: UI_ItemAyah_Props ) {
    const { number, englishText, IndonesiaText } = props;

    return (
        <Wrapper>
            <Number>{ number }</Number>
            <TextWrap>
                <TextEnglish>{ englishText }</TextEnglish>
                <TextIndonesia>{ IndonesiaText }</TextIndonesia>
            </TextWrap>
        </Wrapper>
    );
}

export function UI_ItemAyah_Pldr() {
    return (
        <Wrapper>
            <Number className="placeholder">-</Number>
            <TextWrap>
                <TextEnglish className="placeholder">-</TextEnglish>
                <TextIndonesia className="placeholder">-</TextIndonesia>
            </TextWrap>
        </Wrapper>
    );
}

export function UI_ListAyah_Pldr( props: UI_ListAyah_Pldr_Props ) {
    let Placeholders = [];

    const { count } = props;

    for ( var i = 1; i <= count; i++ ) {
        Placeholders.push( <UI_ItemAyah_Pldr key={ i } /> );
    }

    return <>{ Placeholders }</>;
}