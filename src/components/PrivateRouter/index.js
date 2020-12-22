import PrivateRoute from "./PrivateRoute";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ user: state.auth.user });

export default connect(mapStateToProps)(PrivateRoute);
