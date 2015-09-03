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


#### Susy2 글로벌 옵션(Global Options) 설정
```sass
/*
 * Susy Globa Settings
 * http://susydocs.oddbird.net/en/latest/settings/#global-defaults
 */
$susy: (

	// Flow
	// 문서의 읽는 방향 설정 (ltr, rtl)
	flow: ltr,

	// Math
	// 유동형(Fluid), 고정형(Static) width 설정 (fluid, static)
	// ※ 고정형으로 설정할 경우, column-width 값도 설정해줘야 함
	math: fluid,

	// Output
	// 레이아웃 출력 모드 설정 (float, isolate)
	// ※ 현재 Susy 버전은 Float을 메인으로 출력하지만, 향후 Flexbox 등 다양한 방법 지원 예정
	output: float,

	// Gutter Position
	// 거터의 방향 설정 (after, before, split, inside, inside-static)
	// ※ inside 설정은 Padding으로 처리됨
	gutter-position: after,

	// Container
	// 컨테이너 요소의 최대 폭 값을 설정 (auto, <length>)
	container: auto,

	// Container Position
	// 상위 요소를 기준으로 하는 컨테이너 요소의 레이아웃 정렬 (center, left, right, <length> * 2)
	container-position: center,

	// Columns
	// 컬럼의 총 개수 설정 (4, <number>, <list>)
	columns: 4,

	// Gutters
	// 거터의 폭 설정 (1/4, <gutter-width>/<column-width>)
	gutters: .25,

	// Column Width
	// 컬럼의 폭 설정 (false, null, <length>)
	column-width: false,

	// Global Box Sizing
	// 전역 CSS3 박스 사이즈 설정 (content-box, border-box)
	global-box-sizing: content-box,

	// Last Flow
	// 레이아웃 내의 마지막 요소 float 방향 설정 (to, from)
	last-flow: to,

	// Debug
	// 레이아웃 디버깅 환경 설정
	debug: (

		// 그리드 이미지: (hide, show, show-columns, show-baseline)
		// ※ 그리드 이미지를 보여줌, 만약 Compass vertical rhythms을 사용할 경우,
		// -line-height 설정 값에 따라 베이스라인을 그려줌.
		image: hide,

		// 그리드 컬럼 색상: (rgba(#66f, .25), <color>)
		color: rgba(#66f, .25),

		// 그리드 모드: (background, overlay)
		// ※ overlay 설정일 경우, 컨테이너 요소의 ::before 요소를 사용하여 오버레이 함.
		output: background,

		// 그리드 토글 버튼 방향: (top right, <direction>)
		// ※ overlay 설정에서만 사용 가능.
		toggle: top right
	),

	// Use Custom
	// 사용자 정의 설정
	use-custom: (

		// 사용자 정의 background-image() 믹스인 사용 유무: (true, false)
		// ※ Compass, Bourbon의 믹스인을 사용할 경우, true로 설정
		background-image: true,

		// 사용자 정의 background-size(), -origin(), -clip() 사용 유무 (false, true)
		background-options: false,

		// 사용자 정의 box-sizing() 사용 유무: (true, false)
		// ※ Compass, Bourbon의 믹스인을 사용할 경우, true로 설정
		box-sizing: true,

		// 사용자 정의 clearfix() 사용 유무: (false, true)
		clearfix: false,

		// 사용자 정의 rem() 사용 유무: (true, false)
		rem: true,

		// 사용자 정의 breakpoint() 사용 유무: (true, false)
		breakpoint: true,
	)
);
```
-

```sass
//
 * --------------------------------
 * Susy 주요 믹스인/함수
 * --------------------------------

 // 믹스인
 +container( auto | <length> )
 +span( <length> | ... )
 +gutters( <length> | ... )

 // 함수
 container( auto | <length> )
 span( <length> | ... )
 gutter( <length> | ... )
```

-

######Susy Toolkit
```sass

// 클리어(Clear)
// --------------------------------------------------------------------
+break()   // clear: both
+nobreak() // clear: none

// 초기화(Reset)
// --------------------------------------------------------------------
+alpah() | +first() // 흐름(Flow)이 rtl 일 경우 사용 권장: margin-left: 0
+omega() | +last()  // 흐름(Flow)이 ltr 일 경우 사용 권장: margin-right: 0

// 마진 공간(space - margin)
// --------------------------------------------------------------------
+push() // 밀어넣기 (margin-left (+))
+pull() // 잡아당기기 (margin-right (-))

// 패딩 공간(space - padding)
// --------------------------------------------------------------------
+prefix() // 그리드 요소 왼쪽에 패딩 공간 삽입 (padding-left)
+suffix() // 그리드 요소 오른쪽에 패딩 공간 삽입 (padding-left)
+pad()    //그리드 요소 양쪽에 패딩 공간 삽입: prefix() + suffix()

// 양쪽 마진 공간(space - margin both)
// --------------------------------------------------------------------
+pre()    // 그리드 요소 앞에 공간 삽입 (margin-left)
+post()   // 그리드 요소 뒤에 공간 삽입 (margin-right)
+squish() // 그리드 요소 양쪽에 공간 삽입: pre() + post()

// 상하좌우 마진/패딩 공간(space - margin/padding both)
// --------------------------------------------------------------------
+bleed() // 그리드 요소 상/우/하/좌에 마진/패딩 공간 동시 삽입 (margin/padding)

// 아이솔레이트 레이아웃
// --------------------------------------------------------------------
+isolate() // 서브픽셀 라운딩 이슈 해결 레이아웃 구현
+gallery() // 갤러리 스타일 레이아웃을 구현

// 상하좌우 마진/패딩 공간(space - margin/padding both)
// --------------------------------------------------------------------
+show-grid() // 디버깅 그리드를 화면에 그림

```