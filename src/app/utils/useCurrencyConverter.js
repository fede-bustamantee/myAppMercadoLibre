export function useCurrencyConverter(){
    const toCurrency = (value, currency_id) => {
        // api internacional para formatear la moneda según pais, acomoda punto y coma.
		return new Intl.NumberFormat('es-AR', { style: 'currency', currency: currency_id }).format(value);
	}
    return { toCurrency }
}