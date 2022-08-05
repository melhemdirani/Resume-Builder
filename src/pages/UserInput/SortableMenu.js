import React, {useState} from 'react';
import WorkSection from './WorkSection';
import { SortableContainer } from 'react-sortable-hoc';
import { HashLink } from 'react-router-hash-link';
import SortableHashlink from './SortableHashlink';

 
const SortableMenu = (props) => {
    return (
        <ul  style={{listStyleImage: "none !important", paddingLeft: 0}}>
        {props.items.map((value, index) => (
            <SortableHashlink  
                key={`item-${index}`} 
                index={index} 
                value={value} 
            />
        ))}
        </ul>
    );
}
 



export default SortableContainer(SortableMenu);


