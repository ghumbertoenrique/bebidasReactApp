import React,{useContext, useState} from 'react';
import {CategoriasContext} from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';

const Formulario = () => {
    //states
    const [busqueda, guardarBusqueda] = useState({
        nombre:'',
        categoria:''
    });

    const {buscarReceta, guardarConsultar } =useContext(RecetasContext)
    const {categorias} = useContext(CategoriasContext);

    // funcion para leer contenidos

    const obtenerDatosReceta = e =>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        } )
    }
 
    return ( 
        <form 
        className="col-12" 
        onSubmit={ e => {
            e.preventDefault();
            buscarReceta(busqueda)
            guardarConsultar(true)
        } }
        >  
            <fieldset className="text-center" >
                <legend>Busca bebidas por categoria o ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control "
                        type="text"
                        placeholder="Puedes buscar por ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        name="categoria"
                        className="form-control"
                        onChange={obtenerDatosReceta}
                    >
                        <option>Seleciona categoria</option>
                        {categorias.map( categoria => (
                            <option key={categoria.strCategory} 
                                    value={categoria.strCategory}
                            >{categoria.strCategory}</option>

                    ) )}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        value="Buscar bebidas"
                        className="btn btn-block btn-primary"
                        type="submit"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;