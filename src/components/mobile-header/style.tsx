import styled from '@emotion/styled';

export const Header = styled.header`
    display: block;
    height: 56px;

    @media (min-width: 920px) {
        display: none;
    }
`;

export const HeaderFixed = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    width: 100%;
    height: 56px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.05);

    button {
        display: inline-flex;
        padding: 8px 12px;
        font-weight: 600;
        color: #333;
        text-transform: uppercase;
        align-items: center;
        border: 0;
        outline: 0;
        background-color: transparent;
        i {
            margin-right: 6px;
        }
    }
`;