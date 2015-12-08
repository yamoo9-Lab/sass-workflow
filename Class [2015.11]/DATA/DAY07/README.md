## 7일차 [`2015.12.08`]

### 수업 진행 (Sass 중/고급 문법)

#### 믹스인 모듈 관리(Management Mixin Modules)

- **공통 모듈(Common Module)**
	- CSS3
	- 레이아웃(Layout)
	- 오래된 IE 핵(Old IE Hack)
- **쉐입 모듈(Shape Module)**
	- 사각형(Rectangle)
	- 원(Circle)
	- 삼각형(Triangle)

-

```sh
.
├── README.md
├── css
│   ├── style.css
│   └── style.css.map
├── index.html
└── sass
    ├── modules
    │   ├── common
    │   │   ├── _css3.scss
    │   │   ├── _for-old-ie.scss
    │   │   └── _layout.scss
    │   └── shapes
    │       ├── circle
    │       │   └── _circle.scss
    │       ├── rectangle
    │       │   └── _rectangle.scss
    │       └── triangle
    │           └── _triangle.scss
    └── style.sass
```

