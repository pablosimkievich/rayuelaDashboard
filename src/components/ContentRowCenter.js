import React from 'react';
import LastToyInDb from './LastToyInDb';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <CategoriesInDb />
         
            <CategoriesInDb />
            {/*<!-- Ultimo juguete en DB -->*/}
            <LastToyInDb />
            {/*<!-- End content row last toy in Data Base -->*/}

            {/*<!-- Categories in DB -->*/}
            
          
        </div>
    )
}

export default ContentRowCenter;