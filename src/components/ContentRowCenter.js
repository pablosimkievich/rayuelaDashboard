import React from 'react';
import LastToyInDb from './LastToyInDb';
import CategoriesInDb from './CategoriesInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter(){
    return (
        <div className="row">
           
           
           
            {/*<!-- Ultimo juguete en DB -->*/}
            <LastToyInDb />
            {/*<!-- End content row last toy in Data Base -->*/}
          
            {/*<!-- Categories in DB -->*/}
            <CategoriesInDb />
          
        </div>
    )
}

export default ContentRowCenter;