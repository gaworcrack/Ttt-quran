import styled from '@emotion/styled';

export const InsidePage = styled.article`
    position: relative;
`;

export const MainContent = styled.div`
    padding: 32px 16px;
    @media (min-width: 480px) {
        padding: 40px 40px;
    }
    @media (min-width: 920px) {
        padding: 40px 64px 40px 384px;
    }
`;

export const Source = styled.div`
    margin-bottom: 32px;
    padding: 12px;
    background-color: #fff9d5;
    border-radius: 6px;

    a {
        font-weight: 500;
        color: #333;
        text-decoration: underline;
    }
`;

export const BlockHeader = styled.header`
    margin: 0 0 32px;
`;

export const BlockTitle = styled.h1`
    margin: 0;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.2;
    @media (min-width: 640px) {
        font-size: 2.8rem;
    }
    @media (min-width: 920px) {
        font-size: 3.2rem;
    }
`;

export const BlockDesc = styled.p`
    margin: 8px 0 0;
`;

export const EditorContent = styled.div``;