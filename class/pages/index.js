import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return <button onClick={() => router.push("/youtube")}>이동</button>;
}
