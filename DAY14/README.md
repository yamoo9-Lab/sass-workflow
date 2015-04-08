## 14일차 수업 내용 요약
__Sass 애드온: Susy__<br>

Susy 그리드 시스템을 활용한 스마트한 레이아웃 디자인 방법론

---

######Susy2
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

---

### 수업자료 PDF 다운로드
<!-- [네이버 카페 게시글 첨부자료](http://cafe.naver.com/webstandardproject/3996) -->

---

### 과제
<!-- - 지난 수업 시간에 __공부한 내용 복습 열심히__ 하기!
- __Sass & Compass를 활용 사이트__ `Sass`, `Compass` ⇒ `CSS` 스타일링 -->