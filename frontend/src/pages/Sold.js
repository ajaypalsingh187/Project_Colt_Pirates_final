import React from 'react';
import Car from '../components/Car';
import Loader from '../components/Loader';
import useFetch from '../hooks/useFetch';
import mergeSort from '../hooks/mergeSort';
import './Pages.css';

const strapiURL = 'https://kokpit.alfamotors.pl';

// The code line below gets more than 25 records given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=10&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function Sold() {
    const { loading, error, data } = useFetch(apiURL);
    
    if (loading) return <Loader/>
    if (error) return <p>Error!!!</p>
    
    const filteredData = data.filter(car => car[1].attributes.state === 'sold')

    // Using merge sort for setting cars in the order based on the "owners_number" attribute. It's treated as the "kolejność" attribute in the user's panel
    const sortedFilteredData = mergeSort(filteredData);

    return (
        <div id="Sold">
            <div className='car-windows-area'>
                <h1>VEHICLES THAT HAVE ALREADY FOUND A NEW OWNER:</h1>

                {sortedFilteredData.map((car, index) => (
                        <Car 
                            key={'Car no ' + index}
                            id={car[1].id}
                            state={car[1].attributes.state}
                            title={car[1].attributes.title}
                            mileage={car[1].attributes.mileage} 
                            year={car[1].attributes.year} 
                            fuel={car[1].attributes.fuel} 
                            power={car[1].attributes.power} 
                            imageSource={strapiURL + car[1].attributes.gallery.data[0].attributes.url}
                        />
                    )
                )}
            </div>
        </div>
    )
}
