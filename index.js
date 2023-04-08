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

  // 左クリックで削除線
  // incompleteListItem.addEventListener('click', function() {
  //   incompleteListItem.classList.toggle('text-decoration-line-through');
  // });


  // liタグの中に完了ボタンが生成される
  const completeButton = document.createElement('button');
  completeButton.innerText = "完了";
  incompleteListItem.appendChild(completeButton);
  completeButton.setAttribute('type', 'button');
  completeButton.setAttribute('class', 'btn btn-success m-1');


  //  完了ボタンを押したら完了エリアにタスクが移動する
completeButton.addEventListener('click', function(event){
  event.preventDefault();
  moveCompleteList();
});

// 完了ボタンを押した時に実行される関数
function moveCompleteList() {
    const completeTarget = completeButton.parentNode;
    // 未完了エリアから削除される
    incompleteListGroup.removeChild(completeTarget);
    // 完了エリアにliダグが生成される
    const completeListItem = document.createElement('li');
    completeListItem.classList.add('complete-list-item');
    completeListGroup.appendChild(completeListItem);

    // 完了ボタンを押したinnerTextのvalueを取得するに変更
    completeListItem.innerText = incompleteListItem.value;

    // console.log(incompleteListItem);
    console.log(incompleteListItem.innerHTML);

  };

  // liタグの中に削除ボタンを生成する
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除する";
  incompleteListItem.appendChild(deleteButton);
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('class', 'btn btn btn-warning');

  // 削除ボタンを押したら削除イベントが発動
  const deleteTasks = deleteButton.addEventListener('click', function(event){
    event.preventDefault();
    alert('削除しますか？');
    const deleteTarget = deleteButton.parentNode;
    incompleteListGroup.removeChild(deleteTarget);
  });

};





