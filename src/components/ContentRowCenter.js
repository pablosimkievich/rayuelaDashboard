import React from 'react';
import LastToyInDb from './LastToyInDb';
import CategoriesInDb from './CategoriesInDb';
import LastUserInDb from './LastUserInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            <CategoriesInDb />
         
           
            {/*<!-- Ultimo juguete en DB -->*/}
            <LastToyInDb />
            {/*<!-- End content row last toy in Data Base -->*/}
            <LastUserInDb/>
            {/*<!-- Categories in DB -->*/}
            
          
        </div>
    )
}

export default ContentRowCenter;