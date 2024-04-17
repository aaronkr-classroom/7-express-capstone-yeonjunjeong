// main.js
// Capstone 2: Express
"use strict";

const { application } = require("express");

// 앱 설정
const express = require("express"),
    app = express();

app.set("port", process.env.PORT || 3000);

app.get("/",(req, res) => {
    res.send("Welcome to confetti Cuisine!");
})
/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
const layouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.use(layouts);

/**
 * Listing 12.4 (p. 177)
 * body-parser의 추가
 */
app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

/**
 * Listing 12.6 (p. 178)
 * 각 페이지 및 요청 타입을 위한 라우트 추가
 */
app.get("/courses", homecontroller.showCourses);
app.get("/contact", homecontroller.showSignUp);
app.get("/contact", homecontroller.postedSignForm);


/**
 * Listing 12.12 (p. 184)
 * 에러 처리 라우트 
 */


// 3000번 포트로 리스닝 설정
app.listen(app.get("port"), () =>{
    console.log(
        `Server running at http://localhost:${app.get("port")}`
    );
});