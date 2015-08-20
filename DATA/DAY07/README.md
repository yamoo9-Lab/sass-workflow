## Sass Script 2

#### Sass 모듈 호출 [#](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import)

```sass
//
 * --------------------------------
 * 변수, 플레이스 홀더, 믹스인 모듈 호출
 * --------------------------------
@import modules/vars, modules/mixins, modules/classes

//
 * --------------------------------
 * CSS3 배경 패턴
 * --------------------------------
@import modules/_css3_patterns
```

-

#### Google 웹 폰트 호출, 보간법 [#](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)

```sass
//
 * --------------------------------
 * 웹폰트 모듈 호출
 * 보간법(Interpolation)
 * 사용 시, 주의할 점!
 * 보간법을 사용할 경우는 url() 사용
 * --------------------------------
@import url('http://fonts.googleapis.com/css?family=#{$webfont}')
```

-

#### 문서 기본 디자인

```sass
/**
 * 문서 기본
 * --------------------------------
 */

// HTML5 새로운 요소 블록 처리
+reset-html5-block

body
	margin: 0
	// Sass 변수 처리 시, font 속기형에 적용할 때 주의점!
	// $base+px 문자 접합
	font: $base+px/1.5 $noto-sans
	color: $text-color

	// CSS3 배경 패턴 믹스인 호출
	+bg-pattern-seigaiha
	// 베이스라인 배경이미지(CSS3 그레디언트) 처리
	+baseline(24px, $color: #AFA484)

a
	+hover-link(2px, 1px solid)
	color: $link-color
	&:hover, &:focus
		color: $link-hover-color

// 테이블 초기화
table
	@extend %reset-table
	// 테이블 셀 초기화
	th, td
		@extend %reset-table-cell
```

-

#### 페이지 디자인

```sass
/**
 * --------------------------------
 * #page
 * --------------------------------
 */

// CSS3 셀렉션 믹스인
+selection

#page
	// 컨테이너 믹스인
	+container(960px)

	h1
		// 포지션 믹스인
		+position(relative, $top: 48px)
		// 가로 세로 크기 믹스인
		+size($height: 40px)
		// 자간 믹스인
		+letter-spacing(-20)
		// 마진 믹스인
		+margin(0, $bottom: 0)
		font: 100 54+px/1 $monoton
		color: #B19D6F

	a
		// 호버링크 믹스인
		+hover-link(2px, 1px dashed)

	p
		+position($top: 96px)
		+size(700px)
		+margin(24px, $bottom: 24px)
		font-size: 12px
		line-height: 2
		color: #666
```

-

#### 변수

```sass
//
 * ---------------------------------------------
 * 변수
 * ---------------------------------------------

// ---------------------------------------------
// HTML5 New Elements
$html5-block: section, article, nav, header, footer, aside, main, figure, figcaption


// ---------------------------------------------
// Typography
$base: 16

// 글꼴
$serif: 'Times New Roman', Serif
$sans-serif: Verdana, Sans-Serif

$serif-ko: Gulim, Serif
$sans-serif-ko: 'Nanum Gothic', Dotum, Sans-Serif

// 구글 웹폰트
$noto-serif-font:   'Noto+Serif:400,700'
$noto-sans-font:    'Noto+Sans:400,700'
$monoton-font:      'Monoton'
$indie-flower-font: 'Indie+Flower'

$webfont: $monoton-font

$noto-sans: 'Noto Sans'
$noto-serif: 'Noto Serif'
$monoton: 'Monoton'
$indie-flower: 'Indie Flower'

// ---------------------------------------------
// Color System
$text-color: #181817

$link-color: #fc414b
$link-hover-color: darken($link-color, 30%)
```

-

#### 믹스인

```sass
//
 * --------------------------------
 * 믹스인
 * --------------------------------

// Grid-System
=baseline($width: 21px, $height: $width, $color: #22b7df, $deg: 180deg)
	min-height: 100vh
	&::before
		+position($z-index: -100, $top: 0, $left: 0)
		content:         ''
		width:           100%
		min-height:      inherit
		background:      linear-gradient($deg, transparent 96%, $color)
		background-size: $width $height

// 래퍼
=wrapper($width: auto)
	width: $width
	@extend %align-center

// 컨테이너
=container($max-width: auto, $left: auto, $right: $left)
	width: 100%
	max-width: $max-width
	margin:
		left:  $left
		right: $right

// 가로 세로 크기
=size($width: null, $height: null)
	width:  $width
	height: $height

// 마진
=margin($top: null, $right: null, $bottom: null, $left: null)
	margin-top:    $top
	margin-right:  $right
	margin-bottom: $bottom
	margin-left:   $left

// 패딩
=padding($top: null, $right: null, $bottom: null, $left: null)
	padding-top:    $top
	padding-right:  $right
	padding-bottom: $bottom
	padding-left:   $left

// 포지션
=position($method: absolute, $top: null, $right: null, $bottom: null, $left: null, $z-index: null)
	position: $method
	z-index:  $z-index
	top:      $top
	right:    $right
	bottom:   $bottom
	left:     $left

// CSS3
=box-sizing($size: border-box)
	-webkit-box-sizing: $size
	-moz-box-sizing: $size
	box-sizing: $size

=box-shadow($value...)
	-webkit-box-shadow: $value
	-moz-box-shadow: $value
	box-shadow: $value

=selection($background: #F1E4BE, $color: #69634F)
	::-moz-selection
		background: $background
		color: $color
	::selection
		background: $background
		color: $color

// 내비게이션
=navigation($gap: 10px)
	@extend %setting-navigation
	li
		margin-right: $gap

// 링크
=hover-link($padding-bottom, $border-bottom)
	text-decoration: none
	&:hover, &:focus
		padding-bottom: $padding-bottom
		border-bottom: $border-bottom

// HTML5
=reset-html5-block
	#{$html5-block}
		display: block

// Photoshop 값 설정과 동일한 결과 처리
=letter-spacing($value: -10)
	letter-spacing: $value/1000+em
```

-

#### 플레이스홀더 선택자 (상속)

```sass
//
 * --------------------------------
 * 모듈 클래스(플레이스홀더 클래스)
 * --------------------------------

//
 * --------------------------------
 * 정렬 모듈
%align-center
	margin:
		left: auto
		right: auto

%align-right
	margin:
		left: auto

//
 * --------------------------------
 * 초기화 모듈
%reset-link
	text-decoration: none
	&:focus
		outline: none

%reset-list
	margin:
		top: 0
		bottom: 0
	padding-left: 0
	list-style: none

%reset-table
	border-collapse: collapse
	border-spacing: 0

%reset-box-model
	margin: 0
	border: 0
	padding: 0

%reset-table-cell
	text-align: left
	font-weight: normal
	vertical-align: middle

%reset-font
	font: inherit
	font-size: 100%
	vertical-align: baseline

//
 * --------------------------------
 * Float
%fl
	float: left
%fr
	float: right

//
 * --------------------------------
 * 클리어픽스
%cf
	&::after
		content: ''
		display: block
		clear: both
	.lt-ie8 &
		zoom: 1

//
 * --------------------------------
 * 내비게이션
%setting-navigation
	ul
		@extend %reset-list
		@extend %cf
	li
		@extend %fl
	a
		@extend %reset-link

```

-

#### CSS3 배경 패턴

```sass
// * --------------------------------
// * CSS3 배경 패턴
// * --------------------------------

// * --------------------------------
// * Seigaiha
@mixin bg-pattern-seigaiha($color: #F5F5F5) {
	background-color: $color;
	background-image:
	radial-gradient(circle at 100% 150%, $color 24%, white 25%, white 28%, $color 29%, $color 36%, white 36%, white 40%, transparent 40%, transparent),
	radial-gradient(circle at 0    150%, $color 24%, white 25%, white 28%, $color 29%, $color 36%, white 36%, white 40%, transparent 40%, transparent),
	radial-gradient(circle at 50%  100%, white 10%, $color 11%, $color 23%, white 24%, white 30%, $color 31%, $color 43%, white 44%, white 50%, $color 51%, $color 63%, white 64%, white 71%, transparent 71%, transparent),
	radial-gradient(circle at 100% 50%, white 5%, $color 6%, $color 15%, white 16%, white 20%, $color 21%, $color 30%, white 31%, white 35%, $color 36%, $color 45%, white 46%, white 49%, transparent 50%, transparent),
	radial-gradient(circle at 0    50%, white 5%, $color 6%, $color 15%, white 16%, white 20%, $color 21%, $color 30%, white 31%, white 35%, $color 36%, $color 45%, white 46%, white 49%, transparent 50%, transparent);
	background-size: 100px 50px;
}
```