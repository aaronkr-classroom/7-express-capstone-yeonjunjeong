# 캡스톤 2: Express 웹 애플리케이션 만들기

## 1. 프로젝트 초기화

First, initialize your project with `npm init` and install the dependencies with `npm install`.
먼저, `npm init`으로 프로젝트를 초기화하고 `npm install`로 의존성을 설치합니다.

- `express`
- `ejs`
- `express-ejs-layouts`
- `http-status-codes`
- `body-parser`
- `nodemon` (개발용 = `--save-dev` = 선택사항)

Add a `start` script to your `package.json` file so you can run your app with `npm start`.
`package.json` 파일에 `start` 스크립트를 추가하여 `npm start`로 앱을 실행할 수 있습니다.

- `"start": "nodemon main.js"`

## 2. 프로젝트 구조

Next, create the following directory structure and files (found on p. 175):
다음으로, 다음 디렉터리 구조와 파일을 만듭니다 (p. 175 참조):

```
. <-- 프로젝트 루트 디렉터리 목록
|____ public // 이 파일들은 제공되지만 원하면 변경할 수 있습니다
| |____ css
| |____ js
| |____ img
|____ views // 포함된 HTML 파일을 EJS로 변환해야 합니다
| |____ layout.ejs  // 각 페이지의 헤더와 푸터를 포함하는 EJS 레이아웃 코드를 추가하십시오
| |____ index.ejs
| |____ courses.ejs // 배열의 강좌를 반복하여 표시하십시오 (p. 182)
| |____ contact.ejs
| |____ thanks.ejs  // 폼이 제출된 후 이 페이지를 표시하십시오
| |____ error.ejs
|____ main.js               // Express 앱을 만드는 코드를 작성하십시오 (p. 176-177)
|____ controllers           // Express 앱의 라우트를 처리하는 코드를 작성하십시오
| |____ homeController.js   // 라우트 핸들러를 작성하십시오 (p. 178, 182)
| |____ errorController.js  // 에러 핸들러를 작성하십시오 (p. 184)
|____ package.json          // npm init으로 만드십시오
|____ package-lock.json     // npm install로 만드십시오
```

Create the files and directories listed above.
위에 나열된 파일과 디렉터리를 만듭니다.
