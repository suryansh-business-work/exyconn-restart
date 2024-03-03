import Image from "next/image";
import Link from "next/link";

const menuData = [
  { text: "AI", url: '/' },
  { text: "Cloud", url: '/' },
  { text: "Digital", url: '/' },
  { text: "Emerging", url: '/' }
]

const PlainNavBar = () => {
  return (
    <div className="custom-menu">
      <ul>
        {menuData.map((menuItem, index) => <li key={index}><Link href={menuItem?.url}>{menuItem?.text}</Link></li>)}
      </ul>
    </div>
  )
}

export default PlainNavBar;
