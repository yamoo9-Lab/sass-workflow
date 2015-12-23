## 11일차 [`2015.12.22`]

### 수업 진행 (Compass 프레임워크)

#### [Compass Framework Modules](http://compass-style.org/reference/compass/)
- Reset
	- `+global-reset()`
- Browser Support
	- `$debug-browser-support: true`
	- `$supported-browsers: reject(browsers(), ie)`
	- `$browser-minimum-versions: (ie: '7')`
- CSS3
	- `+box-sizing()`
	- `+opacity()`
	- `+inline-block()`
	- `+transition()`
	- `+flow-into(target)`
	- `+flow-from(target)`
- Helpers
	- Selectors
		- `nest()`
		- `headings()`
		- `enumerate()`
	- URLs
		- `image-url()`
		- `font-url()`
		- `stylesheet-url()`
	- Image Dimensions
		- `image-width()`
		- `image-height()`
	- Inline Data
		- `inline-image()`
		- `inline-font-files()`
- Typography
	- Lists
		- Horizontal List
			- `+horizontal-list()`