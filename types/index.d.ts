// type User = {
//   name: string;
//   email: string;
//   image?: string;
//   accountId: string;
// };

enum Category {
  maths = "maths",
  language = "language",
  science = "science",
  history = "history",
  coding = "coding",
  geography = "geography",
  economics = "economics",
  finance = "finance",
  business = "business",
}

type Agent = Models.DocumentList<Models.Document> & {
  $id: string;
  name: string;
  category: Category;
  topic: string;
  duration: number;
  bookmarked: boolean;
};

interface CreateAgent {
  name: string;
  category: string;
  topic: string;
  voice: string;
  style: string;
  duration: number;
}

interface GetAllAgents {
  limit?: number;
  page?: number;
  category?: string | string[];
  topic?: string | string[];
}

interface BuildClient {
  key?: string;
  sessionToken?: string;
}

interface CreateUser {
  email: string;
  name: string;
  image?: string;
  accountId: string;
}

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface Avatar {
  userName: string;
  width: number;
  height: number;
  className?: string;
}


interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

interface AgentComponentProps {
  agentId: string;
  category: string;
  topic: string;
  name: string;
  userName: string;
  userImage: string;
  voice: string;
  style: string;
}