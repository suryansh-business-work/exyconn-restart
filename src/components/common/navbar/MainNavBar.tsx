import Image from "next/image";
import Link from "next/link";

const menuData = [
  { text: "Services", url: '/' },
  { text: "Industries", url: '/' },
  { text: "About Us", url: '/' },
  { text: "Blog", url: '/' },
  { text: "Careers", url: '/' }
]

const MainNavBar = () => {
  return (
    <div className="custom-menu">
      <ul>
        {menuData.map((menuItem, index) => <li key={index}><Link href={menuItem?.url}>{menuItem?.text}</Link></li>)}
      </ul>
    </div>
  )
}

export default MainNavBar;
