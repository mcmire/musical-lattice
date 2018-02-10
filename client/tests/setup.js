import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

enzyme.configure({ adapter: new Adapter() });
