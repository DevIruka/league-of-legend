export type ItemData = [string, Item][];

export type Item = {
  name: string;
  description: string;
};

// name: '돌풍',
//     description: '<mainText><stats>공격력 <attention>65</attention><br>공격 속도 <attention>30%</attention><br>치명타 확률 <attention>25%</attention><br>이동 속도 <attention>12%</attention></stats><br><br><br><br><active>활성화</active> (0초)<br><active>폭우 II</active> <br>지정
//  방향으로 <buffedStat>지형을 넘어</buffedStat> 돌진하며 착지 지점 주변 체력이 가장 낮은 적에
// 게 발사체 3개를 날려 물리 피해를 입힙니다. 체력이 낮을수록 피해량이 증가합니다.</mainText>',
