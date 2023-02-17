import React, {useEffect} from 'react'
// import {EditorView,basicSetup,minimalSetup} from 'codemirror';
import CodeMirror from '@uiw/react-codemirror'
import '@codemirror/basic-setup';
import '@codemirror/lang-javascript'
import '@uiw/codemirror-theme-dracula';
import '@codemirror/autocomplete';


const Editor = () => {
    useEffect(() => {
      async function init() {
            CodeMirror.fromTextArea(document.getElementById('realtimeEditor'), {
                mode:{name:'javascript', json: true},
                theme: 'dracula',
                //autoCloseTags: true,
                autoCloseBrackets: true,
                lineNumbers:true,
            })
      }
      init();
    }, []);

    
  return (
     <textarea id ='realtimeEditor'></textarea>


  )
}

export default Editor