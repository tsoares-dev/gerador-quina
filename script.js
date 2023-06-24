function generateCombinations() {
    var numbersInput = document.getElementById('numbersInput').value;
    var numbers = numbersInput.split(' ');
  
    if (numbers.length !== 10) {
      alert('Por favor, insira exatamente 10 números!');
      return;
    }
  
    var combinations = getCombinations(numbers, 5);
    var combinationCount = combinations.length;
  
    var combinationCountElement = document.getElementById('combinationCount');
    combinationCountElement.innerText = combinationCount;
  
    var combinationsList = document.getElementById('combinationsList');
    combinationsList.innerHTML = '';
  
    combinations.forEach(function(combination) {
      var combinationItem = document.createElement('p');
      combinationItem.innerText = combination.join(' ');
      combinationsList.appendChild(combinationItem);
    });
  }
  
  function getCombinations(numbers, k) {
    var combinations = [];
  
    function backtrack(remainingNumbers, currentCombination) {
      if (currentCombination.length === k) {
        combinations.push(currentCombination.slice());
        return;
      }
  
      for (var i = 0; i < remainingNumbers.length; i++) {
        currentCombination.push(remainingNumbers[i]);
        var newRemaining = remainingNumbers.slice(i + 1);
        backtrack(newRemaining, currentCombination);
        currentCombination.pop();
      }
    }
  
    backtrack(numbers, []);
    return combinations;
  }
  