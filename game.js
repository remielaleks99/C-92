player1_name = localStorage.getItem("player1_name");
console.log(player1_name);
player2_name = localStorage.getItem("player2_name");
console.log(player2_name);
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    var get_word = document.getElementById("word").value;
    var word = get_word.toLowerCase();
    console.log(word);

    var charAt1 = word.charAt(1);

    var lengthdivideby2 = Math.floor(word.length / 2);

    var charAt2 = word.charAt(lengthdivideby2);

    var lengthminus1 = word.length - 1;

    var charAt3 = word.charAt(lengthminus1);

    var remove_charAt1 = word.replace(charAt1, "_");

    var remove_charAt2 = remove_charAt1.replace(charAt2, "_");

    var remove_charAt3 = remove_charAt2.replace(charAt3, "_");

    question_word = "<h4 id='word_display'> Q. " + remove_charAt3 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}
var question_turn = "player1";
var answer_turn = "player2";
function check(){
    var get_answer = document.getElementById("input_check_box").value;
    var answer = get_answer.toLowerCase();
    console.log(answer);
    if(answer == word)
    {
        if(answer_turn == "player1"){
            console.log(player1_score);
            player1_score = player1_score + 1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}