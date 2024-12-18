# 리그 오브 레전드. 적을 알고 나를 알자. 

<img width="946" alt="리그 오브 레전드 정보앱" src="https://github.com/user-attachments/assets/c29d0a51-8b78-4372-9616-1bd95ecb55e6" />

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [주요기능](#주요기능)
3. [적용 기술 및 기술적 의사결정](#적용-기술-및-기술적-의사결정)
4. [기술스택](#기술스택)
5. [Trouble Shooting](#trouble-shooting)

## 👨‍🏫 프로젝트 소개

> ### "적을 알고 나를 알자. 챔피언팁을 알아보자!"
Next.js 기술 연습을 겸하여 만든,  라이엇 API를 통해 챔피언, 아이템, 로테이션 정보를 표시하는 웹사이트입니다. 

## 주요기능

### 🦸챔피언 정보 확인. 

- 리그에 존재하는 챔피언들의 정보를 확인할 수 있습니다. 

- 검색 기능을 활용하여, 원하는 챔피언만 필터링하여 볼 수도 있습니다. 

- 챔피언 상세 화면에선 챔피언의 스토리, 해당 챔피언이 우군/적군일 때의 팁을 볼 수 있습니다. 

- ISR을 활용하여, 사용자의 입력에 따라 하루마다 새롭게 챔피언 데이터를 받아서 렌더링합니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

- 챔피언 화면
<img width="942" alt="챔피언 화면" src="https://github.com/user-attachments/assets/81f94e79-12a0-45be-b492-b0b91f5ffb9c" />

- 검색 기능
<img width="958" alt="챔피언 검색" src="https://github.com/user-attachments/assets/ebbcc8e1-3b27-4eeb-94ed-fb73dc933f56" />

- 챔피언 상세 화면
<img width="956" alt="챔피언 상세 화면" src="https://github.com/user-attachments/assets/16522dfe-4418-4592-a57a-05581bfd7c69" />
<br>
</div>
</details>

### 🗡️ 아이템 정보

- 리그의 아이템 정보들을 확인해볼 수 있습니다.

- 상세 화면에선 아이템들의 성능과 설명을 읽어볼 수 있습니다. 

- SSG로 생성되어, 빠르게 아이템 정보를 받아볼 수가 있습니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

- 아이템 
<img width="948" alt="아이템" src="https://github.com/user-attachments/assets/a202d691-9b97-4205-a4f3-5b5d0fca9e95" />

- 아이템 상세 화면
<img width="960" alt="아이템 상세화면" src="https://github.com/user-attachments/assets/8d829e13-9a6f-4ca8-81b5-448636e7c38c" />

<br>
</div>
</details>

### 🆓로테이션 확인

- 리그에서 플레이할 수 있는 무료 챔피언들을 보여줍니다. 

- 챔피언들의 카드를 클릭하면, 해당 챔피언의 상세 정보로 이동할 수 있습니다. 

- CSR을 통해 구현되었으며, tanstack query가 사용되었습니다. 

<details>
<summary>미리보기</summary>
<div markdown="1">

<img width="945" alt="로테이션" src="https://github.com/user-attachments/assets/07009cf1-a432-412b-8d88-6ec9008a0a1a" />


<br>
</div>
</details>

## 적용 기술

### Next.js

### Tanstack query

### Tailwind css

## ⏲️ 개발기간

- 2024.11.29(금) ~ 2024.12.4(수)

## 📚️ 기술스택

### ✔️ Language

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### ✔️ Version Control

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE

![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)


### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Trouble Shooting

## ## **1. TypeError 발생**

### **문제 상황**


코드를 실행하자 다음과 같은 오류가 발생했다.

TypeError: (0 , marked__WEBPACK_IMPORTED_MODULE_7__.default) is not a function

페이지가 제대로 로드되지 않았고, React Query가 예상대로 동작하지 않았다.

### **문제 원인**

에러를 분석한 결과, useQuery와 관련된 문제는  **"use client"**  지시어가 누락되어 발생했다.  

Next.js에서 useQuery는 클라이언트 컴포넌트에서만 작동한다.

서버 컴포넌트에서 useQuery를 사용하려고 하면 위와 같은 오류가 발생한다.

### **해결 방법**

#### **"use client" 지시어 추가**

useQuery를 사용하는 파일의 최상단에  **"use client"**  지시어를 추가하여, 해당 파일을 클라이언트 컴포넌트로 설정했다.

#### 수정된  **Home 컴포넌트**
```
"use client";

  

import { useQuery } from  "@tanstack/react-query";

import { fetchData } from  "./api/api";

  

export  default  function  Home() {

const { data: jsondata } =  useQuery({

queryKey: ["datas"],

queryFn:  fetchData,

});

  

return (

<div  className="flex flex-col items-center justify-center">

{jsondata?.map((data) => {

return (

<div  key={data.id}>

<p>{data.title}</p>

<p>{data.author}</p>

</div>

);

})}

</div>

);

}
```

## **교훈과 배운 점**

1.  **클라이언트와 서버의 구분**
    -   Next.js는 서버와 클라이언트 컴포넌트를 명확히 구분한다.
    -   React Query와 같은 클라이언트 측 상태 관리 라이브러리는 반드시 클라이언트 컴포넌트에서 사용해야 한다.
2.  **"use client" 지시어의 중요성**
    -   "use client" 지시어를 누락하면 서버 컴포넌트로 인식되어 클라이언트 측 훅이 정상적으로 동작하지 않는다.
3.  **레이아웃에서 Provider 설정**
    -   QueryClientProvider를 layout.tsx에서 설정하면 프로젝트 전반에서 React Query를 쉽게 사용할 수 있다.
4.  **디버깅 과정**
    -   TypeError 발생 시, 에러 메시지와 함께 해당 컴포넌트가 서버/클라이언트 어디에서 실행되는지 확인해야 한다.

## **2. 객체 데이터를 map으로 순회하기**

### **문제 상황**

라이엇 API에서 가져온 챔피언 데이터는 다음과 같은  **객체 형태**로 제공된다.

{ 챔피언1영문이름: { 챔피언1  정보 }, 챔피언2영문이름: { 챔피언2  정보 }, ... }

객체는 map 메서드를 사용할 수 없기 때문에 데이터를 순회하려면  **배열로 변환**해야 했다.

  
처음에는 Object.values를 사용해 값만 배열로 변환했지만, 챔피언 이미지를 불러오기 위해 영문 이름(키 값)도 필요했다.

### **해결 방법: Object.entries 사용**

Object.entries를 사용하면 객체의  **키-값 쌍을 배열 형태로 변환**할 수 있다.  
이를 활용해 챔피언 데이터를 순회하며 이미지와 이름을 렌더링했다.

```
const  Champions  =  async () => {

const  fetchChampionData  =  async ():  Promise<ChampionData> => {

const  res  =  await  fetch(

"[https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json](https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json)"

);

const { data } =  await  res.json();

return  Object.entries(data);

};

  

const  data  =  await  fetchChampionData();

  

return (

<div  className="flex min-h-screen flex-col items-center p-24">

<div>

{data.map(([key, value], i) => {

return (

<div  key={i}>

<Image

src={`[https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/](https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/)${key}.png`}

width={50}

height={50}

alt="챔피언 이미지"

></Image>

<p>{value.name}</p>

</div>

);

})}

</div>

</div>

);

};

export  default  Champions;
```

### **결과**

-   **챔피언 이미지**: key를 사용해 이미지 URL 생성.
-   **챔피언 이름**: value.name으로 챔피언 이름 출력.

## **3. 이미지가 불러와지지 않는 문제**

### **문제 상황**

Image 태그를 사용해 외부 URL에서 이미지를 가져오려 했지만, 이미지가 화면에 표시되지 않았다.

### **해결 방법: next.config.js 설정**

Next.js에서는 보안과 최적화를 위해 외부 URL의 이미지를 불러오려면  **next.config.js**  파일에서 설정이 필요하다.

```
/** @type  {import('next').NextConfig} */

const  nextConfig  = {

images: {

remotePatterns: [

{

protocol:  "https",

hostname:  "ddragon.leagueoflegends.com",

port:  "",

pathname:  "/cdn/**",

},

],

},

};

  

export  default  nextConfig;
```

### **설명**

-   **protocol**: 외부 URL의 프로토콜 (https).
-   **hostname**: 외부 이미지 URL의 도메인 (ddragon.leagueoflegends.com).
-   **pathname**: 이미지 경로 패턴 (/cdn/**).

### **결과**

위 설정을 통해  [https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/$](https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/$){key}.png 같은 URL에서 이미지를 불러올 수 있었다.

## **4. 타입 지정**

### **문제 상황**

fetchChampionData 함수는 Object.entries를 사용해 데이터를 변환한다.  
따라서 반환 값이 배열 형태가 되므로  **적절한 타입 지정**이 필요했다.

### **해결 방법: 타입 선언**

챔피언 데이터의 타입을 선언하여, fetchChampionData 함수에 적용했다.
```
export  type  ChampionData  = [string, Champion][] // [영문 이름, 챔피언 정보]

  

export  type  Champion  = {

key:  string;

name:  string;

title:  string;

blurb:  string;

};
```
```
const  fetchChampionData  =  async ():  Promise<ChampionData> => {

const  res  =  await  fetch(

"[https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json](https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json)"

);

const { data } =  await  res.json();

return  Object.entries(data); // [stringm Champion[]] 타입.

};
```

## **5. 타입 에러와 throw Error의 오해**

### **문제 상황**

fetchChampionData 함수에서 데이터를 받아오며, 성공 시 데이터 배열을, 실패 시 Error 객체를 반환하도록 설계했다.  
그러나 함수 반환 타입을 Promise<ChampionData | Error>로 지정했음에도, 아래와 같은 타입 에러가 발생했다.

```
import { ChampionData } from  "@/types/Champion";

  

const  fetchChampionData  =  async ():  Promise<ChampionData  |  Error> => {

try {

const  res  =  await  fetch(

"[https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json](https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json)"

);

const { data } =  await  res.json();

return  Object.entries(data);

} catch (error) {

console.log(error);

throw  Error("Failed to fetch champion data");  // 여기서 문제가 발생

}

};

  

타입  에러가  왜  뜨지?
```

### **문제 원인**

throw Error는 반환값을 생성하지 않는다.  
오히려 예외를 던지기 때문에, 함수 반환값을 타입으로 추론할 수 없게 만든다.  
따라서 Promise<ChampionData | Error>라는 타입 지정은 의미가 없어진다.

```
const  fetchChampionData  =  async ():  Promise<ChampionData> => {

try {

const  res  =  await  fetch(

"[https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json](https://ddragon.leagueoflegends.com/cdn/14.24.1/data/ko_KR/champion.json)"

);

const { data } =  await  res.json();

return  Object.entries(data);

} catch (error) {

console.log(error);

throw  new  Error("Failed to fetch champion data");

}

};
```

### **해결 방법**

throw 키워드를 사용하면 반환값 대신 예외가 발생하므로, 함수의 반환 타입을 명확히 Promise<ChampionData>로 설정하고 에러 처리를 따로 구현해야 한다.

## **6. 동적 라우트에서 Metadata 수정하기**

### **문제 상황**

Next.js에서 페이지의 Metadata는 layout.tsx 파일뿐만 아니라  **개별 페이지**에서도 설정할 수 있다.

  
이때, 정적인 Metadata는 간단히 선언할 수 있지만,  **동적 데이터를 기반으로 Metadata를 설정해야 할 경우**  추가적인 작업이 필요하다.

### **정적 Metadata 설정**

아래와 같이 간단히 선언해 Metadata를 설정할 수 있다.

export  const  metadata:  Metadata  = {

title:  "리그 오브 레전드 정보 앱",

description:  "롤 데이터를 제공해줍니다.",

};

### **동적 Metadata 생성**

동적으로 Metadata를 설정하려면 generateMetadata 함수를 사용해야 한다.  
예를 들어, 상세 페이지에서 특정 챔피언의 정보를 기반으로 제목과 설명을 설정할 수 있다.

#### **코드 예제**

```
export  async  function  generateMetadata({

params,

}: {

params: { id:  string };

}):  Promise<Metadata> {

const { id } =  params;

const  ChampionDetailData  =  await  fetchChampionDetailData(id);

  

return {

title:  `챔피언 정보 : ${ChampionDetailData.name}`,

description:  `${ChampionDetailData.name}의 데이터를 제공합니다.`,

};

}
```

### **설명**

1.  **generateMetadata 함수**
    -   동적 라우트의 params를 인수로 받아 필요한 데이터를 가져온다.
    -   가져온 데이터를 기반으로 Metadata 객체를 생성해 반환한다.
2.  **Metadata 타입**
    -   Next.js에서 제공하는 타입으로, Metadata 객체의 구조를 명확히 정의할 수 있다.
    -   import { Metadata } from "next";로 간단히 가져올 수 있다.

## **7. 환경 변수 설정.**

### **문제 상황**

```
import { Rotation } from  "@/types/Rotation";

  

export  const  fetchRotData  =  async ():  Promise<{

freeChampionIds:  Rotation;

freeChampionIdsForNewPlayers:  Rotation;

}> => {

const  API_KEY  =  process.env.NEXT_PUBLIC_RIOT_API_KEY;

try {

const  res  =  await  fetch(

`[https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=](https://kr.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=)${API_KEY}`

);

const  data  =  await  res.json();

const { freeChampionIds, freeChampionIdsForNewPlayers } =  data;

return { freeChampionIds, freeChampionIdsForNewPlayers };

} catch (error) {

console.log(error);

throw  error;

}

};
```

해당 로직에서 API_KEY를 받아오지 못 하고 계속 undefined로 표시되는 문제가 있었다.

### **문제 원인**

NEXT_PUBLIC_RIOT_API_KEY="API_KEY"

클라이언트 사이드에서 env를 통해 데이터를 받아올 때는, NEXT_PUBLIC_을 앞에 붙어주어야 한다.

## **8. TanStack Query와 타입 지정**

### **문제 상황**

다음과 같은 코드에서, rotData는 API로부터 데이터를 가져오기 전까지는 undefined 상태다.  
이로 인해, 데이터가 없는 동안 rotData를 처리하려고 하면 타입 에러가 발생한다.

```
rotData?.freeChampionIds.map((id) => {

return (

<div

className="border rounded p-4 hover:shadow-lg"

key={mappedData?.[id].id}

>
>
```
### **해결 방법: 타입 지정**

rotData와 mappedData가 API 호출 전에는 undefined일 수 있음을 명시적으로 타입에 포함해야 한다.  
이를 위해  **타입스크립트의 유니온 타입**을 사용해 undefined를 추가했다.

```
type  RotationShowProps  = {

rotData:  rotData  |  undefined;

mappedData:  mappedData  |  undefined;

versionData:  string[] |  undefined;

};
```

#### **설명**

-   **파이프(|)**: undefined를 타입에 포함시켜 데이터가 아직 없는 상태를 처리 가능.
-   **결과**: 데이터 로딩 중에도 컴포넌트가 정상적으로 렌더링되며, 에러를 방지할 수 있다.

어차피 이 페이지는 tanstack을 사용해서 제작되었기 때문에, fetch가 pending 상태일 경우 다른 컴포넌트를 보여주기에 크게 상관이 없다.

## **9. 라우트 핸들러의 적절한 사용**

### **문제 상황**

페이지 컴포넌트에서 데이터를 처리하는 비즈니스 로직이 복잡해지는 상황이 발생했다.  
다음과 같은 로직들이 모두 페이지 컴포넌트에 포함되어 있었다:

1.  챔피언 데이터를 가져와 Map 구조로 변환.
2.  Map을 사용해 로테이션 챔피언 정보를 조회.
3.  데이터를 화면에 렌더링.

### **해결 방법: 라우트 핸들러 사용**

라우트 핸들러에서 데이터를 가공해  **정제된 데이터**를 반환하도록 변경했다.  
이를 통해 페이지 컴포넌트는 데이터 렌더링에만 집중할 수 있게 되었다.

#### **라우트 핸들러 코드**
```
export  async  function  GET() {

const  versionData  =  await  getLatestVersion();

const  champData  =  await  fetchChampionData(versionData[0]);

const  rotData  =  await  fetchRotData();

const  mappedData  = (() => {

const  map  =  new  Map();

champData.forEach((champ) => {

map.set(Number(champ.key), {

id:  champ.id,

name:  champ.name,

title:  champ.title,

});

});

return  Object.fromEntries(map);

})();


  

return  NextResponse.json({ rotData, mappedData, versionData });
```

### **핸들러를 사용한 데이터 가공**

라우트 핸들러를 활용하면 데이터를 서버 측에서 가공하여 클라이언트에 전달할 수 있다.  
위 코드에서는 다음과 같은 작업을 라우트 핸들러에서 처리했다:

1.  **챔피언 데이터 가공**
    -   Map을 생성해 챔피언 정보를 정리.
    -   Object.fromEntries를 사용해 객체 형태로 변환.
2.  **로테이션 정보와 가공된 데이터를 통합**
    -   한 번의 요청으로 필요한 모든 데이터를 클라이언트에 전달.

### **페이지 컴포넌트에서 데이터 사용**

정제된 데이터를 사용해 클라이언트에서 간단히 렌더링을 처리할 수 있다.

#### **컴포넌트 코드**
```
const { data, isPending, isError, refetch } =  useQuery<{

rotData:  rotData;

mappedData:  mappedData;

versionData:  string[];

}>({

queryKey: ["champData"],

queryFn:  async () => {

const  res  =  await  fetch("api/rotation");

const  data  =  await  res.json();

return  data;

},

});
```
