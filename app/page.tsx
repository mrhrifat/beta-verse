// import Image from "next/image";
import { metadata as Metadata } from '@/utils/data'
export const metadata = Metadata
export default function Home() {
  console.log('A')

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>
}
