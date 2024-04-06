export interface ApiResonse {
  total: number;
  total_pages: number;
  results: {
    id: string;
    urls: { small: string; full: string, thumb: string, small_s3: string };
    likes: number;
  }[];
};

export interface Image {
  id: string;
  url: string;
  fullSize: string;
  likes: number;
}
