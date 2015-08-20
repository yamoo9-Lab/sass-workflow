## Sass Script 3

#### yamoo9 - Sass Library 활용

```sh
.
├── _yamoo9.sass
└── part
    ├── functions
    │   ├── _functions.sass
    │   └── part
    │       ├── _photoshop.sass
    │       └── _unit.sass
    ├── mixins
    │   ├── _mixins.sass
    │   └── part
    │       ├── _baseline.sass
    │       ├── _css3.sass
    │       ├── _css3_bg_patterns.scss
    │       ├── _dim.sass
    │       ├── _layout.sass
    │       ├── _modernizr.sass
    │       ├── _mq.sass
    │       ├── _navigation.sass
    │       ├── _rem.sass
    │       ├── _ribbon.scss
    │       ├── _square.sass
    │       └── _triangle.scss
    └── placeholders
        ├── _placeholders.sass
        └── part
            ├── _accessible.sass
            ├── _align.sass
            ├── _clearfix.sass
            ├── _image-replace.sass
            └── _reset.sass
```

```sass
//
 * --------------------------------
 * 모듈 호출
 * --------------------------------
@import libs/normalize/normalize
@import libs/yamoo9/yamoo9

body
	// margin: 0
	+margin($top: PX2REM(100px), $bottom: PX2REM(120px))

.wrapper
	+container( PX2REM(1200px) )
	+position(relative, $top: -10px)
	// width: 1200px
	// margin:
	// 	left: auto
	// 	right: auto

	[id]
		+position($top: -20px, $bottom: -20px)

#demo1
	+square(100px, #FC414B)

#demo2
	+triangle(20px, $direction: left)
	// +square-center-pos(200px, #25A04D)

.triangle_up
	+triangle-up(10px, #2CC2BE)
```

-

#### [Bourbon](http://bourbon.io) 라이브러리 활용

```sh
# Bourbon 설치
$ gem install bourbon

# Bourbon 라이브러리 호출
$ sass -r bourbon -w -t compact sass:css
```

```sass
//
 * --------------------------------
 * Bourbon 믹스인 라이브러리 호출
@import bourbon

#app
	+position(absolute, 10px null null 200px)
	+size(90% 100vh)
	+triangle(12px, gray, down)

	$width: 60%
	+calc(width, "#{$width} - 80px")
```

-

#### 변수 스코프와 `@content`

```sass
//
 * --------------------------------
 * 변수 스코프와 @content
 * --------------------------------
// 전역 (Global Scope)
$color: red

=local-scope($color: hotpink)
	@content
	// $color는 지역 변수가 사용 됨.
	background: $color


.tester
	+local-scope
		// $color 전역 변수 사용 됨.
		color: $color
		font-size: 12px
```

-

#### Sass 조건문 `@if`, `@else if`, `@else`

```sass
//
 * --------------------------------
 * Sass 조건문 @if, @else if, @else
 * --------------------------------

// 'light', 'red', 'green', 'blue', 'gray', 'dark'
$assign-theme: 'dark'
$dark-bg-color: #091918
$dark-fg-color: lighten($dark-bg-color, 40%)
$light-bg-color: #B6EEEA
$light-fg-color: darken($light-bg-color, 40%)

=set-theme($theme: dark)
	@debug $theme
	// content: $theme
	@if $theme == 'dark'
		background: $dark-bg-color
		color: $dark-fg-color
	@else if $theme == 'light'
		background: adjust-hue($light-bg-color, 215deg)
		color: rgba($light-fg-color, 30%)
	@else if $theme == 'red'
		background: adjust-hue($light-bg-color, 35deg)
		color: rgba($light-fg-color, 60%)
	@else if $theme == 'green'
		background: adjust-hue($light-bg-color, 85deg)
		color: rgba($light-fg-color, 90%)
	@else
		background: adjust-hue($light-bg-color, 125deg)
		color: rgba($light-fg-color, 10%)

#app
	margin: 10px
	+set-theme('coffee')
```