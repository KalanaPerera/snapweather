import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

  
window.matchMedia = window.matchMedia || (() => { return { matches: false, addListener: () => {}, removeListener: () => {}, }; });

configure({ adapter: new Adapter() });

