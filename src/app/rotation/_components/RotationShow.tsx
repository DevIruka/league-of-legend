import { mappedData, rotData } from "@/types/Rotation";
import Image from "next/image";
import Link from "next/link";

type RotationShowProps = {
  rotData: rotData | undefined;
  mappedData: mappedData | undefined;
  versionData: string[] | undefined;
};

const RotationShow = ({
  rotData,
  mappedData,
  versionData,
}: RotationShowProps) => {
  return (
    <div className="pb-24">
      <p className="text-center pt-16 mt-2 text-xl font-semibold">
        로테이션 챔피언
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIds.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData?.[id].id}
            >
              <Link href={`/champions/${mappedData?.[id].id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${versionData?.[0]}/img/champion/${mappedData?.[id].id}.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData?.[id].name}
                </h2>
                <p className="text-gray-500">{mappedData?.[id].title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="text-center p-5 mt-2 text-xl font-semibold">
        초심자를 위한 무료 챔피언
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {rotData?.freeChampionIdsForNewPlayers.map((id) => {
          return (
            <div
              className="border rounded p-4 hover:shadow-lg"
              key={mappedData?.[id].id}
            >
              <Link href={`/champions/${mappedData?.[id].id}`}>
                <Image
                  src={`https://ddragon.leagueoflegends.com/cdn/${versionData?.[0]}/img/champion/${mappedData?.[id].id}.png`}
                  width={50}
                  height={50}
                  alt="챔피언 이미지"
                ></Image>
                <h2 className="mt-2 text-xl font-semibold">
                  {mappedData?.[id].name}
                </h2>
                <p className="text-gray-500">{mappedData?.[id].title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RotationShow;
