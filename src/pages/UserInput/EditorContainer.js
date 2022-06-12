import React, { useState, useRef } from 'react'

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
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from '@draft-js-plugins/buttons';

const EditorContainer = ({editorState, setEditorState}) => {
  const textAlignmentPlugin = createTextAlignmentPlugin();

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

  return (
    <div
      className="editor"
      onClick={() => editorRef.current && editorRef.current.focus()}
    >
      <Toolbar>
        {
        (externalProps) => (
          <div className='flex toolbar'>
            <BoldButton {...externalProps} />
            <ItalicButton {...externalProps} />
            <UnderlineButton {...externalProps} />
            <CodeButton {...externalProps} />
            <Separator {...externalProps} />
            <UnorderedListButton {...externalProps} />
            <OrderedListButton {...externalProps} />
            <BlockquoteButton {...externalProps} />
            <CodeBlockButton {...externalProps} />
            <textAlignmentPlugin.TextAlignment {...externalProps} />
          </div>
        )}
      </Toolbar>
      <Editor
        editorState={editorState}
        onChange={(newEditorState) => setEditorState(newEditorState)}
        plugins={plugins}
        ref={(editor) => (editorRef.current = editor)}
      />
    </div>
  );
};

export default  EditorContainer

