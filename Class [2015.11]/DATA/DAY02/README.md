## 2일차 [`2015.11.19`]

### 수업 진행 (Sass 기본 문법)

- 주석 (Comments)
    - 한 줄 (Single Line)
    - 여러 줄 (Multi Line)
- 중첩 (Nesting)
    - 규칙 (Rules)
    - 속성 (Properties)
- 부모 참조 선택자 (`&`)
- 선택자 상속 (Selector Inheritance: `@extend`)

-

#### style.sass

```sass
//
 * --------------------------------
 * 스타일 모듈 호출
 * 1. 초기화(Inititialization)
 * 2. 공통(Common)
 * --------------------------------
@import modules/init/reset
@import modules/common/common
//
 * --------------------------------
 * 그리드 시스템 (가이드)
 * --------------------------------
@import modules/grid-system/grid
//
 * --------------------------------
 * 페이지 모듈 호출
 * --------------------------------
@import pages/skip-to-content

body
    &:hover
        @extend .baseline
        min-height: 100vh

.container
    margin-top: 10px * 2

    &:last-of-type
        margin-bottom: 10px * 2

//
 * --------------------------------
 * 반응형 웹 스타일 모듈 호출
 * --------------------------------
@import modules/rwd/rwd
```

-

#### modules/common/_common.sass
```sass
//
 * --------------------------------
 * 모든 프로젝트에 공통으로 사용되는
 * 공통 class 모듈
 * --------------------------------

// 가운데 배치(margin)
// --------------------------------
.margin-center
    margin:
        left: auto
        right: auto

// Clearfix 모듈
// --------------------------------
// Legacy
.cf, .clearfix
    &:after
        content: ''
        display: block
        clear: both

// Micro
.micro-clearfix
    &:before,
    &:after
        content: ''
        display: table
    &:after
        clear: both

// Image Replacement 모듈
// --------------------------------
.ir
    overflow:    hidden
    display:     block
    text-indent: -9999em

// a11y-hidden 모듈
// 스크린리더가 읽을 수 읽을 수 있는
// 화면 감춤 class 모듈
// --------------------------------
.a11y-hidden
    overflow: hidden
    position: absolute
    clip:     rect(0 0 0 0) // IE 6,7
    clip:     rect(0,0,0,0)
    width:    1px
    height:   1px
    margin:   -1px
    border:   0
    padding:  0

    &.focusable:focus
        overflow: visible
        position: static
        clip:     auto
        width:    auto
        height:   auto
        margin:   0
```

-

#### modules/grid-system/_grid.sass
```sass
// 베이스라인
.baseline
    background: linear-gradient(180deg, transparent 90%, #fc414b)
    background-size: 10px 10px

// 컨테이너
.container
    @extend .margin-center
    // @extend .baseline
    @extend .cf
    width: 1200px
    // min-height: 100vh
    .fluid &
        width: auto
        max-width: 1200px

// 컬럼 레이아웃(Float)
[class*="col-"]
    float: left
    height: 80px

// 컬럼 개수에 따른 폭 설정
.col-1
    width: 100px * 1
.col-2
    width: 100px * 2
.col-3
    width: 100px * 3
.col-4
    width: 100px * 4
.col-5
    width: 100px * 5
.col-6
    width: 100px * 6
.col-7
    width: 100px * 7
.col-8
    width: 100px * 8
.col-9
    width: 100px * 9
.col-10
    width: 100px * 10
.col-11
    width: 100px * 11
.col-12
    width: 100px * 12

// %를 사용한 Fluid 그리드 컬럼 설정
.fluid
    .col-1
        width: 100% / (12/1)
    .col-2
        width: 100% / (12/2)
    .col-3
        width: 100% / (12/3)
    .col-4
        width: 100% / (12/4)
    .col-5
        width: 100% / (12/5)
    .col-6
        width: 100% / (12/6)
    .col-7
        width: 100% / (12/7)
    .col-8
        width: 100% / (12/8)
    .col-9
        width: 100% / (12/9)
    .col-10
        width: 100% / (12/10)
    .col-11
        width: 100% / (12/11)
    .col-12
        width: 100% / (12/12)

// 색상
.col-red
    background: rgba(#EC3B56, 0.45)
.col-green
    background: rgba(#37ECA6, 0.45)
.col-blue
    background: rgba(#308FE7, 0.45)
```

-

#### modules/rwd/_rwd.sass

```sass
.carousel
    position: relative
    width: 100%

    .carousel-item
        display: none
        &.active
            display: block

    // 미디어쿼리 구문 (중첩)
    @media screen and (min-width: 43.75rem)
        width: 90%
        margin:
            left: auto
            right: auto

    @media screen and (min-width: 68.75rem)
        width: 62.5rem
```

-

#### pages/_skip-to-content.sass

```sass
.skip-to-content

    a
        // class 모듈 상속(Inheritance)
        @extend .a11y-hidden
        @extend .focusable

        display: block
        border-radius: 0 0 4px 4px
        padding: 1em 2em
        text-decoration: none
        background: #303030
        color: #fff

        // 자바스크립트 미지원 환경에서 처리되는 스타일 코드
        .no-js &
            color: #000
            background: #fff
```

---

#### css/style.css

최적화(Optimize)된 CSS 코드 (Sass 모듈 파일 통합)

```css
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.margin-center,.container{margin-left:auto;margin-right:auto}.cf:after,.container:after,.clearfix:after{content:"";display:block;clear:both}.micro-clearfix:before,.micro-clearfix:after{content:"";display:table}.micro-clearfix:after{clear:both}.ir{overflow:hidden;display:block;text-indent:-9999em}.a11y-hidden,.skip-to-content a{overflow:hidden;position:absolute;clip:rect(0 0 0 0);clip:rect(0, 0, 0, 0);width:1px;height:1px;margin:-1px;border:0;padding:0}.a11y-hidden.focusable:focus,.skip-to-content a:focus{overflow:visible;position:static;clip:auto;width:auto;height:auto;margin:0}.baseline,body:hover{background:linear-gradient(180deg, transparent 90%, #fc414b);background-size:10px 10px}.container{width:1200px}.fluid .container{width:auto;max-width:1200px}[class*="col-"]{float:left;height:80px}.col-1{width:100px}.col-2{width:200px}.col-3{width:300px}.col-4{width:400px}.col-5{width:500px}.col-6{width:600px}.col-7{width:700px}.col-8{width:800px}.col-9{width:900px}.col-10{width:1000px}.col-11{width:1100px}.col-12{width:1200px}.fluid .col-1{width:8.33333%}.fluid .col-2{width:16.66667%}.fluid .col-3{width:25%}.fluid .col-4{width:33.33333%}.fluid .col-5{width:41.66667%}.fluid .col-6{width:50%}.fluid .col-7{width:58.33333%}.fluid .col-8{width:66.66667%}.fluid .col-9{width:75%}.fluid .col-10{width:83.33333%}.fluid .col-11{width:91.66667%}.fluid .col-12{width:100%}.col-red{background:rgba(236,59,86,0.45)}.col-green{background:rgba(55,236,166,0.45)}.col-blue{background:rgba(48,143,231,0.45)}.skip-to-content a{display:block;border-radius:0 0 4px 4px;padding:1em 2em;text-decoration:none;background:#303030;color:#fff}.no-js .skip-to-content a{color:#000;background:#fff}body:hover{min-height:100vh}.container{margin-top:20px}.container:last-of-type{margin-bottom:20px}.carousel{position:relative;width:100%}.carousel .carousel-item{display:none}.carousel .carousel-item.active{display:block}@media screen and (min-width: 43.75rem){.carousel{width:90%;margin-left:auto;margin-right:auto}}@media screen and (min-width: 68.75rem){.carousel{width:62.5rem}}
/*# sourceMappingURL=style.css.map */
```