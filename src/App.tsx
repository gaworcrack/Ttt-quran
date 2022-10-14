import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/react';

import UI_InsidePage from './pages/inside/layout';

export default function App() {

    useEffect( () => {
        document.title = 'Digital Quran';
    }, [] );

    return (
        <>
            <Global styles={ css`
                * {
                    -moz-box-sizing: border-box;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                }
                html {
                    font-size: 10px;
                }
                body{
                    margin: 0;
                    padding: 0;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.6rem;
                    color: #333;
                    line-height: 1.55;
                }
                .placeholder {
                    position: relative;
                    overflow: hidden;
                    &::before {
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 2;
                        content: '';
                        background-color: #ddd;
                        border-radius: 6px;
                    }
                }
            ` } />

            <Routes>
                <Route path="/" element={ <UI_InsidePage /> } />
                <Route path="/surah/:id" element={ <UI_InsidePage /> } />
            </Routes>
        </>
    );
}