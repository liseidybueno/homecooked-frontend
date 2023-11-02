export const createUser = async <T>(
  url: string,
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
): Promise<T> => {
  const res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  localStorage.setItem("currentUser", JSON.stringify(res.body));

  return await res.json();
};

export const getUser = async <T>(
  url: string,
  user: {
    email: string;
    password: string;
  }
): Promise<T> => {
  const res = await fetch(url, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ user }),
  });

  // localStorage.setItem("currentUser", JSON.stringify(res.body));

  return await res.json();
};
