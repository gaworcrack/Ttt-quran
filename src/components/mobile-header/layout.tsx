import { useAppDispatch } from '../../store/hooks';
import { openSidebar } from '../../store/reducers/layout';

import { Header, HeaderFixed } from './style';

export default function UI_MobileHeader() {
    const dispatch = useAppDispatch();

    return (
        <Header>
            <HeaderFixed>
                <button type="button" onClick={ () => dispatch( openSidebar() ) }>
                    <i className="material-icons">menu</i>
                    Menu
                </button>
            </HeaderFixed>
        </Header>
    );
}