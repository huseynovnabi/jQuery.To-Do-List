"use strict";
$(document).ready(function () {
    $("button").click(() => {
        // inputun dəyərin al
        let inputValue = $("input").val().trim();
        // numeric dəyərə çevir
        let numericValue = Number(inputValue);

        // burda bir addNumericTodos() methodunun içərisində for var və orda deyir ki, inputa daxil edilən rəqəmi sən rəqəmin özü qədər təkrarlayaraq rəqəmin özünü yazdır
        let addNumericTodos = () => {
            for (let i = 0; i < numericValue; i++) {
                let numericTodos = $("<h2>").text(numericValue);
                $(".list").append(numericTodos);
            }
        }

        // əgəg inputun dəyəri boşdursa onda "Zəhmət olmasa boş buraxmayın!" bu mesaj gəlsin yox əgər boş deyilsə həm də number deyilsə onda sən todu'nu string kimi əlavə et yox əgər rəqəmdirsə bu methodu yəni funksiyanı çalışdır ---> addNumericTodos()
        inputValue == "" ? alert("Zəhmət olmasa boş buraxmayın!") : !numericValue ? $(".list").append($("<h2>").text(inputValue)) : addNumericTodos();


        // son olaraq inputun için təmizlə
        $("input").val("");

    });
});





