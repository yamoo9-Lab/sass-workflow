## Sass Script 12일차

### __Sass Framework [`Compass`](http://compass-style.org/)__

신규 프로젝트에 `Compass`를 활용하고자 할 경우 명령어 목록

```sh
# Compass 프로젝트 생성 (기본)
$ compass create <프로젝트_디렉토리_이름>
# Compass 프로젝트 생성 (config.rb + sass 디렉토리만 생성)
$ compass create <프로젝트_디렉토리_이름> --bare
# Compass 프로젝트 생성 (문법 모드를 sass로 설정)
$ compass create <프로젝트_디렉토리_이름> --bare --syntax sass
# Compass 프로젝트 생성 (프로젝트 CSS, JS 디렉토리 설정)
$ compass create <프로젝트_디렉토리_이름> --bare --syntax sass --css-dir="css" --javascripts-dir="js"
$ compass create <프로젝트_디렉토리_이름> --bare --css-dir="css" --javascripts-dir="js" --images-dir="img"
```
-

기존 프로젝트에 `Compass`를 실행할 경우 사용되는 명령어 목록

```sh
# config/compass.rb 파일만 생성
$ compass config
# Compass 초기화(Initialization)
$ compass init
# Compass 설치(Install)
$ compass install compass
```

-

위 명령어를 사용하기 보다는 직접 `config.rb` 파일 만드는 것을 권장.

```sh
$ touch config.rb
```

-

그런 다음 아래 코드를 붙여 넣은 후, 파일 저장.

```ruby
# ------------------------------------------------------------------------
# Compass 설정 참고자료
# http://compass-style.org/help/documentation/configuration-reference/

# ------------------------------------------------------------------------
# Compass 플러그인 추가
require 'compass/import-once/activate'

# ------------------------------------------------------------------------
# 기본 언어 인코딩 설정
# Windows 사용자에게 주로 발생하는 오류(언어 인코딩: CP949)
Encoding.default_external = "utf-8"

# ------------------------------------------------------------------------
# 개발 또는 빌드 여부 환경설정
# :development
# :production
environment = :development

# ------------------------------------------------------------------------
# 프로젝트 폴더 경로 지정
http_path       = "/"
css_dir         = "css"
sass_dir        = "sass"
javascripts_dir = "js"
images_dir      = "images"
fonts_dir       = "fonts"

# ------------------------------------------------------------------------
# SASS => CSS 변경 시에 변경되는 아웃풋 스타일 설정
# :expanded
# :nested
# :compact
# :compressed
# output_style = :expanded
output_style = (environment == :production) ? :compressed : :expanded

# ------------------------------------------------------------------------
# 상대 경로 지정 설정
relative_assets = true

# ------------------------------------------------------------------------
# 변경된 내용 주석 처리 여부
line_comments = false

# ------------------------------------------------------------------------
# Sass 선호 문법 설정
preferred_syntax = :sass

# ------------------------------------------------------------------------
# Sourcemap 사용 유무
sourcemap = true

# ------------------------------------------------------------------------
# 스프라이트 이미지 설정

# generated_images_dir = "images/sprites"
# sprite_load_path     = [images_path]
# sprite_engine        = :chunky_png # :oily_png
# chunky_png_options   = {:compression => Zlib::BEST_COMPRESSION}

# 스프라이트 이미지 생성 엔진 참고URL
# [ chunky_png ] https://github.com/wvanbergen/chunky_png
# [ oily_png ] https://github.com/wvanbergen/oily_png
```

---

### __Sass Library [`Bourbon`](http://bourbon.io/)__

`Bourbon` 설치

```sh
# Susy2 그리드 프레임워크 설치
$ gem install bourbon
```

-

`config.rb` 파일에서 `Bourbon` 호출

```ruby
# ------------------------------------------------------------------------
# Compass 설정 참고자료
# http://compass-style.org/help/documentation/configuration-reference/

# ------------------------------------------------------------------------
# Compass 플러그인 추가
require 'compass/import-once/activate'
require 'bourbon' # ≪≪≪≪≪≪≪
```

-

`Sass` 파일 상단에서 `Bourbon` 호출

```scss
@import "bourbon";
```

---

### __Sass Grid Framework [`Susy`](http://susy.oddbird.net/)__

Susy 그리드 시스템을 활용한 스마트한 레이아웃 디자인 방법론

#### 설치/활용 with Compass
```sh
# Susy2 그리드 프레임워크 설치
$ gem install susy

# Compass + Susy를 활용한 신규 프로젝트를 생성할 경우, 명령어
$ compass create --using susy <프로젝트_디렉토리>

# 기존 Compass 프로젝트에 Susy 설치할 경우, 명령어
$ cd <기존_프로젝트_디렉토리>
$ compass install susy
```

-

#### Scss 파일에 Susy 호출
```scss
@import "susy";
```

-

#### Susy2 믹스인 & 함수

**믹스인**
- [M] `container` ＞ 레이아웃 컨텍스트 설정
- [M] `span` ＞ HTML 요소 레이아웃 설정

**함수**
- [F] `span()` ＞ width 값 반환
- [F] `gutter()` ＞ 거터(Gutter) 값 반환