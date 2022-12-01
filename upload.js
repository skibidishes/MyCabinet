
function savedData() {
    $(document).ready(function() {
        $.ajax({
            url: '/nameCheck.php',
            method: 'post',
            dataType: 'html',
            data: {checkName: 'Проверка'},
            success: function(data){
                console.log(data);
                if (data!=1) {
                    $('#name').val(data);
                }
            }
        });

        $.ajax({
            url: '/surnameCheck.php',
            method: 'post',
            dataType: 'html',
            data: {checkSurname: 'Проверка'},
            success: function(data){
                console.log(data);
                if (data!=1) {
                    $('#surname').val(data);
                }
            }
        });

        $.ajax({
            url: '/infoCheck.php',
            method: 'post',
            dataType: 'html',
            data: {checkInfo: 'Проверка'},
            success: function(data){
                console.log(data);
                if (data!=1) {
                    $('#inform').val(data);
                }
            }
        });
    });
}
window.onload = savedData();

$(document).ready(function() {

    var submit1 = document.querySelector("#submit1");
        submit1.addEventListener("click", function() {
            console.log("Ваше имя сохранено");

            $.ajax({
                url: '/nameSave.php',
                method: 'post',
                dataType: 'html',
                data: $('form').serialize(),
                success: function(data){
                    alert(data);
                }
            });
        });

    var submit2 = document.querySelector("#submit2");
        submit2.addEventListener("click", function() {
            console.log("Ваша фамилия сохранена");

            $.ajax({
                url: '/surnameSave.php',
                method: 'post',
                dataType: 'html',
                data: $('form').serialize(),
                success: function(data){
                    alert(data);
                }
            });
        });
    
    var submit3 = document.querySelector("#submit3");
        submit3.addEventListener("click", function() {
            console.log("Ваша информация сохранена");

            $.ajax({
                url: '/saveInfo.php',
                method: 'post',
                dataType: 'html',
                data: $('form').serialize(),
                success: function(data){
                    alert(data);
                }
            });
        }); 
});



//  function loadPage() {
//     let keyOne = localStorage.getItem('img1');
//     console.log(keyOne);
//     let keyTwo = localStorage.getItem('img2');
//     console.log(keyTwo);
//     let keyThree = localStorage.getItem('img3');
//     console.log(keyThree);
//     let keyFour = localStorage.getItem('img4');
//     console.log(keyFour);
//     let keyFive = localStorage.getItem('img5');
//     console.log(keyFive);
//     if (keyOne === null) {
//         console.log('картинка не загружена ранее');
//     } else {
//         console.log('картинка загружена ранее');
//         var img = document.getElementById('#myImg1');
//         $(img).show();
//         var btn = document.querySelector('#lbl1');
//         $(btn).hide();
//         $(img).attr('src', keyOne);
//     }
//     if (keyTwo === null) {
//         console.log('картинка не загружена ранее');
//     } else {
//         console.log('картинка загружена ранее');
//         var img = document.querySelector('#myImg2');
//         $(img).show();
//         var btn = document.querySelector('#lbl2');
//         $(btn).hide();
//         $(img).attr('src', keyTwo);
//     }
//     if (keyThree === null) {
//         console.log('картинка не загружена ранее');
//     } else {
//         console.log('картинка загружена ранее');
//         var img = document.querySelector('#myImg3');
//         $(img).show();
//         var btn = document.querySelector('#lbl3');
//         $(btn).hide();
//         $(img).attr('src', keyThree);
//     }
//     if (keyFour === null) {
//         console.log('картинка не загружена ранее');
//     } else {
//         console.log('картинка загружена ранее');
//         var img = document.querySelector('#myImg4');
//         $(img).show();
//         var btn = document.querySelector('#lbl4');
//         $(btn).hide();
//         $(img).attr('src', keyFour);
//     }
//     if (keyFive === null) {
//         console.log('картинка не загружена ранее');
//     } else {
//         console.log('картинка загружена ранее');
//         var img = document.querySelector('#myImg5');
//         $(img).show();
//         var btn = document.querySelector('#lbl5');
//         $(btn).hide();
//         $(img).attr('src', keyFive);
//     }
//  }

// window.addEventListener('load', function() {
//     document.querySelector('#loadOne').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#myImg1');
//             $(img).show();
//             img.onload = () => {
//                 localStorage.setItem('img1', img.src);
//             }
//             var btn = document.querySelector('#lbl1');
//             $(btn).hide();
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// });

// window.addEventListener('load', function() {
//     document.querySelector('#loadTwo').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#myImg2');
//             $(img).show();
//             img.onload = () => {
//                 localStorage.setItem('img2', img.src);
//             }
//             var btn = document.querySelector('#lbl2');
//             $(btn).hide();
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// });

// window.addEventListener('load', function() {
//     document.querySelector('#loadThree').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#myImg3');
//             $(img).show();
//             img.onload = () => {
//                 localStorage.setItem('img3', img.src);
//             }
//             var btn = document.querySelector('#lbl3');
//             $(btn).hide();
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// });

// window.addEventListener('load', function() {
//     document.querySelector('#loadFour').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#myImg4');
//             $(img).show();
//             img.onload = () => {
//                 localStorage.setItem('img4', img.src);
//             }
//             var btn = document.querySelector('#lbl4');
//             $(btn).hide();
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//             console.log(img.src);
//         }
//     });
// });

// window.addEventListener('load', function() {
//     document.querySelector('#loadFive').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('#myImg5');
//             $(img).show();
//             img.onload = () => {
//                 localStorage.setItem('img5', img.src);
//             }
//             var btn = document.querySelector('#lbl5');
//             $(btn).hide();
//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });
// });

// window.onload = loadPage();
// //localStorage.clear();

// function test() {
//     if (localStorage.length !== 0) {
//         var img = document.querySelector('#myImg5');
//         $(img).show();
//             var btn = document.querySelector('#lbl5');
//             $(btn).hide();
//             img.src = localStorage.getItem('img4');
//     }
//     else {
//         console.log('ошибка');
//     }
// }
