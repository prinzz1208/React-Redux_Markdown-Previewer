import React from 'react'
import  marked  from 'marked';
import { useSelector } from 'react-redux';
function Previewer() {
    const textFromStore = useSelector(state => state.text)

    const getMarkdownText = () => {
        var rawMarkup = marked(textFromStore, {sanitize: true, breaks: true});
        return { __html: rawMarkup };
    }
    return (
        <div className="preview-box">
            <div className="header"><span>Previewer</span></div>
            <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}>
            </div>
        </div>

    )
}

export default Previewer;
