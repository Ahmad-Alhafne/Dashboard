let goals = document.querySelectorAll(".targets-row .progress > span");
let arrGoals = Array.from(goals);
arrGoals.forEach((e) => {
    dataGoal = e.dataset.goal;
    e.style.width = `${dataGoal}%`;
});
let projectProgress = document.querySelectorAll('.projects-page .project .prog span');
let dolarIcon = document.querySelectorAll('.projects-page .project .cost i');
let dolarIconArray = Array.from(dolarIcon);
let projectProgressArray = Array.from(projectProgress);


window.onload = function () {
    projectProgressArray.forEach((e) => {
        dataProg = e.dataset.progress;
        if (dataProg >= 0 && dataProg < 50) {
            e.style.backgroundColor = '#f44336';
        } else if (dataProg >= 50 && dataProg < 100) {
            e.style.backgroundColor = '#22c55e';
        } else if (dataProg = 100) {
            e.style.backgroundColor = '#0075ff';
        }
        e.style.width = `${dataProg}%`;
    })
}

let levelProfile = document.querySelector('.profile-page .avatar-box .level span');
let dataLevel = levelProfile.dataset.level;
window.onload = function () {
    levelProfile.style.width = `${dataLevel}%`;
}

let postLike = document.querySelector('.latest-post .icons i.heart');
postLike.addEventListener('click', () => {
    postLike.classList.toggle("check");

})
