function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}


question_number = "<h4>" + number1 + " X " + number2 + "</h4>";

input_box = "<br>Answer : <input type='text' id='input_check_box'>";

check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = question_number + input_box + check_button;

document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";


question_turn = "player1";
answer_turn = "player2";




function check() {

    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {

        if (answer_turn == "player1") {

            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        } else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
}




if (question_turn == "player1") {
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
} else {



    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
}


//There are a couple of issues in the provided code. Firstly, there are two elements with the same id attribute, output, and word. This can cause issues when selecting elements using JavaScript. Secondly, the send() function only calculates the value of the multiplication of the two input numbers but doesn't send or display it anywhere. You can add code to display or send the result to resolve this issue. Additionally, the check() function needs to include an else statement to handle when the user enters an incorrect answer. Lastly, the variables player1_score and player2_score are not defined in the code provided, which could cause an error when trying to update the score.