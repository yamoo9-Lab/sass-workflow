## 6일차 [`2015.12.03`]

### 수업 진행 (Sass 중/고급 문법)

#### 믹스인(Mixin)

- 정의(Define: `@mixin`)
- 호출(Call: `@include`)
- 확장(인자, Arguments)
	- 키워드 인자(`$Keyword`)
	- 복수 인자`...`

---

#### `sass/modules/_placeholder.sass`

```sass
%a11y-hidden
	overflow: hidden
	position: absolute
	clip:     rect(0 0 0 0) // IE 6,7
	clip:     rect(0,0,0,0)
	width:    1px
	height:   1px
	margin:   -1px
	border:   0
	padding:  0

	&%focusable:focus
		overflow: visible
		position: static
		clip:     auto
		width:    auto
		height:   auto
		margin:   0

%clearfix::after
	content: ''
	display: block
	clear: both
	.lt-ie8 &
		zoom: 1
```

#### `sass/modules/_mixins.sass`

```sass
@import placeholder

//
 * --------------------------------
 * Sass 믹스인(Mixin)
 * --------------------------------
 * 정의: @mixin 믹스인이름() {}
 * 호출: @include 믹스인이름()
 * --------------------------------
 * SCSS 문법
 * --------------------------------
 * @mixin box-sizing {
 * 	-webkit-box-sizing: border-box;
 * 	-moz-box-sizing: border-box;
 * 	box-sizing: border-box;
 * }
 * --------------------------------
 * Sass 문법
 * --------------------------------
 * =box-sizing
 * 	-webkit-box-sizing: border-box
 * 	-moz-box-sizing: border-box
 * 	box-sizing: border-box
 * --------------------------------

// [초기화] Global
=global-reset
	+reset-box-model
	+reset-table
	+reset-list
	+reset-img

// [초기화] 박스모델
=reset-box-model
	margin: 0
	border: 0
	padding: 0

// [초기화] 테이블
=reset-table
	border-collapse: collapse
	border-spacing: 0
	caption
		@extend %a11y-hidden

// [초기화] 목록
=reset-list
	nav, [role=navigation], .gnb, .lnb, .gallery
		+_reset-list
=_reset-list
	margin:
		top: 0
		bottom: 0
	list-style: none
	padding-left: 0

// [초기화] li > img 하단 공백 제거
// [초기화] a > img 테두리 제거
=reset-img
	li img, li a img
		vertical-align: bottom
	a img
		border: 0

// [초기화] 내비게이션
=navigation
	ul
		+reset-list
		@extend %clearfix
	li
		&:last-child, .last
			margin-right: 0
		img
			+reset-img

// [초기화] HTML5 새로운 요소 블록 설정
=set-html5-elements-block
	$html5-new-elements: null !default
	@if $html5-new-elements != null
		#{$html5-new-elements}
			display: block

// ------------------------------------------------------------------------

// [레이아웃] 박스 크기 설정
=box-sizing
 * 	-webkit-box-sizing: border-box
 * 	-moz-box-sizing: border-box
 * 	box-sizing: border-box

// [레이아웃] position 설정
=position($position-type: relative, $left: null, $top: null, $right: null, $bottom: null)
	position: $position-type
	left: $left
	top: $top

// [레이아웃] float 설정
=float($direction: left, $margin: null)
	float: $direction
	margin: $margin

// ------------------------------------------------------------------------

// 정적 믹스인
=link-style-static
	+link-style()

// 동적 믹스인(확장)
=link-style($color: #808080, $padding-bottom: 0.001em, $border-bottom: 1px solid)
	color: $color
	text-decoration: none
	&:hover, &:focus
		padding-bottom: $padding-bottom
		border-bottom: $border-bottom

// 인자를 여러 개 설정해야 할 경우
=box-shadow($args...)
	-webkit-box-shadow: $args
	-moz-box-shadow: $args
	box-shadow: $args
```

#### `sass/style.sass`

```sass
@import config
@import modules/mixins

+set-html5-elements-block

$pos-type: static

.aside
	.parent
		+position($top: 20px)
	.child
		+pos(absolute, -30px, -10px)

header
	+pos()
	.brand
		+pos(absolute, 100px)

footer
	+pos($position-type: fixed, $left: 0px, $bottom: 0px)

.gnb li
	+float(right, 0 10px 0)

a
	+link-style(#333, 0.012em, 2px solid darkred)

	.test &
		+link-style(#25A04D, 0.02em, 4px solid hotpink)

a
	display: inline-block
	vertical-align: middle
	padding: 1em 1.4em
	+box-shadow(3px 0 4px red, 2px 2px 10px 9px blue)
```