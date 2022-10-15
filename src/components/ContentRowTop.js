import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowDataCards from './ContentRowDataCards';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-around mb-4">
						<h1 className="h3 m-4 text-gray-900">Dashboard Rayuela</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowDataCards />
					<ContentRowCenter />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;