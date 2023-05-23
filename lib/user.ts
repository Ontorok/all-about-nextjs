export const getAllUsers = async (): Promise<User[]> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res.ok) throw new Error("Failed to fetch data [users[]]");
  return res.json();
};

export const getUser = async (userId: string): Promise<User> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error("Failed to fetch data [users]");
  return res.json();
};

export const getUserPosts = async (userId: string): Promise<Post[]> => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error("Failed to fetch data [posts[]]");
  return res.json();
};
