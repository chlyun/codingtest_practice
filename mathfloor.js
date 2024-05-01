function solution(num1, num2) {
  var answer = (num1 / num2)*1000;
  return Math.floor(answer);
}  //나눗셈 할때 몫을 구하고싶으면 math.floor 반올림해서 작거나 긑 정수를 반환함