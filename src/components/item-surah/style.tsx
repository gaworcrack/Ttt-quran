import styled from '@emotion/styled';

export const ItemSurah = styled.div`
    border-top: 1px solid rgba(0,0,0,.05);

    a {
        display: block;
        padding: 12px 0;
        color: #333;
        text-decoration: none;
        &:hover {
            background-color: #eee;
        }
    }
    &.-current-item {
        a {
            background-color: #ddd;
        }
    }
    &.placeholder {
        &::before {
            top: 12px;
            bottom: 12px;
        }
        a {
            &:hover {
                background-color: transparent;
            }
        }
    }
`;

export const ListSurah = styled.div`
    > *:first-child {
        border-top: 0;
    }
`;