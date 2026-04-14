export interface BookEntry {
  title: string;
  filename: string;
  description: string;
}

export const books: BookEntry[] = [
  {
    title: "OPSEC",
    filename: "opsec.pdf",
    description: "Operational Security — A Red Team essential",
  },
];