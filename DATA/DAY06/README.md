## Sass Script 1

1. 변수(Variables)

	```sass
	$container-width:      1200px
	$container-both-width: auto

	$center-box-width:    210px
	$center-box-height:   280px
	$center-box-bg-color: #FC414B
	$center-box-fg-color: darken($center-box-bg-color, 40%)

	//
	 * --------------------------------
	 * RWD, Media Queries

	$mobile: 320px
	$tablet: 640px
	$desktop: 1240px

	$html5-block: article, nav, header, footer, main, section, figure, figcaption
	```

2. 믹스인(Mixins)

	```sass
	// * --------------------------------
	// * 믹스인(Mixin)
	// * --------------------------------
	=reset-html5-block
		#{$html5-block}
			display: block

	=hover-link($padding-bottom: 0.1em, $border-bottom: 1px solid #333)
		text-decoration: none
		&:hover,
		&:focus
			padding-bottom: $padding-bottom
			border-bottom: $border-bottom

	=box-sizing($box)
		-webkit-box-sizing: $box
		-moz-box-sizing:    $box
		box-sizing:         $box

	%reset-list
		margin:
			top: 0
			bottom: 0
		padding-left: 0
		list-style: none

	=rotate($degree)
		-webkit-transform: rotate($degree)
		-ms-transform:     rotate($degree)
		-o-transform:      rotate($degree)
		transform:         rotate($degree)

	=skew($value)
		-webkit-transform: skew($value)
		-ms-transform:     skew($value)
		-o-transform:      skew($value)
		transform:         skew($value)

	=translate($x, $y)
		-webkit-transform: translate($x, $y)
		-ms-transform:     translate($x, $y)
		-o-transform:      translate($x, $y)
		transform:         translate($x, $y)

	=box-shadow($value)
		-webkit-box-shadow: $value
		-moz-box-shadow:    $value
		box-shadow:         $value
	```

3. 활용

```sass
//
 * --------------------------------
 * 변수 Variables
 * 믹스인 Mixins
 * --------------------------------
@import var
@import mixins


+reset-html5-block

//
 * --------------------------------
 * style.sass
 * --------------------------------

nav a
	+hover-link(0.2em, 1px solid red)

footer a
	+hover-link

aside li a
	+hover-link

// nav ul
// 	// +reset-list
// 	@extend %reset-list

// #navigation ul
// 	// +reset-list
// 	@extend %reset-list

// footer ul
// 	// +reset-list
// 	@extend %reset-list


body
	margin: 0

	// Scss
	// @include box-sizing;

	// Sass
	-webkit-box-sizing: border-box
	-moz-box-sizing:    border-box
	box-sizing:         border-box

//
 * --------------------------------
 * Media Queries
 * Mobile First
 * ~ 640px ~ 1240px

$mq-prop: min-width

// 사용자가 외부에서 설정 값을 지우거나, 변경했을 때
 정상적이지 않은 방법으로 설정되어 오류가 발생할 확률이 있기에
 !default 플래그를 사용하여 문제 오류에서 벗어날 수 있다.
 사용자 설정 값이 없을 때, 기본 값으로 사용 가능하다.
$tablet: 800px !default

// Mobile
#page
	padding: 10%

	// +box-shadow
	// -webkit-box-sizing: $box ???
	// -moz-box-sizing:    $box
	// box-sizing:         $box


	// Tablet
	@media screen and ($mq-prop: $tablet)
		padding: 1.25rem

	// Desktop
	@media screen and ($mq-prop: $desktop)
		padding: 14px
```