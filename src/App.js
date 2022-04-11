import "./App.css";
import { connect } from "react-redux";
import { optionStatusAction } from "./actions";
import MultiSelect from "./components/MultiSelect";

function App({ optionStatusAction, optionStatus }) {
  return (
    <div
      className="app_MultiSelect"
      onClick={() => {
        if (optionStatus) {
          optionStatusAction(false);
        }
      }}
    >
      <MultiSelect />
    </div>
  );
}
const mapStateToProps = (state) => ({
  optionStatus: state.optionStatus,
});
export default connect(mapStateToProps, { optionStatusAction })(App);
