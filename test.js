// 1番最初のbutton要素を取得
const button = document.querySelector('.button');
console.log(button);

// buttonの親要素を取得
console.log(button.parentNode);

// button要素の中身を取得
console.log(button.parentNode.innerText);

// 全てのbutton要素を取得
const buttonAll = document.querySelectorAll('.button');
console.log(buttonAll);

// ボタンを押したらアラートが出るイベント
const btn = document.querySelector('#btn1');
btn.addEventListener('click', function(){
  console.log(btn);
  alert('clicked');
});


// ulの子要素を取得
const list = document.querySelector('ul');
const listItemsNode = list.childNodes;
console.log(listItemsNode);

// ulの子要素のHTML要素（HTMLCollection）のみ
// テキストノードは含まない
listItems = list.children;
console.log(listItems);

// listというクラス名の要素を全て取得
const listAll = document.getElementsByClassName(list);
console.log(listAll);

// idがulの要素を取得
const listGroup = document.getElementById('ul');
console.log(listGroup);
// liタグの要素を作成
const listNew = document.createElement('li');
console.log(listNew);
listNew.textContent = 'list-new';

//idがfirstListのliタグを取得して削除する
const firstList = document.getElementById('firstList');
console.log(firstList);
console.log(firstList.innerHTML);
firstList.remove();
console.log(listGroup);

// ulタグ要素の一番最後にliタグの要素を追加
listGroup.appendChild(listNew);
console.log(listGroup);


// item-1の隣の要素を取得
const item1 = document.querySelector('#item-1');
console.log(item1);
// nextSiblingだとホワイトスペースも取得してしまうためうまくいかない
// const item2 = item1.nextSibling;
// console.log(item2);

// nextElementSiblingを使うとうまくいく
const item2 = item1.nextElementSibling;
console.log(item2);


// 要素のidを取得
const helloId = document.getElementById('hello');
// 属性値の更新
helloId.setAttribute('title', 'Hi');
console.log(helloId);





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

    
    // Array.prototype.forEach.call(children, child => {
    //   console.log(child);
    // })


    // HTML要素の書き換え
    // console.log(element);
    // const node = document.querySelector('.container')
    // const element = document.querySelector('#element');
    // const newElement = document.createElement('div');
    // newElement.textContent = 'created';

    // console.log(newElement);
    // node.insertBefore(newElement, element);

    // console.log(node);
  

    

    // ＜イベントオブジェクト＞
    // button.addEventListener('click', function (event) {
    //   // イベントオブジェクトのプロパティの例
    //   // イベントの登録対象
    //   // console.log(event);
    //   // console.log(event.currentTarget);
    // });


   
    

    // ＜イベントハンドラーが追加される仕組み＞
    // ハンドラーは foo のスコープ外に定義する
    // const handleResize = () => { console.log("hello")};

    // function foo() {
    //     // 初回実行時はまだハンドラーが登録されていないが、
    //     // removeEventListener はマッチする関数がなくてもエラーにはならない

    // removeで消すには同じ関数でないと消せない。変数で定義したものを使わないといけないため、この場合は同じ処理の別の関数と扱われてしまう。
        // button.removeEventListener('click', function () { console.log('Hello'); });
    //     button.addEventListener('click', function () { console.log('Hello'); });

    //     // window.removeEventListener('resize', handleResize);
        // window.addEventListener('resize', handleResize);
    //   }




    // const sayHello = () => { console.log("hello"); };

    // function foo() {
        // ①関数を外側に出す：foo()を何回呼んでも1クリックで1回のみhelloが出力される
        // button.addEventListener('click', sayHello);

        // ②関数を第二引数にそのまま書く：1クリックでfoo()を呼んだ数だけhelloが出力される
        // button.addEventListener('click', function() {
        //   console.log("hello");
        // });

        // ③ removeの後add。関数は外で定義：foo()を何回呼んでも1クリックで1回のみhello出力される
        //button.removeEventListener('click', sayHello);
        // button.addEventListener('click', sayHello);

        // ④removeの後add。ただし関数は直接記載：1クリックでfoo()を呼んだ数だけhelloが出力される
      //   button.removeEventListener('click', function() {
      //     console.log("hello");
      //   });
      //   button.addEventListener('click', function() {
      //     console.log("hello");
      //   });
      // }

      // foo();
      // foo();
      // foo();
      // foo();
      // foo();

    //   foo();




    // 【イベント】
    // ＜イベントの取り消し＞
    // const button = document.querySelector('#btn-1');

    // const sayHello = () => { console.log("hello"); };

    // function foo() {
    //   button.addEventListener('click', sayHello);
    //   button.removeEventListener('click', sayHello);
    // }

    // foo();


    // ＜イベントのキャンセル＞
    // const link = document.querySelector('a');
    // console.log(link);

    // link.addEventListener('click', function(event) {
    //   // 画面遷移をキャンセル
    //   event.preventDefault();
    //   // 後続処理...
    // })

    // const form = document.querySelector('form');

    // form.addEventListener('submit', function(event) {
    //     // 送信処理をキャンセル
    //   event.preventDefault();

    //   // バリデーションチェックや送信先の設定など...
    //   console.log("バリデーションの処理");

    //   // 送信
    //   console.log(event.currentTarget);
    //   event.currentTarget.submit();
    // });

    // 送信ボタンに対するイベント設定
    // const submitButton = document.querySelector('#submit-button');

    // submitButton.addEventListener('click', function(event) {
    //   // 送信処理をキャンセル
    //   event.preventDefault();

    //   // 中間処理

    //   // フォーム要素を取得してから送信
    //   form.submit();
    // });

    // const form = document.querySelector('#the-form');

    // const submitButtons = document.querySelectorAll('button[type="submit"]');

    // // console.log(submitButtons);
    // Array.prototype.forEach.call(submitButtons, submitButton => {
    //   submitButton.addEventListener('click', event => {
    //     event.preventDefault();
    //     const action = event.currentTarget.dataset.action;
    //     // console.log(action);
    //     form.setAttribute('action', action);
    //     // console.log(form);
    //     form.submit();
    //   });
    // });



//     const taskValue = document.getElementsByClassName('task_value')[0];
// // console.log(taskValue);
// const taskSubmit = document.getElementsByClassName('task_submit')[0];
// const taskList = document.getElementsByClassName('task_list')[0];

// // タスクを作成
// const addTasks = (task) => {
//   // 入力したタスクを追加。表示
//   const listItem = document.createElement('li');
//   listItem.setAttribute('class', 'working');
//   taskList.appendChild(listItem);

//   // チェックボックスを作成
//   const checkbox = document.createElement('input');_
//   checkbox.setAttribute('type', 'checkbox');
//   checkbox.setAttribute('id', task);
//   // checkbox.setAttribute('name', 'tasks');
//   // checkbox.setAttribute('value', "working");

//   // ラベルを作成
//   const label = document.createElement('label');
//   label.htmlFor = task;
//   label.appendChild(document.createTextNode(task));
  
//   // チェックボックスとラベルをliの中に追加
//   listItem.appendChild(checkbox);
//   listItem.appendChild(label);

//   // タスクに削除ボタンを付与
//   const deleteButton = document.createElement('button');
//   deleteButton.innerHTML = 'Delete';
//   listItem.appendChild(deleteButton);

//   // 【外に関数を定義】削除ボタンイベント
//   deleteEvent(deleteButton);

//   // 【外に関数を定義】チェックボックスイベント
//   checkboxEvent(checkbox);

// }

// // 削除ボタンをクリックし、イベントを発動（タスクが削除）
// const deleteEvent = (deleteButton) => {
//   deleteButton.addEventListener('click', evt => {
//     evt.preventDefault();
//     deleteTasks(deleteButton);
//   });
// }

// // 削除ボタンにタスクを消す機能を付与
// const deleteTasks = (deleteButton) => {
//   const chosenTask = deleteButton.closest('li');
//   taskList.removeChild(chosenTask);
// }

// // 追加ボタンをクリックし、イベントを発動（タスクが追加）
// taskSubmit.addEventListener('click', evt => {
//   evt.preventDefault();
//   const task = taskValue.value;
//   addTasks(task);
//   taskValue.value = '';
// });


// // チェックボックスをクリックし、イベントを発動（罫線の追加・削除）
// const checkboxEvent = (checkbox) => {
//   checkbox.addEventListener('click', () => {
//     changeLineThrough(checkbox);
//   });
// }

// // チェックボックスに罫線をつける機能を付与
// const changeLineThrough = (checkbox) => {
//   const doneTask = checkbox.nextElementSibling;
//   // const doneTask = checkbox.closest('li');
//   if (doneTask.style.textDecoration == "line-through") {
//     doneTask.style.textDecoration = "none";
//   } else {
//     doneTask.style.textDecoration = "line-through";
//   }
// }



