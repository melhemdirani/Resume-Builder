import React, { useState } from 'react';

import eye from '../../assets/images/Eye.svg';
import Delete from '../../assets/images/delete.svg';
import edit2 from '../../assets/images/edit2.svg';
import check from '../../assets/images/check.svg';

const EditableSection = ({title, onDelete, PeronalInfo}) =>{

    const [name, setName] = useState(title)
    const [edit, setEdit] = useState(false)
    return edit
    ? (
        <div className='TitleContainer flex editableSection'>
            <input type="text" className="" value={name} onChange={(e) => setName(e.target.value)}/>
            <img alt='' src={check} onClick={() => setEdit(false)}/>
        </div>
    )
    : (
        <div className='TitleContainer flex space'>
            <h2 className='flex'>
                {name}
                <img alt='' src={edit2} onClick={() => setEdit(true)}/>
            </h2>
           { !PeronalInfo &&
                <div>
                    <img alt="" src={eye} />
                    <img alt="" src={Delete} onClick={() => onDelete()} className="DeleteButton" />
                </div>
            }
        </div>
    )
}
export default EditableSection