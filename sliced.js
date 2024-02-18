// 로그인 아이디 비밀번호 입력
const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;


// 화면 슬라이드
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // 2초마다 이미지가 체인지됩니다
}


// 화면 구현이 잘 안되서 로그인은 간단한 if문으로 대처했습니다...
login.addEventListener('click', function () {
    if (id.value == 'acid') {
        if (password.value == '0000') {
            alert('로그인 되었습니다!');
        } else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!');
            errStack++;
        }
    } else {
        alert('존재하지 않는 계정입니다.');
    }
    if (errStack >= 5) {
        alert('비밀번호를 5회 이상 틀리셨습니다. 비밀번호 찾기를 권장드립니다.');
    }
});

// const join_btn = document.getElementById('join_btn');
// join_btn.addEventListener('click', function() {
//   alert('회원가입 창 입니다.');
// })


function Validation() {
    const idCheck = document.querySelector("#ID")
    const passCheck = document.querySelector("#pass")

    //아이디 확인
    if (idCheck.value.length < 4) {
        alert("아이디를 4글자 이상 입력하세요.")
        uid.focus();
        return false;
    }
    //아이디 영어 대소문자 확인
    else if (!checkEngNumber(idCheck.value)) {
        alert("영문 대소문자, 숫자만 입력하세요.")
        uid.focus();
        return false;
    }

    //비밀번호 확인
    if (passCheck.value.length < 4) {
        alert("비밀번호를 4글자 이상 입력하세요.")
        passCheck.focus();
        return false;
    }
    //비밀번호 영어 대소문자 확인
    else if (!checkEngNumber(passCheck.value)) {
        alert("영문 대소문자, 숫자만 입력하세요.")
        passCheck.focus();
        return false;
    }
    //비밀번호와 아이디 비교
    else if (passCheck.value == idCheck.value) {
        alert("아이디와 동일한 비밀번호를 사용할 수 없습니다.")
        passCheck.focus();
        return false;
    }
}


