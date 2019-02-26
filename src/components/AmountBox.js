import React from 'react';

const AmountBox = ({text,type,amount}) => {
    return(
        <div className="col">
            <div className="card">
                <div className={`card-header bg-${type} text-white`}>
                    {text}
                </div>
                <div className="cardbody ml-3">
                    {amount}
                </div>
            </div>
        </div>
    );
}

export default AmountBox