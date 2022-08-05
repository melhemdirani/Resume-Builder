import React, { useState, useRef } from 'react';

import './UserInput.styles.scss'
import { useNavigate } from "react-router-dom";


import { EditorState, RichUtils, convertToRaw } from 'draft-js'
import Editor, { createEditorStateWithText } from '@draft-js-plugins/editor';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createStaticToolbarPlugin, {
  Separator,
} from '@draft-js-plugins/static-toolbar';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  AlignTextRightButton,
  AlignTextCenterButton,
  AlignTextLeftButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';

import Expand from '../../assets/images/expand.svg'
import escape from '../../assets/images/escape.svg'
import { HashLink } from 'react-router-hash-link';

const EditorContainer = ({editorState, setEditorState, expand}) => {
  const textAlignmentPlugin = createTextAlignmentPlugin();
  const [textAlign, setTextAlign] = useState('left')

  const [{ plugins, Toolbar }] = useState(() => {
    const toolbarPlugin = createStaticToolbarPlugin();
    const { Toolbar } = toolbarPlugin;
    const plugins = [toolbarPlugin, textAlignmentPlugin];

    return {
      plugins,
      Toolbar
    };
  });

  const editorRef = useRef(null);
  const navigate = useNavigate()

  const onExcapeClick = () => {
    navigate(-1)
  }




  const onChange  = (newEditorState) => {
    setEditorState(newEditorState)
 }
 
  return (
    <div
      className="editor"
      style={expand ? {width: "100vw", height: "100vh", marginTop: "-1px"} : {width: "568px", height: "171px"}}
      onClick={() => editorRef.current && editorRef.current.focus()}
    >
      <Toolbar>
        {
        (externalProps) => (
          <div className='flex toolbar' style={expand && {paddingLeft: "430px", paddingTop: "43px"}}>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            <Separator {...externalProps} />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
            <CodeBlockButton {...externalProps} />
            <div onMouseDown={() => setTextAlign("left")}>
              <AlignTextLeftButton {...externalProps} />
            </div>
            <div onMouseDown={() => setTextAlign("center")}>
              <AlignTextCenterButton {...externalProps} />
            </div>
            <div onMouseDown={() => setTextAlign("right")}>
              <AlignTextRightButton {...externalProps} />
            </div>
            {
              expand ? 
              <a>
                <img alt="" src={escape} onClick={() => onExcapeClick()} />
              </a>
              :
              <HashLink to="/ExpandedEditor">
                <img alt="" src={Expand} />
              </HashLink>
            }
          </div>
        )}
      </Toolbar>
      <div style={{padding: "5px", textAlign: textAlign}}>
        <Editor
          editorState={editorState}
          onChange={(newEditorState) => onChange(newEditorState)}
          plugins={plugins}
          ref={(editor) => (editorRef.current = editor)}
        />
      </div>
    
    </div>
  );
};

export default  EditorContainer

