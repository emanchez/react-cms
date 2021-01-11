import React, { useEffect, useState } from 'react'
const contentful = require("contentful");
const client = contentful.createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_KEY
});



const Image = (props) =>{

    let [resp, setResp] = useState([])
    const items = []
    useEffect(()=>{
        const getContenfulStuff = async () => {
            const response = await client.getEntries()
            const parseData = client.parseEntries(response)
            const respArray = (await parseData).items
            //extract necessary data
            //set that specific data to state
            console.log(respArray)
            
            setResp(respArray)        
            for (const [index, value] of resp){
                items.push(
                    <div className="image_wrap">
                        <p className="title">{value.fields.title}</p>
                        <img src={value.fields.image.fields.file.url} alt="" />
                        <p class="description">{value.fields.description}</p>
                    </div>
                )
            }
            console.log(items)
        }
        getContenfulStuff()

    }, [])

    return (
        <div className="image_container">
            {items}
        </div>
    )
}

export default Image

/*

            <h1>{resp.items.sys.fields.title}</h1>
            <h1>{typeof resp.items.fields.image.fields.file.url</h1>
            <h1>{resp.items.sys.fields.title}</h1>
*/
