import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {

    //Creamos las opciones
    const opciones = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnología'},
    ]

    const [ categoria, SelectCategorias ] = useSelect('general',opciones); //el inicial es el primero que se carga sin presionar buscar

    const comunicarCategoriaAlApp = e => {
        e.preventDefault();
        setCategoria(categoria);
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={comunicarCategoriaAlApp}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>
                    <SelectCategorias/>
                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            // El "-" no funciona en la nomenclatura 'btn-block'. Otra opcion es modificar el module.css.
                            value="Buscar"
                        ></input>
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    setCategoria: PropTypes.function.isRequired
}
 
export default Formulario;