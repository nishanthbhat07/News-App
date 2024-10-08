export interface Source {
  id: string;
  name: string;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  isPinned?: boolean;
}

export interface INewsFeedResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
