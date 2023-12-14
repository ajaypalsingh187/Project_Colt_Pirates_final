import React from 'react';
import './CarPage.css';
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const strapiURL = 'https://kokpit.alfamotors.pl/';

// The one below should get more than 25 given by a default
const apiURL = 'https://kokpit.alfamotors.pl/api/cars?sort=date&pagination[pageSize]=200&populate=*'; 

// const strapiURL = 'http://localhost:1337';
// const apiURL = 'http://localhost:1337/api/cars?populate=*'; 

export default function CarPage() {
    const { loading, error, data } = useFetch(apiURL);
    const { id } = useParams();
    let imagesURLs = []; // here will be stored URLs of images
    let idCar = Number(id); // turning string into number

    function isThatCar(fetchedCar) {
        return fetchedCar[1].id === idCar;
    }
    
    if (loading) return <Loader />
    if (error) return <p>Error!!!</p>

    let foundCar = data.find(isThatCar);
    
    foundCar[1].attributes.gallery.data.map(car => (
        imagesURLs.push(strapiURL + car.attributes.url)
    ));

    return (
        <div className='CarPage'>
            <h1 className='CarPage__price__area CarPage__price__area-header'>
                {foundCar[1].attributes.title}

                <span className='CarPage__price__area' style={
                    foundCar[1].attributes.state==='sold' || 
                    foundCar[1].attributes.state==='soon' ? {display: 'none'} : {}
                }>
                    <span className='CarPage__price__area__dash'>{foundCar[1].attributes.price ? ' - ' : ''}</span> 
                    <span className='CarPage__price__area__number'>
                        {foundCar[1].attributes.state==='reserved' ? 
                        ' - RESERVED' : 
                        foundCar[1].attributes.price + ' $'}
                    </span>
                </span>
            </h1>

            <ImageSlider id='ImageSlider' slides={imagesURLs} />

            <table className='CarPage__table'>
                <tbody>
                    <tr>
                        <td>Production Year:</td>
                        <td>{foundCar[1].attributes.year}</td>
                    </tr>
                    <tr>
                        <td>Mileage:</td>
                        <td>{foundCar[1].attributes.mileage} km</td>
                    </tr>
                    <tr>
                        <td>Fuel:</td>
                        <td>{foundCar[1].attributes.fuel}</td>
                    </tr>
                    <tr>
                        <td>Engine Power:</td>
                        <td>{foundCar[1].attributes.power} HP</td>
                    </tr>
                    <tr>
                        <td>Engine Size:</td>
                        <td>{foundCar[1].attributes.engine_size}</td>
                    </tr>
                    <tr>
                        <td>Number of Doors:</td>
                        <td>{foundCar[1].attributes.doors}</td>
                    </tr>
                    <tr>
                        <td>Number of Seats:</td>
                        <td>{foundCar[1].attributes.seats}</td>
                    </tr>
                    <tr>
                        <td>Transmission:</td>
                        <td>{foundCar[1].attributes.gearbox}</td>
                    </tr>
                    <tr>
                        <td>Drive:</td>
                        <td>{foundCar[1].attributes.drive}</td>
                    </tr>
                    <tr>
                        <td>Body Type:</td>
                        <td>{foundCar[1].attributes.body}</td>
                    </tr>
                    <tr>
                        <td>Color:</td>
                        <td>{foundCar[1].attributes.color}</td>
                    </tr>
                    <tr>
                        <td>Country of Origin:</td>
                        <td>{foundCar[1].attributes.country}</td>
                    </tr>
                    <tr>
                        <td>First Registration Date:</td>
                        <td>{foundCar[1].attributes.first_registration}</td>
                    </tr>
                    <tr>
                        <td>Sales Form:</td>
                        <td>{foundCar[1].attributes.vin}</td>
                    </tr>
                </tbody>
            </table>

            <div className='CarPage__description'>
                <div id='description-title'>Vehicle Description</div>
                <ReactMarkdown className='CarPage__description__text'>
                    {foundCar[1].attributes.description}
                </ReactMarkdown>
            </div>
        </div>
    )
}
