import { renderRoutes } from "react-router-config";
import { useEffect } from "react";
import { fetchingAction } from "../store/actions/fetchingAction";
import { connect } from "react-redux";

function App({ route, fetchingAction }) {
  useEffect(() => {
    fetchingAction();
  }, [fetchingAction]);

  return <div>{renderRoutes(route.routes)}</div>;
}

App.defaultProps = {
  route: null,
};

const mapStateToProps = ({ fetching }) => ({
  fetching: fetching.items,
});
const mapDispatchToProps = { fetchingAction };
export default connect(mapStateToProps, mapDispatchToProps)(App);
