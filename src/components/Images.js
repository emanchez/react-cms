import React, { useEffect, useState } from 'react'
const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
});



const Image = (props) =>{

    let [resp, setResp] = useState('')

    useEffect(()=>{
        const getContenfulStuff = async () => {
            const response = await client.getEntries()
            const parseData = client.parseEntries(response)
            const respImage = (await parseData).items[0].fields.image.fields.file.url
            //extract necessary data
            //set that specific data to state
            console.log(respImage)
            
            setResp(respImage)
        }
        getContenfulStuff()
    }, [])

    return (
        <div>
            <img src={resp} />
        </div>
    )
}

export default Image

/*

            <h1>{resp.items.sys.fields.title}</h1>
            <h1>{typeof resp.items.sys.fields.image}</h1>
            <h1>{resp.items.sys.fields.title}</h1>
*/
