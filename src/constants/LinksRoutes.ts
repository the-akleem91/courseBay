interface NavLink {
  text: string;
  url: string;
}
const navLinks: NavLink[] = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Courses",
    url: "/courses",
  },
  {
    text: "Contact us",
    url: "/contact",
  },
  {
    text: "FAQ",
    url: "/faq",
  },
];

export { navLinks };
