import Image from "next/image";
import Link from "next/link";
import championImg from "../assets/champions.webp";
import rotationImg from "../assets/rotation.webp";
import itemImg from "../assets/items.webp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 overflow-auto">
      <h1 className="text-3xl font-bold text-red-600">
        리그 오브 레전드 정보 앱.
      </h1>
      <p className="mt-4 text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <Link
        href={"/champions"}
        className="flex flex-col justify-center items-center gap-5 text-black p-5"
      >
        <Image
          src={championImg}
          width={500}
          height={500}
          alt="챔피언 목록으로 가는 링크의 이미지."
        />
        챔피언 목록 보기.
      </Link>
      <Link
        href={"/champions"}
        className="flex flex-col justify-center items-center gap-5 text-black p-5"
      >
        <Image
          src={rotationImg}
          width={500}
          height={500}
          alt="로테이션 확인 페이지으로 가는 링크의 이미지."
        />
        금주 로테이션 확인.
      </Link>
      <Link
        href={"/champions"}
        className="flex flex-col justify-center items-center gap-5 text-black p-5"
      >
        <Image
          src={itemImg}
          width={500}
          height={500}
          alt="아이템 목록으로 가는 링크의 이미지."
        />
        아이템 목록 보기.
      </Link>
    </div>
  );
}
