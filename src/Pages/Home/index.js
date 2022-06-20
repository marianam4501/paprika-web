import { Link } from "react-router-dom";
import SimpleHeader from "../../Components/SimpleHeader/Index";
import Footer from "../../Components/Footer/Index";
export function Home() {
  return (
    <div className="p-0">
      <div className="pb-5">
        <SimpleHeader />
      </div>
      <div className="h-80">
        <body>
          <p>Hello world!</p>
        </body>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
}
