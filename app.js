// "use strict";
//----------------------------------------------------1 - ci üsul-------------------------------------------------------------------------------
// $(document).ready(function () {
//     $(".btn").click(() => {
//         //inputun daxilindəki dəyəri solu və sağı boşluqlardan (yəni trim()) təmizlənmiş halda al
//         let inputValue = $("input").val().trim();
//         // inputun dəyərin numeric dəyərə çevir
//         let numericValue = Number(inputValue);

//         // burda bir addNumericTodos() methodunun içərisində for dövrü var və orda deyir ki, inputa daxil edilən rəqəmi sən rəqəmin özü qədər təkrarlayaraq rəqəmin özünü yazdır
//         let addNumericTodos = () => {
//             for (let i = 0; i < numericValue; i++) {
//                 let numericTodos = $("<h2>").html(numericValue);
//                 $(".list").append(numericTodos);
//             }
//         }

//         //əgəg inputun dəyəri boşdursa onda "Zəhmət olmasa boş buraxmayın!" bu mesaj gəlsin yox əgər boş deyilsə həm də number deyilsə onda sən todu'nu string kimi əlavə et yox əgər rəqəmdirsə bu methodu yəni funksiyanı çalışdır ---> addNumericTodos()
//         inputValue == "" ? console.log("Zəhmət olmasa boş buraxmayın!") : !numericValue ? $(".list").append($("<h2>").html(inputValue)) : addNumericTodos();


//         //son olaraq inputun için təmizlə
//         $("input").val("");

//     });
// });








// -----------------------------------------------------2-ci üsul-------------------------------------------------------------------------------

// "use strict";
// $(document).ready(function () {
//     $(".btn").click(() => {
//         // inputun daxilindəki dəyəri solu və sağı boşluqlardan (yəni trim()) təmizlənmiş halda al
//         let inputValue = $("input").val().trim();
//         // inputun dəyərin numeric dəyərə çevir
//         let numericValue = Number(inputValue);

//         // burda bir addNumericTodos() methodunun içərisində for dövrü var və orda deyir ki, inputa daxil edilən rəqəmi sən rəqəmin özü qədər təkrarlayaraq rəqəmin özünü yazdır
//         let addNumericTodos = () => {
//             for (let i = 0; i < numericValue; i++) {
//                 $(".list").append(`<h2>${inputValue}</h2>`);
//             }
//         }

//         // əgəg inputun dəyəri boşdursa onda "Zəhmət olmasa boş buraxmayın!" konsolda bu mesaj gəlsin yox əgər boş deyilsə həm də number deyilsə onda sən todu'nu string kimi əlavə et yox əgər rəqəmdirsə bu methodu yəni funksiyanı çalışdır ---> addNumericTodos()
//         inputValue == "" ? console.log("Zəhmət olmasa boş buraxmayın!") : !numericValue ? $(".list").append(`<h2>${inputValue}</h2>`) : addNumericTodos();


//         // son olaraq inputun için təmizlə
//         $("input").val("");

//     });
// });









// -----------------------------------------------------3-cü üsul-------------------------------------------------------------------------------

// "use strict";
// $(document).ready(function () {
//     $(".btn").click(() => {
//         // inputun daxilindəki dəyəri solu və sağı boşluqlardan (yəni trim()) təmizlənmiş halda al
//         let inputValue = $("input").val().trim();


//         if (inputValue == "") {
//             // alert("Zəhmət olmasa boş buraxmayın!");
//             console.log("Zəhmət olmasa boş buraxmayın!");
//         } else if (!Number(inputValue)) {
//             $(".list").append(`<h2>${inputValue}</h2>`);
//         } else {
//             for (let i = 0; i < Number(inputValue); i++) {
//                 $(".list").append(`<h2>${inputValue}</h2>`);
//             }
//         }


//         // son olaraq inputun için təmizlə
//         $("input").val("");

//     });
// });








// -----------------------------------------------------4-cü üsul-------------------------------------------------------------------------------
"use strict";
$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault();
        if (!$.trim($("input").val()) == "") {
            let a = b => {
                for (let i = 0; i < b; i++) { $(".list").append(`<h2>${b}</h2>`); }
            }
            let v = f => Number(f) ? a(f) : $(".list").append(`<h2>${f}</h2>`);
            v($("input").val());
        }
        $("input").val("");
    })
});