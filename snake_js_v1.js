window.onload = function () {
    var canvas = document.getElementById('playground');
    var score = document.getElementById('score');
    var ctx = canvas.getContext('2d');
    var snax0 = 600;
    var snay0 = 530;
    //

    //
    sna1 = {};
    sna1.x1 = 600;
    sna1.y1 = 540;
    sna1.x2 = 600;
    sna1.y2 = 530;
    //
    sna2 = {};
    sna2.x1 = 600;
    sna2.y1 = 550;
    sna2.x2 = 600;
    sna2.y2 = 540;
    //
    sna3 = {};
    sna3.x1 = 600;
    sna3.y1 = 560;
    sna3.x2 = 600;
    sna3.y2 = 550;
    //
    sna4 = {};
    sna4.x1 = 600;
    sna4.y1 = 570;
    sna4.x2 = 600;
    sna4.y2 = 560;
    //
    sna5 = {};
    sna5.x1 = 600;
    sna5.y1 = 580;
    sna5.x2 = 600;
    sna5.y2 = 570;
    //
    sna6 = {};
    sna6.x1 = 600;
    sna6.y1 = 590;
    sna6.x2 = 600;
    sna6.y2 = 580;
    //
    sna7 = {};
    sna7.x1 = 600;
    sna7.y1 = 600;
    sna7.x2 = 600;
    sna7.y2 = 590;
    //
    var snake = [sna1, sna2, sna3, sna4, sna5, sna6, sna7];
    //
    var a1 = 0;
    var a2 = -a1;
    var b1 = -10;
    var b2 = 10;
    //
    var x0;
    var y0;
    var snalen = 7;
    var snalen_1;
    var dec = 0;
    //
    var newbody = {};


    function redraw_snake(x1, y1, x, y) {
        ctx.fillStyle = 'rgb(255,200,0)';
        ctx.clearRect(x1, y1, 10, 10);
        ctx.fillRect(x, y, 10, 10);
    }

    function rand(a, b) {
        return Math.floor(Math.random() * (b - a) / 10) * 10 + a;
    }

    function drawbea() {
        ctx.fillStyle = 'rgb(0,0,0)';
        bea1x = rand(0, 1200);
        bea1y = rand(0, 600);
        ctx.fillRect(bea1x, bea1y, 10, 10);
        //
        bea2x = rand(0, 1200);
        bea2y = rand(0, 600);
        ctx.fillRect(bea2x, bea2y, 10, 10);
        //
        bea3x = rand(0, 1200);
        bea3y = rand(0, 600);
        ctx.fillRect(bea3x, bea3y, 10, 10);
        //
        bea4x = rand(0, 1200);
        bea4y = rand(0, 600);
        ctx.fillRect(bea4x, bea4y, 10, 10);
        //
        bea5x = rand(0, 1200);
        bea5y = rand(0, 600);
        ctx.fillRect(bea5x, bea5y, 10, 10);
        //
        bea6x = rand(0, 1200);
        bea6y = rand(0, 600);
        ctx.fillRect(bea6x, bea6y, 10, 10);
        //
        bea7x = rand(0, 1200);
        bea7y = rand(0, 600);
        ctx.fillRect(bea7x, bea7y, 10, 10);
    }
    drawbea();
    
    document.body.onkeydown = function (dir) {
        switch (dir.key) {
            case "w":
                if (b1 == 0) {
                    x0 = snax0;
                    y0 = snay0;
                    a1 = 0;
                    a2 = -a1;
                    b1 = -10;
                    b2 = -b1;
                    break;
                } else {
                    break;
                }
            case "s":
                if (b1 == 0) {
                    x0 = snax0;
                    y0 = snay0;
                    a1 = 0;
                    a2 = -a1;
                    b1 = 10;
                    b2 = -b1;
                    break;
                } else {
                    break;
                }
            case "a":
                if (a1 == 0) {
                    x0 = snax0;
                    y0 = snay0;
                    a1 = -10;
                    a2 = -a1;
                    b1 = 0;
                    b2 = -b1;
                    break;
                } else {
                    break;
                }
            case "d":
                if (a1 == 0) {
                    x0 = snax0;
                    y0 = snay0;
                    a1 = 10;
                    a2 = -a1;
                    b1 = 0;
                    b2 = -b1;
                    break;
                } else {
                    break;
                }
        }
    }


    function reset() {
        ctx.clearRect(0, 0, 1200, 600);
        snax0 = 600;
        snay0 = 530;

        sna1.x1 = 600;
        sna1.y1 = 540;
        sna1.x2 = 600;
        sna1.y2 = 530;
        //
        sna2.x1 = 600;
        sna2.y1 = 550;
        sna2.x2 = 600;
        sna2.y2 = 540;
        //
        sna3.x1 = 600;
        sna3.y1 = 560;
        sna3.x2 = 600;
        sna3.y2 = 550;
        //
        sna4.x1 = 600;
        sna4.y1 = 570;
        sna4.x2 = 600;
        sna4.y2 = 560;
        //
        sna5.x1 = 600;
        sna5.y1 = 580;
        sna5.x2 = 600;
        sna5.y2 = 570;
        //
        sna6.x1 = 600;
        sna6.y1 = 590;
        sna6.x2 = 600;
        sna6.y2 = 580;
        //
        sna7.x1 = 600;
        sna7.y1 = 600;
        sna7.x2 = 600;
        sna7.y2 = 590;
        //
        snake = [sna1, sna2, sna3, sna4, sna5, sna6, sna7];
        //
        a1 = 0;
        a2 = -a1;
        b1 = -10;
        b2 = 10;
        //
        snalen = 7;
        dec = 0;
        //
        newbody = {};
        drawbea();
    }


    function snake_move() {
        for (var i = snalen; i > 0; i--) {
            if (snax0 == snake[i - 1].x1 && snay0 == snake[i - 1].y1) {
                alert("Game over");
                reset();
            }

        }
        if (snax0 == -10) {
            snax0 = 1200;
        } else if (snax0 == 1200) {
            snax0 = -10;
        } else if (snay0 == -10) {
            snay0 = 600;
        } else if (snay0 == 600) {
            snay0 = -10;
        }
        ctx.fillStyle = 'rgb(0,0,0)';
        if (snax0 == bea1x && snay0 == bea1y) {
            dec = 1;
            bea1x = rand(0, 1200);
            bea1y = rand(0, 600);
            ctx.fillRect(bea1x, bea1y, 10, 10);
        } else if (snax0 == bea2x && snay0 == bea2y) {
            dec = 1;
            bea2x = rand(0, 1200);
            bea2y = rand(0, 600);
            ctx.fillRect(bea2x, bea2y, 10, 10);
        } else if (snax0 == bea3x && snay0 == bea3y) {
            dec = 1;
            bea3x = rand(0, 1200);
            bea3y = rand(0, 600);
            ctx.fillRect(bea3x, bea3y, 10, 10);
        } else if (snax0 == bea4x && snay0 == bea4y) {
            dec = 1;
            bea4x = rand(0, 1200);
            bea4y = rand(0, 600);
            ctx.fillRect(bea4x, bea4y, 10, 10);
        } else if (snax0 == bea5x && snay0 == bea5y) {
            dec = 1;
            bea5x = rand(0, 1200);
            bea5y = rand(0, 600);
            ctx.fillRect(bea5x, bea5y, 10, 10);
        } else if (snax0 == bea6x && snay0 == bea6y) {
            dec = 1;
            bea6x = rand(0, 1200);
            bea6y = rand(0, 600);
            ctx.fillRect(bea6x, bea6y, 10, 10);
        } else if (snax0 == bea7x && snay0 == bea7y) {
            dec = 1;
            bea7x = rand(0, 1200);
            bea7y = rand(0, 600);
            ctx.fillRect(bea7x, bea7y, 10, 10);
        }
        if (dec == 1) {
            snalen = snalen + 1;
            newbody["sna" + snalen] = {x1: 0, y1: 0, x2: 0, y2: 0};
            snake.push(newbody["sna" + snalen]);
            dec = 0;
        }
        snax0 = snax0 + a1;
        snay0 = snay0 + b1;
        redraw_snake(snax0 + a2, snay0 + b2, snax0, snay0);
        for (var i = snalen; i > 0; i--) {
            redraw_snake(snake[snalen - i].x1, snake[snalen - i].y1, snake[snalen - i].x2, snake[snalen - i].y2)
        }
        for (var i = snalen - 1; i > 0; i--) {
            snake[i].x1 = snake[i - 1].x1;
            snake[i].y1 = snake[i - 1].y1;
            snake[i].x2 = snake[i - 1].x2;
            snake[i].y2 = snake[i - 1].y2;
        }
        sna1.x1 = snax0 + a2, sna1.y1 = snay0 + b2, sna1.x2 = snax0, sna1.y2 = snay0;
        setTimeout(snake_move, 1000 / 5);
        snalen_1 = snalen - 7;
        score.innerText = "Score:" + snalen_1;
    }
    snake_move();
}