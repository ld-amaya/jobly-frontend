import React from 'react'

function Alerts( { messages , type  }) {
    
    const handleMessages = messages.map(message => (
            <div className= {`alert alert-${type} p-0 mt-1 px-2 text-center`} role='alert'>
                {message}
            </div>
    ))
    return (
        <div>
            {handleMessages}
        </div>
    )
}

export default Alerts;