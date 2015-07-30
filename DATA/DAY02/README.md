## 1일차 수업 내용 요약

### Scss → Sass 변환 도구

```sh
$ sass-convert [OPTIONS] [INPUT] [OUTPUT]
$ sass-convert scss/style.scss sass/style.sass
```

### Sourcemap을 생성/비생성
```sh
$ sass -w --sourcemap=none sass/style.scss:css/style.css # --sourcemap=none
```