export const getData = async <T>(
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

  console.log("******data", res.body);

  return await res.json();
};
