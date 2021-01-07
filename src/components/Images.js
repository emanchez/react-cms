import React, { useState } from 'react'
const contentful = require("contentful");
const client = contentful.createClient({
    space: "...",
    accessToken: "..."
});

const getContenfulStuff = async () => {
    const response = await client.getEntries()
    return response
}



const Image =  (props) =>{

    let [resp, setResp] = useState(0)

    const getResponse = async () => {
        const r = await getContenfulStuff()
        setResp(r)
    }

    return (
        <div>
            <h1>{resp}</h1>
        </div>
    )
}

export default Image

/*

            <h1>{resp.items.sys.fields.title}</h1>
            <h1>{typeof resp.items.sys.fields.image}</h1>
            <h1>{resp.items.sys.fields.title}</h1>
*/
