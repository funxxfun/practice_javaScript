const incompleteListGroup = document.getElementById('incomplete-list-group');
const addTasks = document.getElementById('input-area');
const addButton = document.getElementById('add-button');
const completeListGroup = document.getElementById('complete-list-group');

// 追加するボタンを押したら未完了ToDoが追加される
addButton.addEventListener('click', function(event){
  event.preventDefault();
  addIncompleteList();
});

// 追加ボタンを押した時に実行される関数
function addIncompleteList() {
  // liタグが生成されてタスクが表示される
  const incompleteListItem = document.createElement('li');
  incompleteListItem.classList.add('incomplete-list-item');
  incompleteListItem.innerText = addTasks.value;
  incompleteListGroup.appendChild(incompleteListItem);
  addTasks.value = "";

  // liタグの中に削除ボタンを生成する
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除する";
  incompleteListItem.appendChild(deleteButton);

// 削除ボタンを押したら削除イベントが発動
  const deleteTasks = deleteButton.addEventListener('click', function(event){
    event.preventDefault();
    alert('削除しますか？');
    const deleteTarget = deleteButton.parentNode;
    incompleteListGroup.removeChild(deleteTarget);
  });

   // liタグの中に完了ボタンが生成される
   const completeButton = document.createElement('button');
   completeButton.innerText = "完了";
   incompleteListItem.appendChild(completeButton);

  //  完了ボタンを押したら完了エリアにタスクが移動する
  const completeTask = completeButton.addEventListener('click', function(){
    const completeTarget = completeButton.parentNode;
    console.log(completeTarget);
  })

};






// function add() {
//   let todoText = input.value;
//   if(todoText.length > 0) {
//   const li = document.createElement("li");
//   li.innerText = todoText;
//   li.classList.add("list-group-item");

//   // 右クリックで削除のイベント
//   li.addEventListener("contextmenu", function(event) {
//     li.remove();
//   });

//   // 左クリックで取り消し線
//   li.addEventListener("click", function(){
//     li.classList.toggle("text-decoration-line-through")

//   })



//   ul.appendChild(li);
//   input.value = "";
//   }
// }

