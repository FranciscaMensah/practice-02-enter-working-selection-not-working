import React from 'react';
import './Preview.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Preview (props){

    return(
        <div className='preview'>
             <ReactMarkdown
                children={props.markdownPreview}
                skipHtml={true}
                remarkPlugins={[[remarkGfm, {singleTilde: false}]]}
             />
        </div>
    )
}