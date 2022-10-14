import styled from '@emotion/styled';
import { css } from '@emotion/css';

export const Wrapper = styled.aside`
    display: flex;
    flex-flow: column;
    position: fixed;
    top: 0;
    left: -325px;
    z-index: 10;
    width: 320px;
    height: 100%;
    background-color: #f7f7f7;
    transition: left .2s;

    > * {
        width: 100%;
    }
    @media (max-width: 920px) {
        box-shadow: 0 0 6px rgba(0,0,0,.2);
    }
    @media (min-width: 920px) {
        left: 0;
    }
    &.-is-open {
        left: 0;
    }
`;

export const AppInfo = styled.header`
    position: relative;
    padding: 24px;
`;

export const AppName = styled.h1`
    display: flex;
    margin: 0;
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.45;
    text-transform: uppercase;
    align-items: center;

    img {
        display: inline-block;
        margin-top: -4px;
        margin-right: 16px;
    }
`;

export const AppClose = styled.span`
    display: block;
    position: absolute;
    top: 4px;
    right: 12px;

    button {
        display: inline-flex;
        padding: 8px 0;
        align-items: center;
        border: 0;
        outline: 0;
        background-color: transparent;

        @media (min-width: 920px) {
            display: none;
        }
    }
`;

export const FormSearch = styled.div`
    padding: 0 24px 24px;
`;

export const InputText = css`
    display: block;
    padding: 0 12px;
    width: 100%;
    height: 40px;
    font-size: 1.5rem;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.1);
    outline: 0;
    border-radius: 6px;

    &:focus {
        border-color: rgba(0,0,0,.3);
    }
`;

export const ListSurah = styled.div`
    padding: 24px;
    overflow: auto;
    border-top: 1px solid rgba(0,0,0,.05);
`;