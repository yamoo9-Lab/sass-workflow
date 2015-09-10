# Sass + Browser-sync ProjectKit `v0.0.2`

`Gulp`, `Sass`, `Browser Sync` 등을 활용하는 **프로젝트 툴킷**입니다.

## 설치
본 프로젝트 키트는 `Node.js`(필수사항), `Ruby`(선택사항) 환경에서 구동됩니다. 아래 목록의 플랫폼을 각각 설치해야 정상 작동됩니다. 프로젝트에 사용되는 `Sass` 엔진은 기본적으로 `Node Sass`를 사용합니다. 현재 `Node Sass`는 `Sass` 문법을 지원하지 않습니다. 오직 `Scss` 문법만 사용 가능합니다. `Sass` 문법을 사용하고자 한다면 `Ruby Sass`를 사용하세요. :-)

> **Platforms**

- [node.js](http://nodejs.org/)
- [ruby](http://rubyinstaller.org) `Windows 사용자일 경우, 설치 (선택사항)`

-

프로젝트 키트 내부적으로는 `Gulp`, `Bower`, `Browser-Sync` 도구를 사용함으로 <br>
아래 `CLI` 명령으로 도구를 설치한 후, 개발 의존 모듈을 설치해야 합니다.

> **Tools**

- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io)
- [Browser-Sync](http://www.browsersync.io/)

```sh
npm install --global gulp bower browser-sync
npm install
```

-

> **Ruby Tools**

`Ruby Sass` 또는 `Ruby Compass`를 사용할 경우에는 추가로 다음의 도구를 설치해야 합니다.

- [Ruby Sass](http://sass-lang.com/)
- [Compass](http://compass-style.org/)

```sh
gem install sass
gem install compass
```

---

## 사용법 (Gulp 명령어)

```sh
# Browser-sync 구동 및 Sass, Watch 업무 수행
gulp


# 생성된 css 폴더 제거 (초기화)
gulp clean


# HTML, Sass 변경 내용 관찰 후, 브라우저 화면 업데이트 자동 수행
gulp watch


# Sass → CSS 변경 수행 (1회)

## Node Sass를 활용
gulp sass
## Ruby Sass를 활용할 경우
gulp sass:ruby
## Compass를 활용할 경우
gulp sass:compass
```