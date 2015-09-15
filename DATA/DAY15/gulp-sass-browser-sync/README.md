# Gulp with Sass + Browser-sync ProjectKit `v0.0.3`

`Gulp`, `Node Sass`, `Browser Sync` 등을 활용하는 **프로젝트 툴킷**입니다.

## 설치
본 프로젝트 키트는 `Node.js` 환경에서 구동됩니다. 아래 목록의 플랫폼을 각각 설치해야 정상 작동됩니다. 프로젝트에 사용되는 `Sass` 엔진은 기본적으로 `Node Sass`를 사용합니다.

> **Platforms**

- [node.js](http://nodejs.org/)
- [Node Sass](https://www.npmjs.com/package/node-sass)

-

프로젝트 키트 내부적으로는 `Gulp`, `Bower`, `Browser-Sync` 도구를 사용함으로 <br>
아래 `CLI` 명령으로 도구를 설치한 후, 개발 의존 모듈을 설치해야 합니다.

> **Tools**

- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io)

```sh
# Gulp, Bower 글로벌 설치
npm install --global gulp bower
# package.json에 등록되어 있는 의존 모듈 설치
npm install
```

---

## 사용법 (Gulp 명령어)

```sh
# Browser-sync 구동 및 Sass, Watch 업무 수행
gulp

# HTML, Sass 변경 내용 관찰 후, 브라우저 화면 업데이트 자동 수행
gulp watch

# 생성된 css 폴더 제거 (초기화)
gulp clean

# Sass → CSS 변경 수행 (1회)
gulp sass
```