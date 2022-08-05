import React, {useState} from 'react';
import WorkSection from './WorkSection';
import { SortableElement } from 'react-sortable-hoc';
import { HashLink } from 'react-router-hash-link';

const styles = {
    container:{
        listStyleType: "none",
    }
}

const SortableHashlink = ({value, index}) => {

  return(
      <li 
        style={styles.container}
        >
            <div>
            <HashLink to={`#${value.to}`}>{value.name}</HashLink>
            </div>
      </li>
  )
}

export default SortableElement(SortableHashlink)
