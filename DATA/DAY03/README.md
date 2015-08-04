## 지난 시간 수업 내용 복습

#### 주석(Comments)

**`Scss` 코드**

```scss
/* 이 주석(코멘트)는
 * 여러 줄로 구성되어 있습니다.
 * 해당 주석은 CSS 문법에 어긋나지 않기 때문에
 * 컴파일 과정에서 CSS에 출력됩니다. */
body { color: black; }

// 이 주석은 한 줄로 구성된 주석입니다.
// 해당 주석은 CSS 문법에 어긋나기 때문에
// CSS 컴파일 시에 해석되어 출력되지 않습니다.
a { color: green; }
```

**↓**

**`CSS` 컴파일 결과**

```css
/* 이 주석(코멘트)는
 * 여러 줄로 구성되어 있습니다.
 * 해당 주석은 CSS 문법에 어긋나지 않기 때문에
 * 컴파일 과정에서 CSS에 출력됩니다. */
body { color: black; }

a { color: green; }
```

-

#### 중첩규칙(Nesting Rules), `&` 부모 참조 선택자

**`Scss` 코드**

```scss
#main p {
	color: #00ff00;
	width: 97%;

	.redbox {
		background-color: #ff0000;
		color: #000000;
	}
}
```

**↓**

**`CSS` 컴파일 결과**

```css
#main p {
	color: #00ff00;
	width: 97%;
}
#main p .redbox {
	background-color: #ff0000;
	color: #000000;
}
```

---

## 3일차 수업 내용 요약

### Sass 명령어 정리

```sh
$ sass [options] [input] [output]

$ sass -w -t compact -E utf-8 scss:css
```