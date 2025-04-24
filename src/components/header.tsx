import Image from "next/image";
import Link from "next/link";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="m-auto my-3 bg-apple-gray backdrop-blur-sm">
      <ul className="flex justify-between items-center w-full gap-11 text-[12px] font-normal">
        <li>
          <Link href="/">
            <Image
              src="/imgs/apple_logo_black.svg"
              alt="apple_logo"
              width={13}
              height={13}
            />
          </Link>
        </li>
        <li>
          <Link href="/">스토어</Link>
        </li>
        <li>
          <Link href="/">Mac</Link>
        </li>
        <li>
          <Link href="/">iPad</Link>
        </li>
        <li>
          <Link href="/">iPhone</Link>
        </li>
        <li>
          <Link href="/">Watch</Link>
        </li>
        <li>
          <Link href="/">AirPods</Link>
        </li>
        <li>
          <Link href="/">TV 및 홈</Link>
        </li>
        <li>
          <Link href="/">엔터테인먼트</Link>
        </li>
        <li>
          <Link href="/">악세서리</Link>
        </li>
        <li>
          <Link href="/">고객지원</Link>
        </li>
        <li>
          <Link href="/">
            <IoIosSearch className="text-[18px]" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <HiOutlineShoppingBag className="text-[18px]" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
