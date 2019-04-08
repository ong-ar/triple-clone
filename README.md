## 트리플 메인사이트 클론

- react with typescript
- Link: [triple.ong-ar.com][https://triple.ong-ar.com]

### 1. 설치

```
$ create-react-app my-app --scripts-version=react-scripts-ts
```

- 추가 패키지

```
$ yarn add react-router-dom && yarn add @types/react-router-dom --dev

$ yarn add styled-components && yarn add @types/styled-components@4.1.8 --dev # react-native global.d.ts 중복 이슈로 4.1.8 설치

$ yarn add react-on-screen # 화면 렌더링

$ yarn add react-countup # 숫자 카운트
```

### 2. 섹션2

#### 요청사항
- 350만 명의 사용자, 21만 개의 리뷰, 650만 개의 저장 등 문구에서 숫자는 0부터 증가합니다.
- 좌측 이미지 --> 사용자, 리뷰, 저장 문구 --> 수상 내역 순으로 화면에 보여집니다.
- 모든 애니메이션의 duration은 700ms이고, 3개의 애니메이션은 100ms 간격으로 차례로 시작합니다.

#### 변경사항
- 400ms 간격으로 변경: 100ms 간격으로 요청 시 거의 인지가 불가능하여 간격을 100ms -> 400ms 으로 변경
