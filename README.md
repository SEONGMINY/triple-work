# [TRIPLE 2022 공개채용] 프론트엔드 엔지니어 포지션

![pageImg](https://user-images.githubusercontent.com/58216191/176422250-a0fb95f3-338d-40cf-bea3-a9dfe5b3f446.gif)

## 프로젝트 실행 방법

---

```
git clone https://github.com/SEONGMINY/triple-work.git

npm install

npm start
```

---

## 사용한 기술 & 선택한 이유

> <img src="https://user-images.githubusercontent.com/52829400/175807845-93682465-c3b1-4e90-b04b-5d6c0114bc61.png" width="24" /> Typescript

- 런타임전에 오류를 발생시킬 코드를 미리 찾아낼 수 있음.
- 기존 자바스크립트 코드를 타입스크립트 코드로 마이그레이션하는데 이점이 있음.

> <img src="https://user-images.githubusercontent.com/52829400/175807884-ad2cb562-6f74-4b60-93ab-727d04bccbc0.png" width="24" /> Styled Component

- 컴포넌트의 props를 참조하여, 상황에 맞는 자유롭게 커스텀 컴포넌트를 만들 수 있음.
- CSS-in-JS 라이브러리.

---

## 후기

> ### 숫자가 올라가는 애니메이션 (useCounter)
>
> - 숫자 모두 2초동안 증가하고,동시에 끝나야합니다.
> - 증가 속도가 느려지는 효과를 구현해야 합니다.

위 2개의 구현 조건을 구현하기 힘들었습니다. 해당 기능을 구현하기 위해 여러 사이트와 `countUp` 라이브러리를 참고하였습니다. 이번 계기로 javascript를 한번 돌아보고 정리할 수 있는 시간이 되었던 것 같습니다.

> ### 참고 사이트
>
> [SPICYYOGHURT - EASING FUNCTIONS FOR JAVASCRIPT](https://spicyyoghurt.com/tools/easing-functions)
>
> [countUp.js 라이브러리](https://github.com/inorganik/countUp.js/blob/master/src/countUp.ts)
