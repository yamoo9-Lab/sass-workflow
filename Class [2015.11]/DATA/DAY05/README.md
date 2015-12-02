## 5일차 [`2015.12.01`]

### 수업 진행 (Sass 중/고급 문법)

#### Sass 변수(`$`)

- 변수를 정의할 때 묶어서 관리할 파일(e.g: `_config.scss`)을 통해 제어한다.
- 변수를 정의하지 않아 오류가 발생할 확률이 있다면, [`!default`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_) 플래그를 사용해 오류를 방지한다.
- 나머지 연산으로 처리되거나, 문자열 안에 변수를 설정할 경우 [인터폴레이션(보간법, `#{$variable}`)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)을 사용한다.

-

#### [Sass 데이터 유형 (자료형)](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#data_types)

1. 비어있음 `null`
1. 숫자 `number`
1. 문자 `string`
1. 컬러 `color`
1. 불린 `boolean`
1. 리스트 `list`
1. 맵 `map`

-

#### Sass 연산자

- [사칙연산](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#number_operations)
	- `+`, `-`, `*`, `/`, `%`
- [비교연산](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#operations)
	- `>`, `<`, `>=`, `<=`, `==`, `!=`
- [논리곱(합)연산](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#boolean_operations)
	- `and`, `or`, `not`
- 리스트는 연산을 지원하지 않음. (대신, [Sass 리스트 함수](http://sass-lang.com/documentation/Sass/Script/Functions.html#list-functions)를 사용)
	- `length($list)`
	- `nth($list, $n)`
	- `join($list1, $list2[, $seperator])`
	- `append($list, $item[, $seperator])`
	- `zip($lists...)`
	- `index($list, $item)`
	- `seperator($list)`

-

```sass
// [Null, 비어있음(부정)]
$font-size: null !default
$line-height: null !default

// [Number, 숫자]
// 실수(1.45), 정수(0, 9, -10), 소수(0.8, -0.3), 단위 포함/미포함 숫자
$font-size: 14px
$line-height: 1.5
.wrapper
	font-size: $font-size     // $font-size 변수 값은 숫자(단위 포함)
	line-height: $line-height // $line-height 변수 값은 숫자(단위 미포함)

// [String, 문자]
// 홑따옴표, 쌍따옴표, 따옴표가 없는 경우도 있음
.button
	$font-family: 'Nanum Gothic', nanumgothic, Dotum, Sans-Serif
	font: #{$font-size}/#{$line-height} $font-family

// [Color, 컬러(색상)]
// #rrggbb, rgb(), hsl(), rgba(), hsla(), colorname
.button.primary
	background-color: #FC414B
	color: rgb(255,255,255)

// [Boolean, 불린(논리)]
// true, false
@if $show-layout == true
	.show-layout
		display: block

// [List, 리스트(배열)]
// 1em 2em 0em 4em / 'Times New Roman', Times, Serif
$button-list: ('play', 'pause', 'stop', 'rewind')

// [maps, 맵(객체)]
$headings: (h1: 42px, h2: 38px, h3: 32px, h4: 22px, h5: 16px, h6: 14px)
```

-

#### 데이터 유형을 체크하는 함수

[`type-of( $data-type )`](http://sass-lang.com/documentation/Sass/Script/Functions.html#type_of-instance_method)

-

#### Sass 컴파일 결과 출력 창에 '디버깅', '워닝', '에러'를 콘솔에 출력하는 지시어(Directive)

- [`@debug`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_5)
- [`@warn`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_6)
- [`@error`](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#_7)

-

```sass
$base-font-size: 10px !default
$font-size: null !default

@if type-of( $font-size ) != 'number'
	$font-size: $base-font-size * 1.2

@debug $font-size
```


