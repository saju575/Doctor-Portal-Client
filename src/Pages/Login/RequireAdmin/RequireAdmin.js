import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Spinner from "../../Common/Spinner/Spinner";

const RequireAdmin = (props) => {
	const [user, loading, error] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);
	const location = useLocation();
	if (loading || adminLoading) {
		return <Spinner></Spinner>;
	}
	if (!user || !admin) {
		signOut(auth);
		return (
			<Navigate
				to={"/login"}
				state={{ from: location }}
				replace
			></Navigate>
		);
	}
	return props.children;
};

export default RequireAdmin;
