export type Project = {
  id: string;
  title: string;
  client: string;
  year: number;
  category: string;
  glyph: string;
  gradient: string;
  image?: string;
};

export const projects: Project[] = [
   {
    id: "3",
    title: "Newbold Connect",
    client: "Newbold College of Higher Education",
    year: 2026,
    category: "Logo",
    glyph: "Au",
    gradient: "linear-gradient(135deg, var(--color-terra) 0%, var(--color-espresso) 100%)",
    image: "/newbold-connect.png",
  },
  {
    id: "1",
    title: "Best Wedding Gift",
    client: "Hope Channel Southeast Asia",
    year: 2024,
    category: "Illustration",
    glyph: "Ct",
    gradient: "linear-gradient(135deg, var(--color-terra-soft) 0%, var(--color-terra) 100%)",
    image: "/best-wedding-gift.jpg",
  },
  {
    id: "2",
    title: "Revelation 1 - Bible Prophecy",
    client: "Hope Channel Southeast Asia",
    year: 2023,
    category: "Illustration",
    glyph: "Sr",
    gradient: "linear-gradient(135deg, var(--color-ochre) 0%, var(--color-espresso) 100%)",
    image: "/revelation.jpg",
  },
];
