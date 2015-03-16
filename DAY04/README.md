## 4일차 과정 시작 전 Mission 수행!!
1. 다음 Sass 코드가 CSS로 변경되면 __& 부모 참조 선택자 값에 해당되는 선택자__를 유추해보세요.
	```sass
/* Container: 컨테이너 클래스 설정 */
	.conatiner
		width: 70rem // 70rem ⇒ 1120px
		margin: 0 auto
		.row
			+clearfix() // Compass 프레임워크 믹스인 clearfix 호출
			.fl
				float: left
				margin-right: 0.625rem // 0.625rem ⇒ 10px
				.lt-ie7 &
					display: inline // 마진 버그 해결 (IE 6)
	```

2. 다음의 Sass 코드에서 __중첩 속성을 사용할 수 있는 부분__을 찾아 변경해보세요.
	```sass
	/* Google 웹폰트 ━ Source Sans Pro */
	@import url("http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400")

	/* blockquote: 인용문 설정 */
	blockquote
	  border-top-width: 0.0625rem // 0.0625rem ⇒ 1px
	  border-top-color: #52bfdb
	  border-bottom-width: 1.25rem // 1.25rem ⇒ 20px
	  margin: 0.625rem 1.25rem
	  border-bottom-color: #52bfdb
	  p
	  	font-family: "Source Sans Pro", Dotum, Sans-Serif
	  	font-size: 1.25rem
	  	letter-spacing: -0.003em // Photoshop 트래킹(Tracking) 설정 값
	  	font-weight: 300 // Light
		cite
			font-style: normal
			color: #8ac3d3
	```

3. 위에서 작성한 `sass` 문법 코드를 `scss` 문법 코드로 변경해보세요.<br>
	`sass` ⇔ `scss`

4. 변경 생성된 `CSS` 파일을 다시 `sass` 또는 `scss` 문법 코드로 변경해보세요.<br>
	`CSS` ⇔ `sass` 또는 `scss`

## 4일차 수업 내용 요약
__Sass 레퍼런스: 기본 사용법__<br>
Sass 선택자 상속, 대체 선택자, 호출 등

- Sass __선택자 상속__ `Selector Inheritance`
- Sass __대체 선택자__ `Placeholder Selector`
- Sass __호출__ `Import on Steroids`
- Sass __호출 제어__ `Partials`
- 미니 프로젝트 (공부한 Sass를 활용하여 웹페이지 스타일링)

-

### 수업자료 PDF 다운로드
[네이버 카페 게시글 첨부자료](http://cafe.naver.com/webstandardproject/3973)

-

### 과제
- 수업 시간에 __Sass를 활용하여 만들어 볼 사이트 준비__하기 (계속 진행~)
- 지난 수업 시간에 __공부한 내용 복습 열심히__ 하기! (늘 하는 걸로~)
- 미니 프로젝트 PSD 웹 디자인 시안 → HTML/Sass(CSS 변경)
