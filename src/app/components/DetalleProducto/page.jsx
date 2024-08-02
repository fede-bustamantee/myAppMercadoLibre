import Link from "next/link";
import { useCurrencyConverter } from "../../utils/useCurrencyConverter";
import { useAttributes } from "@/app/utils/useAttributes";

const DetalleProducto = ({
  title,
  price,
  installments,
  shipping,
  currency_id,
  permalink,
  attributes
}) => {
  const { getAttributeValue } = useAttributes(attributes);
  const { toCurrency } = useCurrencyConverter();
  const { free_shipping } = shipping;

  return (
    <div className="flex-1 bg-white ">
      <div className="flex flex-col">
      <h2 className="text-sm font-semibold uppercase" >{getAttributeValue("BRAND")}</h2>
      <h2 className="text-xl font-extralight " >{title}</h2>
        <span className="text-2xl">{toCurrency(price, currency_id)}</span>
        {installments && (
          <span>{`en ${installments?.quantity} x ${toCurrency(
            installments.amount,
            currency_id
          )}`}</span>
        )}
        {free_shipping && <span className="text-green-500">Envío gratis</span>}
      </div>
    </div>
  );
};

export default DetalleProducto;
