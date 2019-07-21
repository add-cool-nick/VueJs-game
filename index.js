new Vue ({

	el: "#app",
	data: {
		gameStatus: false,
		playerHealth: 100,
		monsterHealth: 100,
		attackHistory: [],
	},
	methods: {
		attackFn: function(){
			var rand1 = Math.floor(Math.random() * 5) + 1;
			var rand2 = Math.floor(Math.random() * 8) + 1;

			this.playerHealth -= rand2;
			this.monsterHealth -= rand1;

			this.attackHistory.push("Player dealt " + rand1 + " damage on monster");
			this.attackHistory.push("Monster dealt " + rand2 + " damage on player" );

			if (this.playerHealth<=0 || this.monsterHealth<=0) {

				if (this.playerHealth<=0) {
					alert("You Lost!! Better Luck next time!");
				}
				else {
					alert("Congratulations, You Won!!");
				}

				this.gameStatus = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;

				this.attackHistory.length = 0;


			}


		},
		splAttackFn: function(){
			var rand1 = Math.floor(Math.random() * 10) + 3;
			var rand2 = Math.floor(Math.random() * 8) + 1;
			

			this.playerHealth -= rand2;
			this.monsterHealth -= rand1;

			this.attackHistory.push("Player dealt " + rand1 + " damage on monster");
			this.attackHistory.push("Monster dealt " + rand2 + " damage on player" );

			if (this.playerHealth<=0 || this.monsterHealth<=0) {

				if (this.playerHealth<=0) {
					alert("You Lost!! Better Luck next time!");
				}
				else {
					alert("Congratulations, You Won!!");
				}


				this.gameStatus = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;

				this.attackHistory.length = 0;

			}

		},
		healFn: function(){
			var rand1 = Math.floor(Math.random() * 10) + 1;
			var rand2 = Math.floor(Math.random() * 10) + 1;

			this.playerHealth += rand1;
			this.playerHealth -= rand2;

			this.attackHistory.push("Player healed by " + rand1 + " health");
			this.attackHistory.push("Monster dealt " + rand2 + " damage on player" );


			if (this.playerHealth<=0 || this.monsterHealth<=0) {

				if (this.playerHealth<=0) {
					alert("You Lost!! Better Luck next time!");
				}
				else {
					alert("Congratulations, You Won!!");
				}

				
				this.gameStatus = false;
				this.playerHealth = 100;
				this.monsterHealth = 100;

				this.attackHistory.length = 0;

			}


		},

		giveUpFn: function(){

			this.attackHistory.length = 0;

			this.gameStatus = false;
			this.playerHealth = 100;
			this.monsterHealth = 100;

		}


	}

})