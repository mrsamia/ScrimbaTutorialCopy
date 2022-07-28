import React from 'react';
import Card from './Card';
import Data from './Data';

function MainBody(props) {
    return Data.map((e) => {
        return (
            <Card
                imgUrl={e.imgUrl}
                location={e.location}
                googleMapUrl={e.googleMapUrl}
                imgName={e.imgName}
                date={e.date}
                description={e.description}
            />
        );
    })
}

export default MainBody;