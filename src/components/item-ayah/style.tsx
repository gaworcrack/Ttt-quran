import styled from '@emotion/styled';

export const Wrapper = styled.div`
    display: flex;
    position: relative;
    padding: 24px 0;
    border-top: 1px solid rgba(0,0,0,.05);
`;

export const Number = styled.div`
    display: flex;
    margin: 0 0 12px;
    width: 28px;
    min-width: 28px;
    height: 28px;
    font-size: 1.35rem;
    font-weight: 500;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    border-radius: 100%;

    &.placeholder {
        border: 0;
    }
    @media (min-width: 640px) {
        width: 32px;
        min-width: 32px;
        height: 32px;
        font-size: 1.6rem;
        border-width: 2px;
    }
    @media (min-width: 920px) {
        width: 40px;
        min-width: 40px;
        height: 40px;
        border-width: 3px;
    }
`;

export const TextWrap = styled.div`
    flex-grow: 1;
    padding-left: 16px;

    @media (min-width: 640px) {
        padding-left: 24px;
    }
    @media (min-width: 920px) {
        padding-left: 32px;
    }
`;

export const TextEnglish = styled.p`
    margin: 0;
    font-size: 2.2rem;
    line-height: 1.4;

    @media (min-width: 640px) {
        font-size: 2.8rem;
        line-height: 1.4;
    }
    @media (min-width: 768px) {
        font-size: 3.2rem;
        line-height: 1.4;
    }
    @media (min-width: 920px) {
        font-size: 3.6rem;
        line-height: 1.4;
    }
`;

export const TextIndonesia = styled.p`
    margin: 12px 0 0;
    font-size: 1.45rem;

    @media (min-width: 640px) {
        font-size: 1.6rem;
    }
`;