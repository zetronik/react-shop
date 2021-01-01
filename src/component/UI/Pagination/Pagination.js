import React from 'react';
import {createUltimatePagination, ITEM_TYPES} from 'react-ultimate-pagination';

const WrapperComponent = ({children}) => (
    <ul className="pagination">{children}</ul>
);

const withPreventDefault = (fn) => (event) => {
    event.preventDefault();
    fn();
}

const Page = ({value, isActive, onClick}) => {
    return (
        <li className={isActive ? 'active' : null} onClick={withPreventDefault(onClick)}>
            {value}
        </li>
    )
}

const Ellipsis = ({onClick}) => (
    <li onClick={withPreventDefault(onClick)}>
        ...
    </li>
);

const FirstPageLink = ({onClick}) => (
    <li onClick={withPreventDefault(onClick)}>
        &laquo;
    </li>
);

const PreviousPageLink = ({onClick}) => (
    <li onClick={withPreventDefault(onClick)}>
        &lsaquo;
    </li>
);

const NextPageLink = ({onClick}) => (
    <li onClick={withPreventDefault(onClick)}>
        &rsaquo;
    </li>
);

const LastPageLink = ({onClick}) => (
    <li onClick={withPreventDefault(onClick)}>
        &raquo;
    </li>
);

const itemTypeToComponent = {
    [ITEM_TYPES.PAGE]: Page,
    [ITEM_TYPES.ELLIPSIS]: Ellipsis,
    [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
    [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
    [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
    [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink
};

const Pagination = createUltimatePagination({itemTypeToComponent, WrapperComponent});

export default Pagination;