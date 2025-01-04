const btn = document.getElementById('btn');
const Text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        Text.textContent = 'ボタンをクリックしました';
    }, 2000);
})