import React, { useState } from 'react'
import { useStore } from '../zustand/useStore'

const Create = () => {
    const create = useStore((state) => state.create)

    const [url, setUrl] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!url || !name || !price) return

        const newcar = {
            id: new Date().getTime(),
            url,
            name,
            price
        }
        
        create(newcar)

        setUrl('')
        setName('')
        setPrice('')
        setTimeout(()=>{
                alert("added")
        }, 1000)
    }

    return (
        <div className='container'>
            <p>Create Car</p>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='url' value={url} onChange={(e) => setUrl(e.target.value)} />
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <button type="submit">Create</button>            
            </form>
        </div>
    )
}

export default Create
