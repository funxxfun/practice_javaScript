'use strict';


// DOMを削除
    // const element = document.querySelector('#inner');
    // const target = document.querySelector('#target');
    // console.log(element);

    // 自分を削除する　
    // element.remove();
    // console.log(element);

    // IEでのやり方
    // const parent = element.parentNode;
    // const p = document.querySelector('p');
    // console.log(parent);
    // parent.removeChild(p);
    // parent.removeChild();

    // document.querySelector('#inner').parentNode.removeChild(document.querySelector('p'));

    // タグ名で取得
    // const textbox1 = document.getElementsByName("text1");
    // console.log(textbox1);
    // for (let i = 0; i < textbox1.length; i++) {
    //   console.log(textbox1.item(i).value); //red blue
    // }

    // const elements = document.getElementsByTagName('div')
    // Array.prototype.forEach(element => {
    //   console.log(element)
    // })

    // const elements = document.getElementsByTagName('p');
    // console.log(elements);

    // ノードウォーキング
    // 親要素
    // const element = document.querySelector('li');
    // console.log(element.parentNode);

    // 子要素
    // const element = document.querySelector('ul');
    // console.log(element.firstElementChild);
    // console.log(element.lastElementChild);
    // console.log(element.firstChild);
    // console.log(element.children);

    // const children = element.children;

    // Array.prototype.forEach.call(children, child => {
    //   console.log(child);
    // })

    // 前後要素
    // const element = document.querySelector('ul');
    // console.log(element.previousElementSibling);
    // console.log(element.nextElementSibling);

    // HTML要素の書き換え
    const element = document.querySelector('p');
    element.innerHTML = 'Hi';
    // element.innerHTML = '<div>Hi</div>';
    console.log(element);
    // const node = document.querySelector('.container')
    // const element = document.querySelector('#element');
    // const newElement = document.createElement('div');
    // newElement.textContent = 'created';

    // console.log(newElement);
    // node.insertBefore(newElement, element);

    // console.log(node);


    // 要素の幅、高さ、線幅
    // const element = document.getElementById('element')
    // document.getElementById('client_top').textContent = element.clientTop
    // document.getElementById('client_left').textContent = element.clientLeft
    // document.getElementById('client_height').textContent = element.clientHeight
    // document.getElementById('client_width').textContent = element.clientWidth
    // console.log(element)
    