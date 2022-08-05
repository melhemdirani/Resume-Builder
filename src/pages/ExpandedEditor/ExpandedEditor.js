import React, { useContext} from 'react';
import { EditorContext } from '../../components/EditorContext';
import TipEditor from '../UserInput/TipEditor';

export default function ExpandedEditor() {
    const {summary, setSummaryHtml}= useContext(EditorContext)
    return (
        <div>
            <TipEditor summary={summary} setSummaryHtml={setSummaryHtml} expand/>
        </div>
    )
}
