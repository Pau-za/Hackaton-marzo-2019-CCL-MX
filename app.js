
// const platform = new H.service.Platform({
//     'app_id': 'saWHORixMegOTMWQYvh8',
//     'app_code': 'NY05VOWk_1c2YyfwQxKpMw'
//   });

  function shiftLeft() {
    const boxes = document.querySelectorAll(".box");
    const tmpNode = boxes[0];
    boxes[0].className = "box move-out-from-left";

    setTimeout(function() {
        if (boxes.length > 4) {
            tmpNode.classList.add("box--hide");
            boxes[4].className = "box move-to-position5-from-left";
        }
        boxes[1].className = "box move-to-position1-from-left";
        boxes[2].className = "box move-to-position2-from-left";
        boxes[3].className = "box move-to-position3-from-left";
        // boxes[4].className = "box move-to-position4-from-left";
        boxes[0].remove();

        document.querySelector(".cards__container").appendChild(tmpNode);

    }, 500);

}

function shiftRight() {
    const boxes = document.querySelectorAll(".box");
    boxes[3].className = "box move-out-from-right";
    setTimeout(function() {
        const noOfCards = boxes.length;
        if (noOfCards > 3) {
            boxes[3].className = "box box--hide";
        }

        const tmpNode = boxes[noOfCards - 1];
        tmpNode.classList.remove("box--hide");
        boxes[noOfCards - 1].remove();
        let parentObj = document.querySelector(".cards__container");
        parentObj.insertBefore(tmpNode, parentObj.firstChild);
        tmpNode.className = "box move-to-position1-from-right";
        // boxes[0].className = "box move-to-position2-from-right";
        boxes[1].className = "box move-to-position3-from-right";
        boxes[2].className = "box move-to-position4-from-right";
        boxes[3].className = "box move-to-position5-from-right";
    }, 500);

}

const getIn =  document.getElementById('get-in');
getIn.addEventListener('click', () => {
    document.getElementById('instructions-page').style.display='block';
    document.getElementById('initial-page').style.display='none';
})

const start =  document.getElementById('start');
start.addEventListener('click', () => {
    document.getElementById('instructions-page').style.display='none';
    document.getElementById('send-violet-alert').style.display='block';
})

const sendAlert =  document.getElementById('send-alert');
sendAlert.addEventListener('click', () => {
    document.getElementById('alert-chat').style.display='block';
    document.getElementById('send-violet-alert').style.display='none';
})


const ended =  document.getElementById('ended');
ended.addEventListener('click', () => {
    document.getElementById('alert-chat').style.display='none';
    document.getElementById('evaluation').style.display='block';
})