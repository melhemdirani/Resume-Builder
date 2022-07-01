import React, { useEffect, useCallback } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextDirection from 'tiptap-text-direction-extension';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";

import alignCenter from '../../assets/images/aligncenter.svg'
import alignleft from '../../assets/images/alignleft.svg'
import alignright from '../../assets/images/alignright.svg'
import bold from '../../assets/images/bold.svg'
import italic from '../../assets/images/italic.svg'
import justify from '../../assets/images/justify.svg'
import lefttext from '../../assets/images/lefttext.svg'
import link from '../../assets/images/link.svg'
import orderedlist from '../../assets/images/orderedlist.svg'
import righttext from '../../assets/images/righttext.svg'
import strike from '../../assets/images/strike.svg'
import underline from '../../assets/images/underline.svg'
import unorderedlist from '../../assets/images/unorderedlist.svg'
import Expand from '../../assets/images/expand.svg'
import escape from '../../assets/images/escape.svg'

const MenuBar = ({ editor, expand, onExcapeClick }) => {

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) {
      return
    }

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run()

      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url })
      .run()
  }, [editor])

  if (!editor) {
    return null
  }

  if (!editor) {
    return null
  }

  return (
    <div className='toolbar'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <img alt="" src={bold} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <img alt="" src={italic} />
      </button>
      <button
        onClick={() => editor.chain().focus().setUnderline().run()}
        disabled={editor.isActive('underline')}
        className="border"
      >
        <img alt="" src={underline} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <img alt="" src={strike} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >

        <img alt="" src={unorderedlist} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img alt="" src={orderedlist} />
      </button>
      <button
       onClick={() => editor.chain().focus().setTextDirection('rtl').run()}
       className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
       >
        <img alt="" src={righttext} />
      </button>
      <button
       onClick={() => editor.chain().focus().setTextDirection('ltr').run()}
       className={editor.isActive({ textAlign: 'center' }) ? 'is-active border' : 'border'}
       >
        <img alt="" src={lefttext} />
      </button>
      <button
       onClick={() => editor.chain().focus().setTextAlign('left').run()}
       className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
       >
        <img alt="" src={alignleft} />
      </button>
      <button 
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <img alt="" src={alignCenter} />
      </button>
      <button
       onClick={() => editor.chain().focus().setTextAlign('right').run()}
       className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
       >
        <img alt="" src={alignright} />
      </button>
      <button
       onClick={() => editor.chain().focus().setTextAlign('justify').run()}
       className={editor.isActive({ textAlign: 'justify' }) ? 'is-active border' : 'border'}
       >
        <img alt="" src={justify} />
      </button>
      <button onClick={setLink} className={editor.isActive('link') ? 'is-active' : ''}>
        <img alt="" src={link} />
      </button>
      {
          expand ? 
          <a>
            <img alt="" src={escape} onClick={() => onExcapeClick()} />
          </a>
          :
          <a>
            <img alt="" src={Expand}  onClick={() => onExcapeClick()} />
          </a>
        }
    </div>
  )
}

export default function TipEditor({summary, expand, setSummaryHtml, setExpand}){
  const navigate = useNavigate()

  const onExcapeClick = () => {
    setExpand(!expand)
  }

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        protocols: ['ftp', 'mailto'],
      }),
      TextDirection,
      Underline
    ],
    content:summary,
  })

  const html = editor !== null ? editor.getHTML() : null

  useEffect(() =>{
    setSummaryHtml(html)
  }, [html])

  return (
    <div className={expand ? 'editor editor_fixed' : 'editor'}>

      <MenuBar editor={editor} expand={expand} onExcapeClick={onExcapeClick} />
      <EditorContent editor={editor} />
    </div>
  )
}