import React from 'react';
import './style.css';

function ImageContainer(props) {

    const imageArray = [
        <img key="1" id="1" src={require(`../../images/bears.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="bears"/>,
        <img key="2" id="2" src={require(`../../images/panthers.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="broncos"/>,
        <img key="3" id="3" src={require(`../../images/cowboys.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="cowboys"/>,
        <img key="4" id="4" src={require(`../../images/eagles.jpg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="eagles"/>,
        <img key="5" id="5" src={require(`../../images/falcons.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="falcons"/>,
        <img key="6" id="6" src={require(`../../images/giants.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="giants"/>,
        <img key="7" id="7" src={require(`../../images/packers.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="packers"/>,
        <img key="8" id="8" src={require(`../../images/patriots.jpg`)} onClick={props.handleImageClick} className="img-thumbnail" alt="patriots"/>,
        <img key="9" id="9" src={require(`../../images/rams.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="rams"/>,
        <img key="10" id="10" src={require(`../../images/ravens.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="ravens"/>,
        <img key="11" id="11" src={require(`../../images/texans.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="texans"/>,
        <img key="12" id="12" src={require(`../../images/vikings.png`)} onClick={props.handleImageClick} className="img-thumbnail" alt="vikings"/>
    ];

    function shuffle (array) {

        let counter = array.length;
        let temp;
        let index;

        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    let images = shuffle(imageArray);

    return(
        <main className="images">
            <div className="container">
                {images}
            </div>
        </main>
    );
}

export default ImageContainer;