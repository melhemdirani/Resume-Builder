import React, { useContext} from 'react';
import { EditorContext } from '../../components/EditorContext';
import EditorContainer from '../UserInput/EditorContainer';


export default function ExpandedEditor() {
    const {profSummary, setProfSummary}= useContext(EditorContext)

    return (
        <div>
            <EditorContainer editorState={profSummary} setEditorState={setProfSummary} expand={true} />
        </div>
    )
}
