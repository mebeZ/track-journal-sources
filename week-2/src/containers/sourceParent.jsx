import React from 'react' 
import Source from '../components/Source.jsx'

const SourceParent = styles.div`
    class: sources;
`

const SourceParent = () => {
    return(
        <SourceParent>
            <Source number="1." name="Presbo" email="presbo@columbia.edu"></Source>
            <Source number="2." name="John Jay Mouse" email="mouse@columbia.edu"></Source>
            <Source number="3." name="Water Bottle Man" email="flipper@columbia.edu"></Source> 
        </SourceParent>
    );
};

export const SourceParent;
