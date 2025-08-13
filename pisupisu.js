// ぴすぴすメッセージ機能
let messageTimer;
let isClicked = false;

// マウスオーバーごとにmessage-01〜05をランダムに変更
function changeMessage() {
    const messageNum = Math.floor(Math.random() * 5) + 1;
    const messageImg = document.getElementById('random-message');
    if (messageImg) {
        messageImg.src = 'img/message-0' + messageNum + '.svg';
    }
}

// マウスオーバー処理
function handleMouseOver() {
    if (isClicked) return; // クリック中は無視
    const icon = document.querySelector('.wait-icon');
    if (icon) {
        changeMessage();
        icon.classList.add('show');
        icon.classList.remove('hide');
    }
}

// マウスアウト処理
function handleMouseOut() {
    if (isClicked) return; // クリック中は無視
    const icon = document.querySelector('.wait-icon');
    if (icon) {
        icon.classList.remove('show');
        icon.classList.add('hide');
    }
}

// クリック処理（3秒後に自動で閉じる）
function handleClick(event) {
    event.preventDefault();
    
    // 既にクリックで表示中なら何もしない
    if (isClicked) return;
    
    const icon = document.querySelector('.wait-icon');
    if (!icon) return;
    
    // 既に表示されている（マウスオーバーで）場合はメッセージを変更しない
    if (!icon.classList.contains('show')) {
        changeMessage();
    }
    
    // タイマーをリセット
    clearTimeout(messageTimer);
    
    // 表示
    icon.classList.remove('hide');
    icon.classList.add('show');
    isClicked = true;
    
    // 3秒後に自動で閉じる
    messageTimer = setTimeout(() => {
        const iconToHide = document.querySelector('.wait-icon');
        if (iconToHide) {
            iconToHide.classList.remove('show');
            iconToHide.classList.add('hide');
        }
        isClicked = false;
    }, 3000);
}