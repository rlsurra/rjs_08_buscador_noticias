import React, {useState} from 'react';

const useSelect = (stateInicial,opciones) => {

    const [categoriaSeleccionada,setCategoria] = useState(stateInicial);

    const SelectCategorias = () => (
        <select 
            className="browser-default"
            value={categoriaSeleccionada} //el inicial
            onChange={e => setCategoria(e.target.value)}
        >
            {opciones.map(opcion => (
                <option key={opcion.value} value={opcion.value}>
                    {opcion.label}
                </option>
            ))}
        </select>
    );

    return [categoriaSeleccionada,SelectCategorias];

}
 
export default useSelect;