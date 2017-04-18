(function() {
  'use strict'
  const wamGame = {
    init() { 
      this.cacheDom();
      this.bindEvents();
    },

    cacheDom() {
      this.gameEl = document.querySelector('.js-game');
      this.scoreBoard = document.querySelector('.js-score');
      this.btnStart = document.querySelector('.js-start-wam-game');
      this.holes = document.querySelectorAll('[class*="js-hole"]');
    },

    bindEvents() {
      this.btnStart.addEventListener('click', this.startGame.bind(this));
      this.gameEl.addEventListener('click', this.clickTargetHandler.bind(this));
    },

    renderScore(scoreValue = 0) {
      this.scoreBoard.innerHTML = scoreValue;
    },

    renderTarget(addClass = true) {
      if (addClass) {
        this.holes[this.targetNumber].classList.add('has-mole-up');
      } else {
        this.holes[this.targetNumber].classList.remove('has-mole-up');
      }
    },

    startGame() {
      this.gameDurS = 10;
      this.gameEnded = false;
      this.scoredAlready = false;
      this.scoreVal = 0;
      this.renderScore();

      setTimeout(() => this.gameEnded = true, this.gameDurS * 1000);

      this.showTarget();
    }, 

    endGame() {
      console.log('GAME END');
    },

    showTarget() {
      if (this.gameEnded) { 
        this.endGame();
        return;
      }
      this.targetNumber = this.getRandomNumber();
      this.renderTarget(true)
      this.scoredAlready = false;
      this.timeout = setTimeout(() => this.hideTarget(), this.getRandomDelayTime());     
    },

    hideTarget() {
      clearTimeout(this.timeout);
      this.renderTarget(false);
      this.showTarget();
    },

    getRandomDelayTime() {
      return this.getRandomVal(300, 600);
    },

    getRandomNumber() {
      const randNum = this.getRandomVal(0, this.holes.length - 1);
      if (randNum === this.targetNumber) { 
        this.getRandomNumber();
      }
      return randNum;
    },
    
    getRandomVal(min, max) {
      return Math.floor((Math.random() * max) + min);
    },

    clickTargetHandler(e) {
      if (
        !e.target.classList.contains('js-target') ||
        this.scoredAlready || 
        !e.isTrusted ||
        !e.target.parentNode.classList.contains(`js-hole${this.targetNumber + 1}`)
      ) { return; }
      this.scoreVal += 1; 

      this.renderScore(this.scoreVal);
      this.scoredAlready = true;
      this.hideTarget(true);
    }

  }

  wamGame.init();
})()
