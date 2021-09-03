// start game
const hiddenTriangle = document.querySelector('.cards-game__bg-triangle')
const showRound = document.querySelector('.cards-game__round')
const showWinner = document.querySelector('.cards-game__round__box-winner')
let spanWinner = document.querySelector('.cards-game__round__box-winner__winner')
const borderPlayer = document.querySelector('.cards-game__round__game__image.player')
const cardPlayer = document.querySelector('.cards-game__round__game__image-bg.player')
const borderComputer = document.querySelector('.cards-game__round__game__image.computer')
const cardComputer = document.querySelector('.cards-game__round__game__image-bg.computer')
const borderPlayerWinner = document.querySelector('.cards-game__round__game__before.player')
const borderComputerWinner = document.querySelector('.cards-game__round__game__before.computer')
playerScore = 0

function game() {
  let selectCard = document.querySelectorAll('[data-card]')

  selectCard.forEach(item => {
    item.addEventListener('click', () => {
      const itemCard = item.getAttribute('data-card').toLowerCase()

      let playerSelect = itemCard
      let computerSelect = computerPlay()

      hiddenTriangle.classList.add('hidden-game')
      showRound.classList.remove('hidden-result')
      showWinner.classList.add('active')

      playRound(playerSelect, computerSelect)
      card(playerSelect, computerSelect)

      let score = document.querySelector('.score')
      score.innerHTML = playerScore
    })
  })
}

// insert the edge and the card to player and computer
function card(player, computer){
  if(player === 'paper'){
    borderPlayer.classList.add('picked-paper-border')
    cardPlayer.classList.add('picked-paper-card')
  } else if(player === 'scissors'){
    borderPlayer.classList.add('picked-scissors-border')
    cardPlayer.classList.add('picked-scissors-card')
  } else if(player === 'rock'){
    borderPlayer.classList.add('picked-rock-border')
    cardPlayer.classList.add('picked-rock-card')
  }

  if(computer === 'paper'){
    borderComputer.classList.add('picked-paper-border')
    cardComputer.classList.add('picked-paper-card')
  } else if(computer === 'scissors'){
    borderComputer.classList.add('picked-scissors-border')
    cardComputer.classList.add('picked-scissors-card')
  } else if(computer === 'rock'){
    borderComputer.classList.add('picked-rock-border')
    cardComputer.classList.add('picked-rock-card')
  }
}

// computer random pick
function computerPlay() {
  let random = ['rock', 'paper', 'scissors']
  return random[Math.floor(Math.random() * 3)].toLowerCase()

}

// play game
function playRound(playerSelect, computerSelect) {
  if(playerSelect === computerSelect) {
    borderPlayerWinner.classList.remove('winner')
      borderComputerWinner.classList.remove('winner')
    return spanWinner.innerHTML = 'ничья'
  } else if (playerSelect === 'paper'){
    if (computerSelect === 'scissors') {
      borderComputerWinner.classList.add('winner')
      borderPlayerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы проиграли'
    } else {
      playerScore++
      borderPlayerWinner.classList.add('winner')
      borderComputerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы выиграли'
    }
  } else if (playerSelect === 'scissors'){
    if (computerSelect === 'rock') {
      borderComputerWinner.classList.add('winner')
      borderPlayerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы проиграли'
    } else {
      playerScore++
      borderPlayerWinner.classList.add('winner')
      borderComputerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы выиграли'
    }
  } else if (playerSelect === 'rock'){
    if (computerSelect === 'paper') {
      borderComputerWinner.classList.add('winner')
      borderPlayerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы проиграли'
    } else {
      playerScore++
      borderPlayerWinner.classList.add('winner')
      borderComputerWinner.classList.remove('winner')
      return spanWinner.innerHTML = 'вы выиграли'
    }
  }
}

function playAgain() {
  removeBorderCard()
  hiddenTriangle.classList.remove('hidden-game')
  showRound.classList.add('hidden-result')
  showWinner.classList.remove('active')
}

function removeBorderCard(){
  borderPlayer.classList.remove('picked-paper-border')
  cardPlayer.classList.remove('picked-paper-card')
  borderPlayer.classList.remove('picked-scissors-border')
  cardPlayer.classList.remove('picked-scissors-card')
  borderPlayer.classList.remove('picked-rock-border')
  cardPlayer.classList.remove('picked-rock-card')

  borderComputer.classList.remove('picked-paper-border')
  cardComputer.classList.remove('picked-paper-card')
  borderComputer.classList.remove('picked-scissors-border')
  cardComputer.classList.remove('picked-scissors-card')
  borderComputer.classList.remove('picked-rock-border')
  cardComputer.classList.remove('picked-rock-card')
}

game()