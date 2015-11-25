## 3일차 [`2015.11.24`]

### 수업 진행 (Sass 기본 + 스크립트 문법)

- **PSD 레이아웃 → HTML+Sass(CSS) 프로세스**
- 스타일 모듈화(Modularization, `@import`)
- Sass 변수(`$`) 환경설정(`_config.sass`)
- 그리드 시스템 설계 및 재사용 가능한 모듈 패턴 활용(`_grid.sass`)
- 정적 PNG 이미지 그리드가 아닌, 동적 CSS3 Grandient 그리드 이미지 활용
- Sass 선택자 상속(Selector Inheritance, `@extend`)
- Sass 사칙연산(`+, -, *, /`) 기능 활용
- [예습] Sass 조건문(`@if`)

![Sass](../../../IMAGES/Sass.png)

#### 프로젝트 트리 구조(Project Tree Structure)

```bash
.
├── index.html
├── css/
│   ├── style.css        # Sass 모듈이 병합된 CSS
│   └── style.css.map    # Sass 개발 맵(Develop Map)
└── sass/
    ├── _config.sass     # 환경 설정
    ├── base/
    │   ├── _grid.sass   # 그리드 시스템
    │   └── _reset.sass  # 초기화
    ├── pages/
    │   ├── _guide.sass  # 가이드라인
    │   └── _layout.sass # 페이지 레이아웃
    └── style.sass       # 모듈 병합
```

-

#### `index.html`

```html
<div class="page container">
	<!-- .page.header -->
	<div class="banner-sale"></div>
	<div class="banner-event"></div>
	<!-- .page.big-banner -->
	<div class="banner-summer"></div>
	<!-- .page.contents -->
	<div class="content-headline"></div>
	<div class="content-banner-sale"></div>
	<div class="content-banner-accessories"></div>
	<div class="content-bag-banner-sale"></div>
	<div class="content-shoes-banner"></div>
	<!-- .page.footer -->
	<div class="footer-banner"></div>
</div>
```

-

#### `sass/style.sass`

```sass
//
 * --------------------------------
 * 환경 설정 모듈
 * --------------------------------
@import config
//
 * --------------------------------
 * 공통 모듈
 * --------------------------------
@import base/reset
@import base/grid
//
 * --------------------------------
 * 페이지 모듈
 * --------------------------------
@import pages/guide
@import pages/layout
```

-

#### `sass/_config.sass`

```sass
//
 * --------------------------------
 * 컬러 설정
 * --------------------------------
$u-red:             #EC003C
$u-cyan:            #226869
$u-light-yellow:    #ffedbf
$u-brown:           #8a3f11
$u-dark-gray:       #0d0026
$u-dark-orange:     #d76c2c
$u-dark-snow:       #e9d9a5
$u-dark-red-orange: #d9a156
$u-dark-green:      #6ea57b

//
 * --------------------------------
 * 그리드 시스템 설정
 * --------------------------------
$page-width: 960px

$columns-count: 8
$columns-color: rgba(#7045CF, 0.3)
$column-width:  $page-width/$columns-count

$leading:       10px
$leading-color: rgba($u-dark-gray, 0.4)

//
 * --------------------------------
 * 레이아웃 뷰 설정
 * --------------------------------
// @if 조건문 변수
// 값이 true이면 화면에 영역별 색상과 그리드가 그려짐
// 값이 false일 경우 화면에 색상/그리드 제거
$layout-view:       true
// 화면에 그려지는 영역별 색상 알파 값 설정 (0~1 실수)
$layout-view-alpha: 0.85
```

-

#### `sass/base/_reset.sass`

```sass
html
	overflow-y:             visible
	-webkit-font-smoothing: antialiased
	text-shadow:            1px 1px 1px rgba(0,0,0,0.004)

body
	margin: 0
	font:   100%/1.5 'Helvetica Neue', Helvetica, Verdana, Sans-Serif
	color:  #202020
```

-

#### `sass/base/_grid.sass`

```sass
.leading-10
	background-image: linear-gradient(180deg, transparent 90%, $leading-color)
	background-size:  $leading $leading

.container
	position: relative
	width:    $page-width
	height:   100vh
	margin:
		left:  auto
		right: auto

	&:after
		content: ''
		display: block
		clear:   both

	// @if 조건문
	// $layout-view 변수 값이 true이면 화면에 영역별 색상과 그리드가 그려짐
	// 값이 false일 경우 화면에 색상/그리드 제거
	@if $layout-view == true
		&:hover:before
			content:          ''
			position:         absolute
			z-index:          10000
			left:             0
			top:              0
			width:            100%
			height:           121vh
			background-image: linear-gradient(90deg, $columns-color 50%, transparent 50%)
			background-size:  $column-width*2 $column-width*2

	// 공통 class 모듈
	// ------------------------------------
	.fl
		float: left

	.fr
		float: right

	.pr
		position: relative

	.break
		clear: both

	// .grid-*
	// ------------------------------------
	.grid-1
		@extend .fl
		width: $column-width * 1

	.grid-2
		@extend .fl
		width: $column-width * 2

	.grid-3
		@extend .fl
		width: $column-width * 3

	.grid-4
		@extend .fl
		width: $column-width * 4

	.grid-5
		@extend .fl
		width: $column-width * 5

	.grid-6
		@extend .fl
		width: $column-width * 6

	.grid-7
		@extend .fl
		width: $column-width * 7

	.grid-8
		@extend .fl
		width: $column-width * 8

	// .push-*
	// ------------------------------------
	.push-1
		@extend .pr
		left: $column-width * 1

	.push-2
		@extend .pr
		left: $column-width * 2

	.push-3
		@extend .pr
		left: $column-width * 3

	.push-4
		@extend .pr
		left: $column-width * 4

	.push-5
		@extend .pr
		left: $column-width * 5

	.push-6
		@extend .pr
		left: $column-width * 6

	.push-7
		@extend .pr
		left: $column-width * 7

	.push-8
		@extend .pr
		left: $column-width * 8

	// .pull-*
	// ------------------------------------
	.pull-1
		@extend .pr
		left: $column-width * -1

	.pull-2
		@extend .pr
		left: $column-width * -2

	.pull-3
		@extend .pr
		left: $column-width * -3

	.pull-4
		@extend .pr
		left: $column-width * -4

	.pull-5
		@extend .pr
		left: $column-width * -5

	.pull-6
		@extend .pr
		left: $column-width * -6

	.pull-7
		@extend .pr
		left: $column-width * -7

	.pull-8
		@extend .pr
		left: $column-width * -8
```

-

#### `sass/pages/_guide.sass`

```sass
body:hover
	// @if 조건문
	// $layout-view 변수 값이 true이면 화면에 영역별 색상과 그리드가 그려짐
	// 값이 false일 경우 화면에 색상/그리드 제거
	@if $layout-view == true
		@extend .leading-10
		min-height: 100vh
```

-

#### `sass/pages/_layout.sass`

```sass
.banner-sale
	@extend .grid-4
	// @extend .push-2
	height: $leading * 24
	// @if 조건문
	// $layout-view 변수 값이 true이면 화면에 영역별 색상과 그리드가 그려짐
	// 값이 false일 경우 화면에 색상/그리드 제거
	@if $layout-view == true
		background: rgba($u-red, $layout-view-alpha)

.banner-event
	@extend .banner-sale
	// @extend .pull-2
	@if $layout-view == true
		background: rgba($u-cyan, $layout-view-alpha)

.banner-summer
	@extend .break
	height: $leading * 12
	@if $layout-view == true
		background: rgba($u-light-yellow, $layout-view-alpha)

.content-headline
	@extend .break
	@extend .grid-2
	@extend .push-2
	height: $leading * 24
	@if $layout-view == true
		background: rgba($u-dark-gray, $layout-view-alpha)

.content-banner-sale
	@extend .grid-2
	@extend .pull-2
	height: $leading * 24
	@if $layout-view == true
		background: rgba($u-brown, $layout-view-alpha)

.content-banner-accessories
	@extend .grid-2
	height: $leading * 24
	@if $layout-view == true
		background: rgba($u-dark-orange, $layout-view-alpha)

.content-bag-banner-sale
	@extend .grid-2
	@extend .fr
	height: $leading * 24 * 2
	@if $layout-view == true
		background: rgba($u-dark-snow, $layout-view-alpha)

.content-shoes-banner
	@extend .grid-6
	height: $leading * 24
	@if $layout-view == true
		background: rgba($u-dark-red-orange, $layout-view-alpha)

.footer-banner
	@extend .break
	height: $leading * 12
	@if $layout-view == true
		background: rgba($u-dark-green, $layout-view-alpha)
```

-

#### `css/style.css`

**$layout-view: true**일 경우, 변환 결과물 - 파일 용량 **4kb**

```css
html{overflow-y:visible;-webkit-font-smoothing:antialiased;text-shadow:1px 1px 1px rgba(0,0,0,0.004);}
body{margin:0;font:100%/1.5 "Helvetica Neue",Helvetica,Verdana,Sans-Serif;color:#202020;}
.leading-10,body:hover{background-image:linear-gradient(180deg,transparent 90%,rgba(13,0,38,0.4));background-size:10px 10px;}
.container{position:relative;width:960px;height:100vh;margin-left:auto;margin-right:auto;}
.container:after{content:"";display:block;clear:both;}
.container:hover:before{content:"";position:absolute;z-index:10000;left:0;top:0;width:100%;height:121vh;background-image:linear-gradient(90deg,rgba(112,69,207,0.3) 50%,transparent 50%);background-size:240px 240px;}
.container .fl,.container .grid-1,.container .grid-2,.container .content-headline,.container .content-banner-sale,.container .content-banner-accessories,.container .content-bag-banner-sale,.container .grid-3,.container .grid-4,.container .banner-sale,.container .banner-event,.container .grid-5,.container .grid-6,.container .content-shoes-banner,.container .grid-7,.container .grid-8{float:left;}
.container .fr,.container .content-bag-banner-sale{float:right;}
.container .pr,.container .push-1,.container .push-2,.container .content-headline,.container .push-3,.container .push-4,.container .push-5,.container .push-6,.container .push-7,.container .push-8,.container .pull-1,.container .pull-2,.container .content-banner-sale,.container .pull-3,.container .pull-4,.container .pull-5,.container .pull-6,.container .pull-7,.container .pull-8{position:relative;}
.container .break,.container .banner-summer,.container .content-headline,.container .footer-banner{clear:both;}
.container .grid-1{width:120px;}
.container .grid-2,.container .content-headline,.container .content-banner-sale,.container .content-banner-accessories,.container .content-bag-banner-sale{width:240px;}
.container .grid-3{width:360px;}
.container .grid-4,.container .banner-sale,.container .banner-event{width:480px;}
.container .grid-5{width:600px;}
.container .grid-6,.container .content-shoes-banner{width:720px;}
.container .grid-7{width:840px;}
.container .grid-8{width:960px;}
.container .push-1{left:120px;}
.container .push-2,.container .content-headline{left:240px;}
.container .push-3{left:360px;}
.container .push-4{left:480px;}
.container .push-5{left:600px;}
.container .push-6{left:720px;}
.container .push-7{left:840px;}
.container .push-8{left:960px;}
.container .pull-1{left:-120px;}
.container .pull-2,.container .content-banner-sale{left:-240px;}
.container .pull-3{left:-360px;}
.container .pull-4{left:-480px;}
.container .pull-5{left:-600px;}
.container .pull-6{left:-720px;}
.container .pull-7{left:-840px;}
.container .pull-8{left:-960px;}
body:hover{min-height:100vh;}
.banner-sale,.banner-event{height:240px;background:rgba(236,0,60,0.85);}
.banner-event{background:rgba(34,104,105,0.85);}
.banner-summer{height:120px;background:rgba(255,237,191,0.85);}
.content-headline{height:240px;background:rgba(13,0,38,0.85);}
.content-banner-sale{height:240px;background:rgba(138,63,17,0.85);}
.content-banner-accessories{height:240px;background:rgba(215,108,44,0.85);}
.content-bag-banner-sale{height:480px;background:rgba(233,217,165,0.85);}
.content-shoes-banner{height:240px;background:rgba(217,161,86,0.85);}
.footer-banner{height:120px;background:rgba(110,165,123,0.85);}
/*# sourceMappingURL=style.css.map */
```

-

#### `css/style.css`

**$layout-view: false**일 경우, 변환 결과물 - 파일 용량 **3kb**

```css
html{overflow-y:visible;-webkit-font-smoothing:antialiased;text-shadow:1px 1px 1px rgba(0,0,0,0.004);}
body{margin:0;font:100%/1.5 "Helvetica Neue",Helvetica,Verdana,Sans-Serif;color:#202020;}
.leading-10{background-image:linear-gradient(180deg,transparent 90%,rgba(13,0,38,0.4));background-size:10px 10px;}
.container{position:relative;width:960px;height:100vh;margin-left:auto;margin-right:auto;}
.container:after{content:"";display:block;clear:both;}
.container .fl,.container .grid-1,.container .grid-2,.container .content-headline,.container .content-banner-sale,.container .content-banner-accessories,.container .content-bag-banner-sale,.container .grid-3,.container .grid-4,.container .banner-sale,.container .banner-event,.container .grid-5,.container .grid-6,.container .content-shoes-banner,.container .grid-7,.container .grid-8{float:left;}
.container .fr,.container .content-bag-banner-sale{float:right;}
.container .pr,.container .push-1,.container .push-2,.container .content-headline,.container .push-3,.container .push-4,.container .push-5,.container .push-6,.container .push-7,.container .push-8,.container .pull-1,.container .pull-2,.container .content-banner-sale,.container .pull-3,.container .pull-4,.container .pull-5,.container .pull-6,.container .pull-7,.container .pull-8{position:relative;}
.container .break,.container .banner-summer,.container .content-headline,.container .footer-banner{clear:both;}
.container .grid-1{width:120px;}
.container .grid-2,.container .content-headline,.container .content-banner-sale,.container .content-banner-accessories,.container .content-bag-banner-sale{width:240px;}
.container .grid-3{width:360px;}
.container .grid-4,.container .banner-sale,.container .banner-event{width:480px;}
.container .grid-5{width:600px;}
.container .grid-6,.container .content-shoes-banner{width:720px;}
.container .grid-7{width:840px;}
.container .grid-8{width:960px;}
.container .push-1{left:120px;}
.container .push-2,.container .content-headline{left:240px;}
.container .push-3{left:360px;}
.container .push-4{left:480px;}
.container .push-5{left:600px;}
.container .push-6{left:720px;}
.container .push-7{left:840px;}
.container .push-8{left:960px;}
.container .pull-1{left:-120px;}
.container .pull-2,.container .content-banner-sale{left:-240px;}
.container .pull-3{left:-360px;}
.container .pull-4{left:-480px;}
.container .pull-5{left:-600px;}
.container .pull-6{left:-720px;}
.container .pull-7{left:-840px;}
.container .pull-8{left:-960px;}
.banner-sale,.banner-event{height:240px;}
.banner-summer{height:120px;}
.content-headline{height:240px;}
.content-banner-sale{height:240px;}
.content-banner-accessories{height:240px;}
.content-bag-banner-sale{height:480px;}
.content-shoes-banner{height:240px;}
.footer-banner{height:120px;}
/*# sourceMappingURL=style.css.map */
```