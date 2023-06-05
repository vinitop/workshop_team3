# workshop_team3
Software Craftmanship Workshop

To run the program: npm install
npm start
BOARD GAME CHECKERS

Abstract 

Around the world, passionate people are constantly looking for entertaining and thrilling games that are simple to access and also not to waste time.
Checkers, also known as draughts, is a group of strategy board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces. This web application will allow two players to play checkers game over the web . System will play the role of referee in the game . The software have ability to decide valid move for the user, the winner of the game. Intended user of this software is everyone above 5+ years of age, able to use Internet and have basic knowledge of checkers game. Further Extension of this software will include 1 player game In which AI will play with the player on other side.





1.	Problem Statement
	Deepak, a teenager, is bored and wants to play a brainstorming game and at the same time to chat with his friends online and get rid of boredom. Sahil suggested him to play this web game named Checkers(8x8) where he can develop strategies to win the game and at the same can communicate with his friend.

2.	Purpose
The main objective of this project is to provide a user interface to Deepak so that he can play as well as chat with Sahil. Here Deepak’s time will be invested in brainstorming.




3.	Overview
One of the oldest games in existence is the board game checkers, often known as draughts. Two players compete against one another over a board of 64 bright and dark squares, much like a chessboard. The 24 playing pieces have a disc form and are coloured differently (whatever their colours, they are identified as black and white). Each competitor has 12 pieces on the board when the game begins. The board is frequently shown backward for clarity even though the dark squares are always where the actual action takes place. Numbering the squares on the board serves as the foundation for the notation used to describe the game. The white pieces always rest on squares 13 and 14, while the black pieces always occupy squares 1 to 12.
The objective of the game is to move a piece diagonally forward to an adjacent empty square. Moving first is Black. An opponent's piece must be caught and eliminated by leaping over it to the empty square if it is in such an adjacent unoccupied square with a vacant space beyond. A series of forward jumps in a straight or zigzag manner must be completed during the same play if this square presents the same condition. The player has an option when there are multiple ways to jump. A piece must be crowned by the opponent, who lays another piece of the same colour on it, when it first enters the king row, the opponent's back row. The piece, which is now known as a king, also has the extra benefit of moving.

Game checkers provides certain facilities (functionalities) to the user, to solve the user requirements (1 player, 2 players).
4.	Product Perspective
In the project of 8x8 checkers, the product perspective is to provide complete interface where user can play single player and multiplayer game in web environment. GUI will be supplied to facilitate this purpose. 


5.	Single-player and Multi-player Mode:
We will be providing Multi-player Mode and in this mode one user can play with the second user in this mode , Checkers board is displayed in the centre and  in the right side there is a chat box so that they can chat with in , also taking it further  to lauch tournaments in the multiplayer mode so that onc can play with more than one person.
Tournament Flowchart

We will be implementing the Single Player mode or computer  mode in which onc player can play with the computer. The computer will be programmed in such a way to do only valid moves so that there should not any invalid move and if any of them wins , crown will be rewarded .
6.	User Characteristics
Special features will be provided to the user to fulfil the requirements of the user. 

7.	Potentials patterns of use
Regarding game of checkers, some users just play a game just for entertainment while other users might play a game occasionally. This game will facilitate all types of users whether they play just for entertainment or play on regular basis.
8.	Features
•	Two players will play on screen. 
•	The state of the game can be saved, and the game can be continued. 
•	Both versions of the game will be playable on the main screen.
•	Players will be able to click and point the pieces. 
•	Players will be able to change the theme of the app. 

9.	Main Flow
•	User pressed a piece.
•	User clicked the particular selected piece and then click on the empty box where the user wants to place that particular piece.
•	The system will check that position where the user has dropped the piece.
•	If at the new position of the piece there is already a piece then the piece which was dropped will come to its original position.

•	if at the new position there exist no piece and if the move of the piece is according to the rules of checkers given at the end of the document. Then the piece will be placed at this new position.

•	If the move of the piece is invalid then the piece will come to its original position.
•	If no piece left then the other player is declared winner.
•	If none of player can move then it is a draw.
•	If user press “resign” then the other player is declared winner.


10.	Functional Requirements
•	Computer shall be able to keep check of the valid moves.
•	Computer shall be able to keep check of the invalid moves.
•	Computer shall be able to tell at the end that which player has won the match.
•	Computer shall be able to keep track that currently which player has turn either player 1 or player 2.
•	Computer will keep track of the valid kill moves.
•	Computer shall be able not to allow the player to take wrong moves.
•	Computer shall be able to tell which player has won the game.


11.	Technical Specification Required By User
•	Hardware requirements
    Laptop/PC with :
1.	Internet even with the low latency.
2.	Installed web Browser- for opening the web application over internet.
•	Operating System-Any Operating system with web browser 

12.	Non-Functional Requirements
•	Platform:
The game should be implemented in web Environment.
•	Response:
Players will get instant feedback about the moves and games when interacted, without delays.
•	Reliability:
The system will be reliable as the user is confirmed that no invalid moves will be performed.

13.	Scenarios 
1. If Deepak wants to move a checker diagonally ,then that valid moves can be displayed by green colour blocks.
2. If Deepak tries to make a move which is invalid or which is not possible, then that particular block will be shown by a red color.
3. If Deepak makes a valid move then to indicate that it is Sahil's turn then his name dialog box will glow.
4. If Deepak's checker overlaps any other checker of Sahil then that particular overlapped checker of Sahil will get eliminated and one point will be credited to Deepak's score.
5. If any of the player's checker reaches to the opponent's end, then that particular checker will become King.
6. The king has the ability to move backwards
7. If Deepak wants save a game then he can save the game.
8. If the Deepak wants to continue his saved game , then he can do it with the help of load game option.
9. If anyone of the player wants to quit the game, then can choose the quit game option.
10. If a player wants to mock the second player thn he cxan easily do it with the help of chat option anytime.
11. If a player 1 wins the game then a pop up messsage of "You WON" will be shown to the winner screen and a pop message of  "YOU LOOSE" will appear to the player 2 screen.
14.	GUIs


	 Login Screen 

This contains a username field and a gameroom field. There are two options.
1.	Play Online, that is when you enter your username and your friend’s (opponent’s) username/code of the game room they have created.
2.	Play Offline where you play turn wise with another player in person.




	

 



	Game Screen


1.	When a player jumps over their opponent’s piece they gain a point.
2.	When a player tries to move to an illegal square, the square will glow bright red.

 



 





	Win Screen
When the player wins, they receive a full screen congratulations message. 
	Main UI

 
The main Game screen will have an 8x8 Grid where the player can play game. It will also have chat box where the player can chat with opponent. Resign and draw button will be provided to the users if they wish to end the game either by a draw or by resigning.

	 Chat Box 
In the chat box the player will be able to type and send a message to their opponent for quick communication. The sender’s username will be displayed next to the message.

 

	 Resigning Screen 
The resigning screen will show which player won and which player resigned.

 

	 Draw 

The draw option will be provided to the opponent and if they agree the game will be declared a draw. If they decline, then the game will continue.
 




White Offers A Draw And Opponent Black declines 


 

	 Crowing 

 
15.	USP (Unique Selling Point):

•	Chat box – Users will be the given a chat box to communicate via text with each other at the same time while playing.
•	Checker Animations- Each checker will glow when selected till moved.


16.	Future Scope
•	There will be a option to play with computer where you can play with an opponent(Artificial Intelligence) similar to your skillset(beginner, intermediate and Professional). And this option will be provided in offline mode. So the user can enjoy it even without the internet connection.
•	Users will be given ratings based on winning or losing of the game. i.e Ratings will start from 100 and for every win +10 added to the ratings. And for every losing round -5 will be deducted. The least rating would be 50.
•	Timer based game where the players will be bounded to complete the game.
•	We are even planning to make the game more fun and interacting by implementing sound effects for every kill.





17.	References 
https://www.researchgate.net/publication/339337169_checkers_research_paper_based_on_AI_2
https://en.wikipedia.org/wiki/Checkers

https://www.pygame.org/docs/
https://devdocs.io/pygame/






