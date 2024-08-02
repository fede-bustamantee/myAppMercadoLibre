 // creo mi custom hook personalizado
//obtener valores de atributos sin tener que repetir la lógica de búsqueda
export const useAttributes = (attributes)=>{
    // creo la funcion dentro de mi custom hook
    const getAttributeValue = (id)=>{
        const { value_name } = attributes?.find(item => item.id == id)||{};
        
        return value_name? value_name : '';
    }
    // retorno la función para que pueda ser usada en otro lado.
    return {getAttributeValue};
}