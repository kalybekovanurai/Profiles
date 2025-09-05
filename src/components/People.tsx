import womanImg from "../assets/images/woman1.webp";
import woman2Img from "../assets/images/woman2.jpg"
import manImg from "../assets/images/man.webp"


interface PeopleProps {
  name: string;
  email: string;
  image: string;
}

export const people: PeopleProps[] = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    image: womanImg,
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    image: woman2Img,
  },
  {
    name: "Charlie Brown",
    email: "charlie@example.com",
    image: manImg,
  },
];
