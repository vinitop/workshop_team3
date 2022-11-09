The CheckersGame Class
The Checkers Game class has methods to:
1.	Make a move.
2.	Switching player when one player had made the move.
3.	Initialize the main file.

The Board Class
The board class contains an array of type integer of legal moves. It is the class responsible for setting the board. It has methods to:
1.	Initialize the board.
2.	Print the board on screen.
3.	Get the pieces on the board.
4.	Remove pieces on the board.
5.	Check if a new position is available.
6.	Check if the position is within bound.

The Player Class
The player class defines the player number and whose turn it is. Player number is of data type integer that identifies the player. Turn is of data type Boolean. If it’s the player’s turn then it will be true, otherwise false.
The Player class has these methods to:
1.	Select coordinates for the move to be played.
2.	Play a regular move.
3.	Play an attacking move.

The Coordinate Class
The Coordinate class has an x-coordinate variable, and a y-coordinate variable, both of type integer.


The Piece Class
The piece class defines the piece for its owner and its position. The piece class has properties to:
1.	Contain the owner of the piece.
2.	Place the X-coordinate.
3.	Place the Y-coordinate.
4.	Set the color of the piece.

The King Class
The king class will hold the shape information and a move method.

