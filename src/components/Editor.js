import React from 'react';
import textChange from '../redux/editor/editorActions';
import { useSelector, useDispatch } from 'react-redux';
function Editor() {
    const textFromStore = useSelector(state => state.text);
    const dispatch = useDispatch();

    const onChangeTextHandler = (e) => {
        dispatch(textChange(e.target.value))
    }
    return (
        <div class="editor-box">
            <div className="header"><span>Editor</span></div>
            <textarea  id="editor" cols="100" rows="10" value={textFromStore} onChange={(e) => onChangeTextHandler(e)}></textarea>
        </div>
        
    )
}

export default Editor;
