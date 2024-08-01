document.addEventListener('DOMContentLoaded', function() {
  const letters = ['B', 'I', 'N', 'G', 'O'];
  const numRows = 5;
  const numCols = 5;
  const bingoTable = document.getElementById('bingoTable');
  const bingoBody = document.getElementById('bingoBody');
  const resetButton = document.getElementById('resetButton');
  let bingoCells = [];

  // Generate bingo cells
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement('tr');
    bingoCells[i] = [];
    for (let j = 0; j < numCols; j++) {
      const cell = document.createElement('td');
      cell.classList.add('bingo-cell');
      if (i === 2 && j === 2) {
        cell.textContent = 'Free';
        cell.dataset.marked = true; // Mark the center cell as 'marked'
      } else {
        cell.textContent = generateRandomNumber(letters[j]);
      }
      cell.addEventListener('click', function() {
        toggleMark(cell);
        checkBingo();
      });
      row.appendChild(cell);
      bingoCells[i][j] = cell;
    }
    bingoBody.appendChild(row);
  }

  // Reset button functionality
  resetButton.addEventListener('click', function() {
    resetBingo();
  });

  // Function to generate a random number for each column
  function generateRandomNumber(letter) {
    const min = (letter === 'B') ? 1 : ((letter === 'I') ? 16 : ((letter === 'N') ? 31 : ((letter === 'G') ? 46 : 61)));
    const max = (letter === 'B') ? 15 : ((letter === 'I') ? 30 : ((letter === 'N') ? 45 : ((letter === 'G') ? 60 : 75)));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to toggle marking of a cell
  function toggleMark(cell) {
    if (cell.dataset.marked) {
      delete cell.dataset.marked;
      cell.classList.remove('marked');
    } else {
      cell.dataset.marked = true;
      cell.classList.add('marked');
    }
  }

  // Function to check for bingo
  function checkBingo() {
    // Check rows
    let bingo = false;
    for (let i = 0; i < numRows; i++) {
      let rowComplete = true;
      for (let j = 0; j < numCols; j++) {
        if (!bingoCells[i][j].dataset.marked) {
          rowComplete = false;
          break;
        }
      }
      if (rowComplete) {
        bingo = true;
        break;
      }
    }

    // Display big X if bingo is achieved
    if (bingo) {
      displayBigX();
    }
  }

  // Function to display big X
  function displayBigX() {
    const bigX = document.createElement('div');
    bigX.innerHTML = `
      <div class="row justify-content-center mt-5">
        <div class="col-auto">
          <h1>&#10006;</h1>
          <p class="lead">¡Bingo!</p>
        </div>
      </div>
    `;
    document.body.appendChild(bigX);
  }

  // Function to reset bingo
  function resetBingo() {
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        delete bingoCells[i][j].dataset.marked;
        bingoCells[i][j].classList.remove('marked');
      }
    }
    const bigX = document.querySelector('.big-x');
    if (bigX) {
      bigX.remove();
    }
  }
});







document.addEventListener('DOMContentLoaded', function() {
    const letters = ['B', 'I', 'N', 'G', 'O'];
    const numRows = 5;
    const numCols = 5;
    const bingoTable = document.getElementById('bingoTable');
    const bingoBody = document.getElementById('bingoBody2');
    const resetButton = document.getElementById('resetButton');
    let bingoCells = [];
  
    // Generate bingo cells
    for (let i = 0; i < numRows; i++) {
      const row = document.createElement('tr');
      bingoCells[i] = [];
      for (let j = 0; j < numCols; j++) {
        const cell = document.createElement('td');
        cell.classList.add('bingo-cell');
        if (i === 2 && j === 2) {
          cell.textContent = 'Free';
          cell.dataset.marked = true; // Mark the center cell as 'marked'
        } else {
          cell.textContent = generateRandomNumber(letters[j]);
        }
        cell.addEventListener('click', function() {
          toggleMark(cell);
          checkBingo();
        });
        row.appendChild(cell);
        bingoCells[i][j] = cell;
      }
      bingoBody.appendChild(row);
    }
  
    // Reset button functionality
    resetButton.addEventListener('click', function() {
      resetBingo();
    });
  
    // Function to generate a random number for each column
    function generateRandomNumber(letter) {
      const min = (letter === 'B') ? 1 : ((letter === 'I') ? 16 : ((letter === 'N') ? 31 : ((letter === 'G') ? 46 : 61)));
      const max = (letter === 'B') ? 15 : ((letter === 'I') ? 30 : ((letter === 'N') ? 45 : ((letter === 'G') ? 60 : 75)));
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Function to toggle marking of a cell
    function toggleMark(cell) {
      if (cell.dataset.marked) {
        delete cell.dataset.marked;
        cell.classList.remove('marked');
      } else {
        cell.dataset.marked = true;
        cell.classList.add('marked');
      }
    }
  
    // Function to check for bingo
    function checkBingo() {
      // Check rows
      let bingo = false;
      for (let i = 0; i < numRows; i++) {
        let rowComplete = true;
        for (let j = 0; j < numCols; j++) {
          if (!bingoCells[i][j].dataset.marked) {
            rowComplete = false;
            break;
          }
        }
        if (rowComplete) {
          bingo = true;
          break;
        }
      }
  
      // Display big X if bingo is achieved
      if (bingo) {
        displayBigX();
      }
    }
  
    // Function to display big X
    function displayBigX() {
      const bigX = document.createElement('div');
      bigX.innerHTML = `
        <div class="row justify-content-center mt-5">
          <div class="col-auto">
            <h1>&#10006;</h1>
            <p class="lead">¡Bingo!</p>
          </div>
        </div>
      `;
      document.body.appendChild(bigX);
    }
  
    // Function to reset bingo
    function resetBingo() {
      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          delete bingoCells[i][j].dataset.marked;
          bingoCells[i][j].classList.remove('marked');
        }
      }
      const bigX = document.querySelector('.big-x');
      if (bigX) {
        bigX.remove();
      }
    }
  });