import Transacciones from "./transacciones";
import Wallet from "./wallet";

export default function Usuario() {
  return (
    <div className="flex flex-col items-center space-y-10 m-4">
      <Wallet />
      <Transacciones />
    </div>
  );
}
