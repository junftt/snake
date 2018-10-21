//常数存起来
//不要去写死
window.onload = function () {
    var canvas = document.getElementById('playground');
    var scoreEle = document.getElementById('score');
    var ctx = canvas.getContext('2d');
    const BLOCK_SIZE = 10; // 常量只能初始化时候赋值
    const HALF_BLOCK_SIZE = BLOCK_SIZE / 2;
    const howmany_beans = 7;
    var CANVAS_WIDTH = canvas.width;
    var CANVAS_HEIGHT = canvas.height;
    //
    var horizontal_speed = 0;
    var vertical_speed = -BLOCK_SIZE;
    //
    var score = 0;
    var snake = [];
    var beans = [];

    function addScore() {
        ++score;
        scoreEle.innerText = "Score:" + score;
    }

    function resetScore() {
        score = 0;
        scoreEle.innerText = "Score:" + score;
    }

    function drawSnake() {
        ctx.fillStyle = 'rgb(255,200,0)';
        for (var i = 0; i < snake.length; ++i) {
            ctx.fillRect(snake[i].x - HALF_BLOCK_SIZE, snake[i].y - HALF_BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        }
    }

    function clearSnake() {
        var i = snake.length - 1;
        ctx.clearRect(snake[i].x - HALF_BLOCK_SIZE, snake[i].y - HALF_BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }

    function rand(a, b) {
        return Math.floor(Math.random() * (b - a) / BLOCK_SIZE) * BLOCK_SIZE + a;
    }

    function drawBean() {
        ctx.fillStyle = 'rgb(0,0,0)';
        beans = [];
        for (var i = 0; i < howmany_beans; i++) {
            var x = rand(0, CANVAS_WIDTH);
            var y = rand(0, CANVAS_HEIGHT);
            for (var n = 0; n < snake.length; n++) {
                if (x == snake[n] && y == snake[n]) {
                    x = rand(0, CANVAS_WIDTH);
                    y = rand(0, CANVAS_HEIGHT);
                    n -= 1;
                }
            }
            for (var n = 0; n < beans.length; n++) {
                if (x == beans[n] && y == beans[n]) {
                    x = rand(0, CANVAS_WIDTH);
                    y = rand(0, CANVAS_HEIGHT);
                    n -= 1;
                }
            }
            ctx.fillRect(x - HALF_BLOCK_SIZE, y - HALF_BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
            beans.push({x: x, y: y});
        }
    }

    document.body.onkeydown = function (dir) {
        switch (dir.key) {
            case "w":
                if (vertical_speed == 0) {
                    horizontal_speed = 0;
                    vertical_speed = -BLOCK_SIZE;
                }
                break;
            case "s":
                if (vertical_speed == 0) {
                    horizontal_speed = 0;
                    vertical_speed = BLOCK_SIZE;
                }
                break;
            case "a":
                if (horizontal_speed == 0) {
                    horizontal_speed = -BLOCK_SIZE;
                    vertical_speed = 0;
                }
                break;
            case "d":
                if (horizontal_speed == 0) {
                    horizontal_speed = BLOCK_SIZE;
                    vertical_speed = 0;
                }
                break;
        }
    }


    function reset() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        const INITIAL_LENGTH = 7;
        const INITIAL_X = Math.floor(CANVAS_WIDTH / 2 / 10) * 10;
        const INITIAL_Y = Math.floor(CANVAS_HEIGHT * 2 / 3 / 10) * 10;
        snake = [];
        for (var i = 0; i < INITIAL_LENGTH; ++i) {
            snake.push({
                "x": INITIAL_X,
                "y": ((i * BLOCK_SIZE) + INITIAL_Y)
            });//"x":x
        }
        drawBean();
        //
        horizontal_speed = 0;
        vertical_speed = -BLOCK_SIZE;
        //
        resetScore();
    }

    reset();
    function clone(obj) {
        return Object.assign({}, obj);
    }

    function snake_move() {
        setTimeout(snake_move, 1000 / 5);
        for (var i = snake.length - 1; i > 0; i--) {
            if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
                alert("Game over");
                reset();
                return;
            }
        }

        if (snake[0].x < 0) {
            snake[0].x += CANVAS_WIDTH; // a+=b => a=a+b;
        } else if (snake[0].x >= CANVAS_WIDTH) {
            snake[0].x -= CANVAS_WIDTH;
        }
        if (snake[0].y < 0) {
            snake[0].y += CANVAS_HEIGHT;
        } else if (snake[0].y >= CANVAS_HEIGHT) {
            snake[0].y -= CANVAS_HEIGHT;

        }

        var dec = 0;
        ctx.fillStyle = 'rgb(0,0,0)';
        for (var i = 0; i < beans.length; ++i) {
            if (beans[i].x == snake[0].x && beans[i].y == snake[0].y) {
                addScore();
                beans[i].x = rand(0, CANVAS_WIDTH);
                beans[i].y = rand(0, CANVAS_HEIGHT);//检测位置
                for (var n = 0; n < snake.length; n++) {
                    if (beans[i].x == snake[n] && beans[i].y == snake[n]) {
                        beans[i].x = rand(0, CANVAS_WIDTH);
                        beans[i].y = rand(0, CANVAS_HEIGHT);
                        n -= 1;
                    }
                }
                for (var n = 0; n < beans.length; n++) {
                    if (beans[i].x == beans[n] && beans[i].y == beans[n]) {
                        beans[i].x = rand(0, CANVAS_WIDTH);
                        beans[i].y = rand(0, CANVAS_HEIGHT);
                        n -= 1;
                    }
                }
                ctx.fillRect(beans[i].x - HALF_BLOCK_SIZE,
                        beans[i].y - HALF_BLOCK_SIZE,
                        BLOCK_SIZE,
                        BLOCK_SIZE);
                dec = 1;
                break;
            }
        }

        if (dec == 1) {
            snake.push(clone(snake[snake.length - 1]));
        }
        clearSnake();
        for (var i = snake.length - 1; i > 0; i--) {
            snake[i].x = snake[i - 1].x;
            snake[i].y = snake[i - 1].y;
        }
        snake[0].x += horizontal_speed;
        snake[0].y += vertical_speed;

        drawSnake();
    }

    snake_move();
}