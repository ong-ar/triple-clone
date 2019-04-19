## 트리플 메인사이트 클론

- react with typescript
- Link: [ong-ar.github.io/triple-clone](https://ong-ar.github.io/triple-clone)

### 1. 설치

```
$ create-react-app triple-clone --scripts-version=react-scripts-ts
```

- 추가 패키지

```
$ yarn add react-router-dom && yarn add @types/react-router-dom --dev

$ yarn add styled-components && yarn add @types/styled-components@4.1.8 --dev # react-native global.d.ts 중복 이슈로 4.1.8 설치

$ yarn add react-on-screen # 화면 렌더링

$ yarn add react-countup # 숫자 카운트
```

### 2. 프로젝트

#### 디렉토리 구조
```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    Components/
      Section/
        index.tsx or (container.tsx / presenter.tsx / index.ts)
        Components/
          index.tsx or (container.tsx / presenter.tsx / index.ts)
    Routes/
      App/
        index.tsx or (container.tsx / presenter.tsx / index.ts)
    Images/
      1.png
```

#### Programming
- functional programming + hooks

#### Container & Presenter
- container: state 및 데이터 관리 및 기능
- presenter: 마크업 및 스타일

#### Style (css)
- styled-components 사용
- 필요하다면 css 파일도 사용

### 3. 느낀 점

- 서버 통신 없는 프로젝트일 경우 container, presenter 를 굳이 나눌 필요는 없을 것 같다.
- style 을 props 로 관리하는 범위를 정하는 것이 어려웠다.
- 컴포넌트를 최소 단위로 가져갈 것인지 (예: button, input) 고민하게 된다.
- 디렉토리 구조도 여러 가지로 생각해야 될 것 같다.
