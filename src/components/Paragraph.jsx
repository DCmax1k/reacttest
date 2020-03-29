import React from 'react';

const Paragraph = (props) => {
    return (
        <div className="paragraph">
            { props.message }
        </div>
    );
}
 
export default Paragraph;