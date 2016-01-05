# CSS 애니메이션 라이브러리

- [hover.css](http://ianlunn.github.io/Hover/)
- [animate.css](https://daneden.github.io/animate.css/)
- [animate.sass](https://github.com/adamstac/animate.sass)

---

## hover.scss 사용법

### 1. hover.scss 다운로드

[hover.css GitHub](https://github.com/IanLunn/Hover)에 접속하여 `scss` 폴더 파일을 다운로드 한다.<br>
다운로드 후에는 폴더 이름을 적절하게 변경한다. 예) `scss` → `hover`

### 2. hover.scss 임폴트

`hover.sass` 파일을 CSS 클래스로 출력하려면 그대로 임포트하되, [플레이스홀더 선택자 방식을 사용하려면 수정](https://github.com/IanLunn/Hover/blob/master/scss/hover.scss#L22)해야 한다.

```sass
@import hover/hover
```

### 3. hover.scss 사용

[hover.css 데모](http://ianlunn.github.io/Hover/) 페이지를 참고하여 각 클래스 이름을 원하는 요소에 적용하면 된다.

#### hover.css 클래스 카테고리

-

**2D Transitions**

- hvr-grow
- hvr-shrink
- hvr-pulse
- hvr-pulse-grow
- hvr-pulse-shrink
- hvr-push
- hvr-pop
- hvr-bounce-in
- hvr-bounce-out
- hvr-rotate
- hvr-grow-rotate
- hvr-float
- hvr-sink
- hvr-bob
- hvr-hang
- hvr-skew
- hvr-skew-forward
- hvr-skew-backward
- hvr-wobble-horizontal
- hvr-wobble-vertical
- hvr-wobble-to-bottom-right
- hvr-wobble-to-top-right
- hvr-wobble-top
- hvr-wobble-bottom
- hvr-wobble-skew
- hvr-buzz
- hvr-buzz-out

-

**Background Transitions**

- fade
- back-pulse
- sweep-to-right
- sweep-to-left
- sweep-to-bottom
- sweep-to-top
- bounce-to-right
- bounce-to-left
- bounce-to-bottom
- bounce-to-top
- radial-out
- radial-in
- rectangle-in
- rectangle-out
- shutter-in-horizontal
- shutter-out-horizontal
- shutter-in-vertical
- shutter-out-vertical

-

**Icons**

- icon-back
- icon-forward
- icon-down
- icon-up
- icon-spin
- icon-drop
- icon-fade
- icon-float-away
- icon-sink-away
- icon-grow
- icon-shrink
- icon-pulse
- icon-pulse-grow
- icon-pulse-shrink
- icon-push
- icon-pop
- icon-bounce
- icon-rotate
- icon-grow-rotate
- icon-float
- icon-sink
- icon-bob
- icon-hang
- icon-wobble-horizontal
- icon-wobble-vertical
- icon-buzz
- icon-buzz-out

-

**Border Transitions**

- border-fade
- hollow
- trim
- ripple-out
- ripple-in
- outline-out
- outline-in
- round-corners
- underline-from-left
- underline-from-center
- underline-from-right
- reveal
- underline-reveal
- overline-reveal
- overline-from-left
- overline-from-center
- overline-from-right

-

**Shadow and Glow Transitions**

- shadow
- grow-shadow
- float-shadow
- glow
- shadow-radial
- box-shadow-outset
- box-shadow-inset

-

**Speech Bubbles**

- bubble-top
- bubble-right
- bubble-bottom
- bubble-left
- bubble-float-top
- bubble-float-right
- bubble-float-bottom
- bubble-float-left

-

**Curls**

- curl-top-left
- curl-top-right
- curl-bottom-right
- curl-bottom-left


### 4. hover.scss 아이콘(FontAwesome) 사용

[FontAwesome](https://fortawesome.github.io/Font-Awesome/) 아이콘을 활용할 경우, [FontAwesome Cheatsheet](https://fortawesome.github.io/Font-Awesome/cheatsheet/)를 참고하여 아래와 같은 방법을 사용한다.<br>

```sass
.hvr-icon-forward:before
	// FontAwesome Cheatsheet에서 원하는 아이콘의 유니코드 문자(fxxx)를 복사한 후
	// '\' 삽입 후 뒤에 붙여 넣는다.
	content: "\f001"
```

### 5. 네임스페이스(@namespace) 수정

`scss/_options.scss` 파일에서 [$nameSpace](https://github.com/IanLunn/Hover/blob/master/scss%2F_options.scss#L4) 값을 변경하면 접두사를 `hvr-`이 아닌 다른 것을 사용할 수 있다.<br>

```sass
// 네임스페이스 변경
$nameSpace: yamoo9

// hover.css 활용
.yamoo9-underline-from-center
	...
```


---

## animate.sass 사용법

### 1. animate.sass 다운로드

[animate.sass GitHub](https://github.com/adamstac/animate.sass)에 접속하여 `stylesheets` 폴더 파일을 다운로드 한다.<br>
다운로드 후에는 폴더 이름을 적절하게 변경한다. 예) `stylesheets` → `animate`

### 2. _animate.sass 임폴트

임포트할 파일은 `_animate.sass`뿐, 일반적인 방법으로 임포트하면 CSS로 컴파일되어 버리므로 Partial(`_`) 방식으로 가져온다.<br>

```sass
@import animate/animate
```

### 3. 애니메이션 환경 설정

애니메이션 설정을 변경하고자 한다면 아래 [믹스인](https://github.com/adamstac/animate.sass/blob/master/stylesheets%2Fanimate%2Fcss3%2F_animation.scss#L56)을 사용한다.<br>

```sass
+animation($name,$duration,$timing-function,$delay,$iteration-count,$direction,$prefix)
```

-

*[# CSS3 애니메이션 세부 설정 참고](http://rayuela.kr/tag/animation/page/2/)*

-

- `+animation-name(fadeIn)`<br>
	**애니메이션 이름 설정 (기본 값 fadeIn)<br>**
	옵션) none | @keyframe 이름
- `+animation-duration(1s)`<br>
	**애니메이션 지속시간 설정 (기본 값 1초)<br>**
	옵션) time (1s, 0.8s, 400ms)
- `+animation-timing-function(ease)`<br>
	**애니메이션 함수 (기본 값 ease)<br>**
	옵션) ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier(<number>, <number>, <number>, <number>)
- `+animation-delay(0.2s)`<br>
	**애니메이션 지연시간 설정 (기본 값 0.2초)<br>**
	옵션) time (1s, 0.8s, 400ms)
- `+animation-iteraion-count(1)`<br>
	**애니메이션 반복 회수 설정 (기본 값 1회)<br>**
	옵션) infinite | number (1, 4, ...)
- `+animation-direction(normal)`<br>
	**애니메이션 방향 설정 (기본 값 normal)<br>**
	옵션) normal | reverse | alternate | alternate-reverse
- `+animation-fill-mode(both)`<br>
	**애니메이션 실행 전/후 스타일 (기본값 both)<br>**
	옵션) forwards | backwards | both | none

-

### 4. 애니메이션 사용 예시

```sass
.button
	...
	&:hover,
	&:focus
		+animation(wobble) // animation 'wobble' 사용

.button
	...
	&:hover,
	&:focus
		+animation(wobble, 0.4s, ease-in-out) // animation 믹스인 인자 전달

.button
	...
	&:hover,
	&:focus
		+animation(wobble)      // animation 'wobble' 사용
		+animation-delay(1s)    // 지연시간 1초 설정
		+animation-duration(3s) // 지속시간 3초 설정
```

### 5. 애니메이션 카테고리

-

**Attention Seekers**

- bounce
- flash
- pulse
- rubberBand
- shake
- swing
- tada
- wobble
- jello

-

**Bouncing Entrances**
- bounceIn
- bounceInDown
- bounceInLeft
- bounceInRight
- bounceInUp

-

**Bouncing Exits**
- bounceOut
- bounceOutDown
- bounceOutLeft
- bounceOutRight
- bounceOutUp

-

**Fading Entrances**
- fadeIn
- fadeInDown
- fadeInDownBig
- fadeInLeft
- fadeInLeftBig
- fadeInRight
- fadeInRightBig
- fadeInUp
- fadeInUpBig

-

**Fading Exits**
- fadeOut
- fadeOutDown
- fadeOutDownBig
- fadeOutLeft
- fadeOutLeftBig
- fadeOutRight
- fadeOutRightBig
- fadeOutUp
- fadeOutUpBig

-

**Flippers**
- flip
- flipInX
- flipInY
- flipOutX
- flipOutY

-

**Lightspeed**
- lightSpeedIn
- lightSpeedOut

-

**Rotating Entrances**
- rotateIn
- rotateInDownLeft
- rotateInDownRight
- rotateInUpLeft
- rotateInUpRight

-

**Rotating Exits**
- rotateOut
- rotateOutDownLeft
- rotateOutDownRight
- rotateOutUpLeft
- rotateOutUpRight

-

**Sliding Entrances**
- slideInUp
- slideInDown
- slideInLeft
- slideInRight

-

**Sliding Exits**
- slideOutUp
- slideOutDown
- slideOutLeft
- slideOutRight


-

**Zoom Entrances**
- zoomIn
- zoomInDown
- zoomInLeft
- zoomInRight
- zoomInUp

-

**Zoom Exits**
- zoomOut
- zoomOutDown
- zoomOutLeft
- zoomOutRight
- zoomOutUp

-

**Specials**
- hinge
- rollIn
- rollOut

