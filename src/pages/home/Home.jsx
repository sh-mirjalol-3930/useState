import React from 'react'
import { useStore } from '../zustand/useStore'

const Home = () => {
    const cars = useStore((state) => state.cars)

    const deleteCar = useStore((state) => state.deleteCar);

    return (
        <div className='container'>
            <p>Cars</p>
            <div className='row'>
                {cars.map((car, index) => (
                    <div className='card' key={index}>
                        <img src={car.url} alt={car.name} />
                        <h2>{car.name}</h2>
                        <p>${car.price}</p>
                        <p>ID: {car.id}</p>
                        <button onClick={() => deleteCar(car.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
