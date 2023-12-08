import { useState, useEffect } from "react";

function useGetCurrentUser() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getData<IUserResponse>(endpoints.usersMe)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return { isLoading, data };
}
