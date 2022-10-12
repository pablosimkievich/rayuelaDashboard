import React from 'react';
//import noPoster from '../assets/images/no-poster.jpg';
import {useState, useEffect} from 'react';
import axios from 'axios'

function SearchMovies(){
	const [state, setState] = useState([]);
    const [keyword, setKeyword]= useState('')
	
	const movies =  async () => {
		const json = await axios(`http://www.omdbapi.com/?s=${keyword}&apikey=f2cdab72`);//pego a mi api
		
		setState(json.data.Search);//guardo los datos en mi estado (state)
	}
	
	
const handelInputChange = (e)=>{
	e.preventDefault();
	setKeyword(e.target.value)
}

	const handelSubmit = (e)=>{
		e.preventDefault();
		
	};


	useEffect(() => {
		movies();//cuando se monta el componente llamo a mi api
	 }, 
	 []);
	



	

	// Credenciales de API
	const apiKey = 'f2cdab72'; // Intenta poner cualquier cosa antes para probar

	return(
		<div className="container-fluid">
			{
				apiKey !== '' ?
				<>
					<div className="row my-4">
						<div className="col-12 col-md-6">
							{/* Buscador */}
							<form method="GET">
								<div className="form-group">
									<label htmlFor="">Buscar por título:</label>
									<input type="text" className="form-control" onChange={(e) => handelInputChange(e)}/>
								</div>
								<button className="btn btn-info"  onClick={(e) => handelSubmit(e)}>Search</button>
							</form>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<h2>Películas para la palabra: {keyword}</h2>
						</div>
						{/* Listado de películas */}
						{
							state && state?.map((movie, i) => {
								return (
									<div className="col-sm-6 col-md-3 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img 
														className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
														src={movie.Poster}
														alt={movie.Title} 
														style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>
								)
							})
						}
					</div>
					{ state && <div className="alert alert-warning text-center">No se encontraron películas</div>}
				</>
				:
				<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
