import React from 'react'

function Alerts( { messages , type  }) {
    
    const handleMessages = messages.map(message => (
        <div className='alert alert-danger p-0 mt-1 text-center'>
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