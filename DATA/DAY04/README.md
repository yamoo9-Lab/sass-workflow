## 4일차 수업 내용 요약

### Sass 기본기(Basic)

- 스타일 모듈 분리/관리 `@import`
- 주석(`//`, `/**/`)
- 중첩 규칙/속성
- `&` 부모 참조 선택자
- `%` 플레이스 홀더 선택자
- `@extend` 상속

-

### PSD → HTML/Sass 제작

Sass 중고급(Advanced)에 들어가기에 앞서 공부한 Sass 기본기(Basic)를 활용하여 웹 사이트를 제작해봅니다.
아래 웹 사이트 시안(`PSD`)을 다운로드 받아, `HTML`/`Sass`로 웹 데이터 화해보세요.

[웹사이트 시안, PSD 다운로드 ┓](http://me2.do/xm8jQQTk)

![PSD2Sass](../../IMAGES/psd2sass.png)

-

### PSD → HTML+Sass 워크플로우
```sh
.
├── css
│   ├── style.css
│   └── style.css.map
├── images
│   ├── guide
│   ├── header
│   ├── icons
│   ├── page
│   ├── photos
├── index.html
├── js
│   └── grid.js
└── sass
    ├── common
    │   ├── _common.sass
    │   └── part
    │       ├── _classes.scss
    │       ├── _normalize.scss
    │       └── _print.scss
    ├── grid
    │   ├── _grid-guide.sass
    │   └── _gs-1200-10-80-10.scss
    ├── page
    │   ├── _page.sass
    │   └── part
    │       ├── _contents.sass
    │       ├── _cta.sass
    │       ├── _footer.sass
    │       ├── _header.sass
    │       └── _nav.sass
    └── style.sass
```