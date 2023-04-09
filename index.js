const completeListGroup = document.getElementById('complete-list-group');
const incompleteListGroup = document.getElementById('incomplete-list-group');
const addTasks = document.getElementById('input-area');
const addButton = document.getElementById('add-button');

// 追加するボタンを押したら未完了ToDoが追加される
addButton.addEventListener('click', function(event){
  event.preventDefault();
  createIncompleteList(addTasks.value);
  addTasks.value = "";
});

// タスクを削除する部分の共通化
const deleteFromIncompleteList = function(target) {
  document.getElementById('incomplete-list-group').removeChild(target);
}

// 未完了エリアにタスクが追加される部分共通化
const createIncompleteList = function(text) {
  // divタグが生成される
  const div = document.createElement('div');
  div.className = "row";
  // divタグの中にliタグが生成されてタスクが表示される
  const li = document.createElement('li');
  li.innerText = text;
  li.className = "col";

  // divタグの中に完了ボタンが生成される
  const completeButton = document.createElement('button');
  completeButton.innerText = "完了";
  completeButton.setAttribute('type', 'button');
  completeButton.setAttribute('class', 'btn btn-success m-1 col-3');
  //  完了ボタンを押したら完了エリアにタスクが移動する
  completeButton.addEventListener('click', function(event){
    event.preventDefault();
    // 未完了エリアから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了エリアにdivタグが生成される
    const div = document.createElement('div');
    div.className = "row";
    // divタグの中にliタグが生成されてタスクが表示される
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    // 完了ボタンの親ノードないのテキストをからにしてやる
    // 削除ボタンと完了ボタンを削除するために
    addTarget.textContent = null;
    const li = document.createElement('li');
    li.innerText = text;
    li.className = "col";
    
    // 完了エリアのdivタグの中に戻すボタンが生成される
    const reverseButton = document.createElement('button');
    reverseButton.innerText = "戻す";
    reverseButton.setAttribute('type', 'button');
    reverseButton.setAttribute('class', 'btn btn-outline-secondary m-1 col-3');

    //  戻すボタンを押したら未完了エリアにタスクが移動する
    reverseButton.addEventListener('click', function(event){
      event.preventDefault();
      const reverseTarget = reverseButton.parentNode;
      // 完了エリアから削除される
      completeListGroup.removeChild(reverseTarget);
      
      // 完了ボタンを押したリストの値を取得する
      const text = reverseTarget.firstElementChild.innerText;
      createIncompleteList(text); 
    });
    addTarget.appendChild(li);
    addTarget.appendChild(reverseButton);
    completeListGroup.appendChild(addTarget);
  });

  // divタグの中に削除ボタンが生成される
  const deleteButton = document.createElement('button');
  deleteButton.innerText = "削除する";
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('class', 'btn btn btn-warning m-1 col-3');

  // 削除ボタンを押したら削除イベントが発動
  const deleteTasks = deleteButton.addEventListener('click', function(event) {
    event.preventDefault();
    alert('削除しますか？');
    deleteFromIncompleteList(deleteButton.parentNode);
  });

    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    incompleteListGroup.appendChild(div);  
};




