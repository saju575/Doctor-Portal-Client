import { useEffect, useState } from "react";

const useToken = (user) => {
	const [token, setToken] = useState("");
	useEffect(() => {
		const email = user?.user?.email;
		const currentUser = { email: email };
		if (email) {
			fetch(
				`https://doctor-portal-server-575.herokuapp.com/user/${email}`,
				{
					method: "PUT",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(currentUser),
				}
			)
				.then((res) => res.json())
				.then((data) => {
					//console.log("data inside token", data);
					localStorage.setItem("accessToken", data.token);
					setToken(data.token);
				});
		}
	}, [user]);
	return [token];
};

export default useToken;
