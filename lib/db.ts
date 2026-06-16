export type User = {
  userId: string;
  email: string;
  name: string;
  passwordHash: string;
  plan: string;
};

export const dbGetUserByEmail = async (email: string): Promise<User | null> => {
  // TODO: connect to your database
  return null;
};

export const dbCreateUser = async (email: string, hashedPassword: string): Promise<User> => {
  // TODO: connect to your database
  return {
    userId: "stub-id",
    email,
    name: "",
    passwordHash: hashedPassword,
    plan: "free",
  };
};
