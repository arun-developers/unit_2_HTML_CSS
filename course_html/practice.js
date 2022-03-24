// function spiralTraversal(N, M, arr) {
//     //write code here

//     // top == row , left == column , bottom ==length of row , right == lenght of col

//     // decleare the variable and assign the value 

//     var top = 0; bottom = N - 1; rigth = M - 1; left = 0; count = 0; bag = "";

//     while (count < N * M) {      // use while loop to iterate the every value and count 

//         for (var i = top; i <= bottom; i++) {

//             bag += arr[i][left] + " ";    // run loop from top to bottom in left column 

//             count++;
//         }

//         left++;

//         for (var i = left; i <= rigth; i++) {

//             bag += arr[bottom][i] + " ";

//             count++;
//         }

//         bottom--;

//         for (var i = bottom; i >= top; i--) {

//             bag += arr[i][rigth] + " ";

//             count++;
//         }

//         rigth--;

//         for (var i = rigth; i >= left; i--) {

//             bag += arr[top][i] + " ";

//             count++;
//         }

//         top++;
//     }

//     console.log(bag);

// }
// ----------------------------------------------------------------------------------------------------
function runProgram(input){


}


 if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
// ---------------------------------------------------------------------------------------------

// var arr1 = [1, 2, 2, 3, 4, 5];

// var object_arr1 = {};

// for (var i = 0; i < arr1.length; i++) {

//     var num = arr1[i];

//     if (object_arr1[num]) {

//         object_arr1[num] += 1;
//     }
//     else {

//         object_arr1[num] = 1;

//     }

// } console.log(object_arr1);

// var unique_value = "";

// for (var num in object_arr1) {

//     unique_value += num;
// } console.log(unique_value);

// var factor_unique_value = 1;

// for (var i = 0; i < unique_value.length; i++) {
//     factor_unique_value = factor_unique_value * unique_value[i];
// } console.log(factor_unique_value);

// var arr2 = [1, 2, 3, 4, 5, 5];

// var object_arr2 = {};

// for (var i = 0; i < arr2.length; i++) {

//     var num1 = arr2[i];

//     if (object_arr2[num1]) {

//         object_arr2[num1] += 1;
//     }
//     else {

//         object_arr2[num1] = 1;
//     }
// } console.log(object_arr2);

// var unique_value2 = "";

// for (var num1 in object_arr2) {

//     unique_value2 += num1;
// } console.log(unique_value2);

// var factor_unique_value2 = 1;

// for (var i = 0; i < unique_value2.length; i++) {

//     factor_unique_value2 = factor_unique_value2 * unique_value2[i];
// } console.log(factor_unique_value2);

// if (factor_unique_value == factor_unique_value2) {

//     console.log("Yes");
// }
// else {

//     console.log("No");
// }

// ---------------------------------------------------------------------------------------------------------

// var str = "aabbc";

// var object_str = {};

// for (var i = 0; i < str.length; i++){

//     var char = str[i];

//     if (object_str[char] == undefined){

//         object_str[char] = 1;
//     }
//     else {

//         var pre_value = object_str[char];

//         object_str[char] = pre_value +1;
//     }
// }console.log(object_str);
// ---------------------------------------------------------------------------------------------

// var str1 = "palskdjfieuryt93516247oh"
// var str2 = "philacodist2021"
// var new_str_num = "";
// var new_str = "";
// for (var i = 0; i < str1.length; i++) {
//     if (str1[i] == 0 || str1[i] == 1 || str1[i] == 2 || str1[i] == 3 || str1[i] == 4 || str1[i] == 5 || str1[i] == 6 || str1[i] == 7 || str1[i] == 8 || str1[i] == 9) {
//         new_str_num += str1[i]
//     }
//     else {
//         new_str += str1[i];
//     }

// }
// var new_str_num1 = "";
// var new_str1 = "";
// for (var i = 0; i < str2.length; i++) {
//     if (str2[i] == 0 || str2[i] == 1 || str2[i] == 2 || str2[i] == 3 || str2[i] == 4 || str2[i] == 5 || str2[i] == 6 || str2[i] == 7 || str2[i] == 8 || str2[i] == 9) {
//         new_str_num1 += str2[i]
//     }
//     else {
//         new_str1 += str2[i];
//     }
// }
// var new_string = new_str + new_str_num;
// var new_string2 = new_str1 + new_str_num1
// var answer = "";
// for (var i = 0; i < new_string.length; i++) {
//     for (var j = 0; j < new_string2.length; j++) {
//         if (new_string[i] == new_string2[j]) {
//             answer += new_string[i]
//         }
//     }
// }
// console.log(answer);
// ---------------------------------------------------------------------------------------------------------------------

// function partyPlanning(N, PamID, M, JimID) {
//     //write code here

//     // object for pam
//     var object_pam = {};
//     for (var i = 0; i < N; i++) {
//         var num = PamID[i];
//         if (object_pam[num]) {
//             object_pam[num] += 1;
//         }
//         else {
//             object_pam[num] = 1;
//         }
//     }
//     var length_object_pam = Object.keys(object_pam).length  // To find the length of an object 


//     // object for jim 

//     var object_jim = {};
//     for (var i = 0; i < M; i++) {
//         var num = JimID[i];
//         if (object_jim[num]) {
//             object_jim[num] += 1;
//         }
//         else {
//             object_jim[num] = 1;
//         }
//     }
//     var length_object_jim = Object.keys(object_jim).length  // To find the length of an object 
//     var str = ""
//     for (var num in object_jim) {
//         str += num;
//     }
//     object_pam
//     for (var i = 0; i < str.length; i++) {
//         var num2 = str[i]
//         if (object_pam[num2]) {
//             object_pam[num2] += 1
//         }
//         else {
//             object_pam[num2] = 1;
//         }
//     }
//     var length_object_pam1 = Object.keys(object_pam).length

//     if (length_object_pam == length_object_pam1) {
//         console.log("Yes");
//     }
//     else {
//         console.log("No");
//     }

// }
// // -----------------------------------------------------------------------------------------------------
// function bagOfLetters(N1, str1, N2, str2) {
//     //write your code here
//     var str1_obj = {};
//     for (var i = 0; i < N1; i++) {
//         var char = str1[i];
//         if (str1_obj[char] == undefined) {
//             str1_obj[char] = 1;
//         }
//         else {
//             str1_obj[char] += 1;
//         }
//     }
//     var length_str1_obj = Object.keys(str1_obj).length;   // To find the length 

//     var str2_obj = {};
//     for (var i = 0; i < N2; i++) {
//         var char2 = str2[i];
//         if (str2_obj[char2] == undefined) {
//             str2_obj[char2] = 1;
//         }
//         else {
//             str2_obj[char2] += 1;
//         }
//     }
//     var length_str2_obj = Object.keys(str2_obj).length; // To find the length

//     var new_str2_obj = "";
//     for (var char2 in str2_obj) {
//         new_str2_obj += char2;
//     }
//     str1_obj
//     for (var i = 0; i < new_str2_obj.length; i++) {
//         var char_new_str2_obj = new_str2_obj[i];
//         if (str1_obj[char_new_str2_obj] == undefined) {   // To push the key of 2nd obj into 1st obj 
//             str1_obj[char_new_str2_obj] = 1;          // if length of 1st obj change = not formed 
//         }
//         else {
//             str1_obj[char_new_str2_obj] += 1;
//         }
//     }
//     var new_length_str1_obj = Object.keys(str1_obj).length;

//     if (new_length_str1_obj == length_str1_obj) {
//         console.log("Yes");
//     }
//     else {
//         console.log("No");
//     }

// }
// --------------------------------------------------------------------------------------------------
function swaparray(array,left,right){
    // write code here
    // while (left<right) {
        var temp = array[left];
        array[left]= array[right];
        array[right] = temp;
        console.log(array);
    // }
    
}
var array = [1,2,3,4];
var left = 0;
var right = array.length;
swaparray(array,left,right);

















