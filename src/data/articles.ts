
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [];

export default articles;
