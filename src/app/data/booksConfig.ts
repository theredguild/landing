export interface BookEntry {
  title: string;
  filename: string;
  description: string;
}

export const books: BookEntry[] = [
  {
    title: "OpSec while traveling",
    filename: "opsec.pdf",
    description: "Your travel security companion",
  },
];