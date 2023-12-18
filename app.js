"use strict";
$(document).ready(function () {
    $("button").click(() => {
        // inputun dəyərin al
        let inputValue = $("input").val();
        // numeric dəyərə çevir
        let numericValue = Number(inputValue);

        if (inputValue == "") {
            alert("Zəhmət olmasa boş buraxmayın!");
        } else if (!numericValue) {
            // əgər daxil edilmiş dəyər Number deyilsə, onu String kimi əlavə et
            let stringTodos = $("<h2>").text(inputValue);
            $(".list").append(stringTodos);

        } else if (numericValue) {
            // əgər daxil edilən dəyər ədəddirsə, onu ədəd qədər təkrar-təkrar əlavə et
            for (let i = 0; i < numericValue; i++) {
                let numericTodos = $("<h2>").text(numericValue);
                $(".list").append(numericTodos);
            }
        }
        // son olaraq inputun için təmizlə
        $("input").val("");

    });
});





