export type Tweet = {
  id: number;
  content: string;
  user: {
    username: string;
    avatar: string;
  };
}
