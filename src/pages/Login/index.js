import { connect } from "react-redux";

import Login from "./Login";
import loginAction from "../../reducers/auth/actions";

const mapStateToProps = (store) => ({
  token: store.auth.token,
  error: store.auth.error,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  doLogin: ({ email, password }) =>
    dispatch(loginAction.login({ email, password }, ownProps.history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
