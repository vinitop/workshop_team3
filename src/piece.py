from .constants import RED, WHITE, SQUARE_SIZE, GREY, CROWN
import pygame

  # The code is a class definition for the piece.
  #It defines the Piece class, which has three methods: __init__(), calc_pos(), and make_king().
class Piece:
    PADDING = 15
    OUTLINE = 2

#The constructor takes three arguments: row, col, and color.
#The __init__() method sets up the object's attributes, while calc_pos() calculates the position of the object on screen.
    def __init__(self, row, col, color):
        self.row = row
        self.col = col
        self.color = color
        self.king = False
        self.x = 0
        self.y = 0
        self.calc_pos()

#Constructor then assigns those values to variables that are used in the function calc_pos().
    def calc_pos(self):
        self.x = SQUARE_SIZE * self.col + SQUARE_SIZE // 2
        self.y = SQUARE_SIZE * self.row + SQUARE_SIZE // 2


#The make_king() method sets whether or not the piece is a king.
    def make_king(self):
        self.king = True
    
#The draw() function draws a circle with a specified color and radius at (x, y) coordinates on screen.
    def draw(self, win):
        radius = SQUARE_SIZE//2 - self.PADDING
        pygame.draw.circle(win, GREY, (self.x, self.y), radius + self.OUTLINE)
        pygame.draw.circle(win, self.color, (self.x, self.y), radius)
        #If it is set to True, then it also draws a crown on top of that circle.
        if self.king:
            win.blit(CROWN, (self.x - CROWN.get_width()//2, self.y - CROWN.get_height()//2))

    def move(self, row, col):
        self.row = row
        self.col = col
        self.calc_pos()

    def __repr__(self):
        return str(self.color)
    
 



#The code is an example of a class definition.




