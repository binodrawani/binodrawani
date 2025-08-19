
import { Outfit, Ovo} from "next/font/google";
import "../../globals.css";



export default function FinanceLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}