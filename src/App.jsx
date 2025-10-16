import "./index.css";
import TopSalesSlider from "./components/homeComponents/TopSalesSlider";
import FirstNav from "./components/homeComponents/header/firstNav";

export default function App() {
  // const [theme, setTheme] = useState("theme1");

  // useEffect(() => {
  //   document.documentElement.setAttribute("data-theme", theme);
  // }, [theme]);

  // const toggleTheme = () =>
  //   setTheme((prev) => (prev === "theme1" ? "theme2" : "theme1"));

  return (
    <div className="bg-white">
      <FirstNav />

      {/* <TopSalesSlider /> */}
    </div>
  );
}
