// main.test.js

/**
 * Helpful site: https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf
 */

const http = require('http'),
    request = require('supertest'),
    router = require('../router'),
    app = http.createServer(router.handle);

// Test Suite: Routes
describe('All Routes Function Correctly', function() {

    test('GET /', (done) => {
        request(app)
            .get('/')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('GET /courses.html', (done) => {
        request(app)
            .get('/courses.html')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('GET /contact.html', (done) => {
        request(app)
            .get('/contact.html')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('GET /thanks.html', (done) => {
        request(app)
            .get('/thanks.html')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('GET /error.html', (done) => {
        request(app)
            .get('/error.html')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test('POST /contact.html', (done) => {
        request(app)
            .post('/contact.html')
            .expect("Content-Type", "text/html")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });
});