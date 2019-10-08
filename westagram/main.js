//댓글달린 span 태그 id repl

const repl = document.getElementsByClassName('reply_input')[0];

const button = document.getElementsByClassName('post')[0];

button.addEventListener('click', function () {
    if (repl.value) {
        
        let a = document.createElement('b');
        let atext = document.createTextNode(repl.value);

        a.appendChild(atext);

        let list = document.getElementById("list");

        list.insertBefore(a, list.childNodes[0]);
        repl.value=''
        
    }
})
repl.addEventListener('keydown', function(){
    if(event.keyCode === 13){
        let c = document.createElement('b');
        let ctext = document.createTextNode(repl.value);

        c.appendChild(ctext);

        let list = document.getElementById("list");

        list.insertBefore(c, list.childNodes[0]);
        repl.value=''
    }
})

/*-------------------------------------------------*/


//텍스트는 b 태그 안에 들어가야됨.