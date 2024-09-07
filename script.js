var arr = new Array(9);
arr.fill(0);

let gameboard = document.getElementById("gameboard");
let res = document.getElementById("result");
let btn = document.getElementById("RESTARTbutton");
let boxes = document.querySelectorAll(".box");
var boxarr = Array.prototype.slice.call(boxes);
let match = 1;
let player = 1;

btn.onclick = () => {
    match = 1;
    player = 1;
    arr = arr.map(() => { return 0; });
    // console.log(boxes);
    boxarr.map((box) => {
        box.innerText = "";
        box.style.backgroundColor = "#37505c";
        return box;
    })
    console.log(arr);

}
gameboard.addEventListener("click", (e) => {

    let b = e.target.id;
    if (arr[b] == 0 && match == 1) {
        arr[b] = player;
        player = player * -1;
        console.log(arr);
        if (player == 1) {
            document.getElementById(b).innerText = "O";
            res.innerText = "Player 1 to move";
        }
        else {
            document.getElementById(b).innerText = "X";
            res.innerText = "Player 2 to move";
        }
        check();
    }
})
function results(start, mid, end) {

    let a = [start, mid, end];
    if (start == end) {
        res.innerHTML = "draw";

    }
    else {
        if (player == 1) {
            res.innerHTML = "Player 2 wins";
        }
        else {
            res.innerHTML = "Player 1 wins";
        } a.map((val, ind, arr) => {
            boxes[val].style.backgroundColor = "#081921";
        })
    }
    
    match = 0;
}
function check() {
    if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != 0) {
        results(0, 1, 2);
    }
    else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != 0) {
        results(3, 4, 5);
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != 0) {
        results(6, 7, 8);
    }
    else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[8] != 0) {
        results(0, 4, 8);
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6] && arr[6] != 0) {
        results(2, 4, 6);
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[6] != 0) {
        results(0, 3, 6);
    }
    else if (arr[1] == arr[4] && arr[1] == arr[7] && arr[7] != 0) {
        results(1, 5, 7);
    }
    else if (arr[2] == arr[5] && arr[8] == arr[2] && arr[8] != 0) {
        results(2, 5, 8);
    }
    else {
        let c = 0;
        for (let i = 0; i < 9; i++) {
            if (arr[i] != 0)
                c++;
        }
        if (c == 9)
            results(0, 0, 0);
    }
}
