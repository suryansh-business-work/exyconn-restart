import Image from "next/image";
import Link from "next/link";

const menuData = [
  { text: "Services", url: '/services' },
  { text: "Industries", url: '/industries' },
  { text: "About Us", url: '/about' },
  { text: "Blog", url: '/blog' },
  { text: "Careers", url: '/careers' }
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
