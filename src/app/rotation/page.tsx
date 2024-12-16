"use client";
import { useQuery } from "@tanstack/react-query";
import { mappedData, rotData, type Rotation } from "@/types/Rotation";
import RotationShow from "./_components/RotationShow";

const Rotation = () => {
  const { data, isPending, isError, refetch } = useQuery<{
    rotData: rotData;
    mappedData: mappedData;
    versionData: string[];
  }>({
    queryKey: ["champData"],
    queryFn: async () => {
      const res = await fetch("api/rotation");
      const data = await res.json();
      return data;
    },
  });

  const { rotData, mappedData, versionData } = data || {};

  if (isPending) {
    return (
      <div className="pb-24">
        <p className="text-center pt-16 mt-2 text-xl font-semibold">
          로딩 중입니다.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center pb-24">
        <p className="text-center pt-16 mt-2 text-xl font-semibold">
          데이터를 가져오는 과정에서 오류가 발생하였습니다.
        </p>
        <button
          onClick={() => refetch()}
          className="mt-5 border rounded p-4 hover:shadow-lg"
        >
          다시 시도하기.
        </button>
      </div>
    );
  }

  return (
    <RotationShow
      rotData={rotData}
      mappedData={mappedData}
      versionData={versionData}
    />
  );
};
export default Rotation;
