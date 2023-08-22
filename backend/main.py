from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/questions', methods=["GET"])
def get_questions():
    data = [
        {
            "question": "1. Which CSS property is used to control the spacing between letters in a text?",
            "options": [
              "A) letter-spacing",
              "B) word-spacing",
              "C) text-spacing",
              "D) spacing"
            ],
            "correct_answer": "A) letter-spacing"
          },
          {
            "question": "2. How can you apply a background image to an element using CSS?",
            "options": [
              "A) background-image: url('image.jpg');",
              "B) image: url('image.jpg');",
              "C) background: image('image.jpg');",
              "D) url: background('image.jpg');"
            ],
            "correct_answer": "A) background-image: url('image.jpg');"
          },
          {
            "question": "3. Which CSS property is used to create a transition effect on an element?",
            "options": [
              "A) animation",
              "B) transition",
              "C) transform",
              "D) effect"
            ],
            "correct_answer": "B) transition"
          },
          {
            "question": "4. What does the 'pseudo-element' ::before do in CSS?",
            "options": [
              "A) Adds content before the element's content",
              "B) Adds content after the element's content",
              "C) Adds content above the element's content",
              "D) Adds content below the element's content"
            ],
            "correct_answer": "A) Adds content before the element's content"
          },
          {
            "question": "5. Which CSS value is used to create a horizontal gradient background?",
            "options": [
              "A) gradient-direction: horizontal;",
              "B) background: linear-gradient(horizontal, red, blue);",
              "C) background: gradient(horizontal, red, blue);",
              "D) background: horizontal-gradient(red, blue);"
            ],
            "correct_answer": "B) background: linear-gradient(horizontal, red, blue);"
          },
          {
            "question": "6. How can you select the last child element of a parent using CSS?",
            "options": [
              "A) parent:last-child",
              "B) parent child:last",
              "C) parent > :last-child",
              "D) parent :last-child"
            ],
            "correct_answer": "D) parent :last-child"
          },
          {
            "question": "7. What is the purpose of the 'min-width' property in CSS?",
            "options": [
              "A) Sets the maximum width of an element",
              "B) Sets the minimum width of an element",
              "C) Limits the width of a container element",
              "D) Adjusts the space between elements"
            ],
            "correct_answer": "B) Sets the minimum width of an element"
          },
          {
            "question": "8. Which CSS property is used to change the color of an element's border?",
            "options": [
              "A) border-color",
              "B) color",
              "C) border-style",
              "D) border"
            ],
            "correct_answer": "A) border-color"
          },
          {
            "question": "9. What is the purpose of the 'counter' function in CSS?",
            "options": [
              "A) Counts the number of elements",
              "B) Increases the font size of an element",
              "C) Adds numbering to elements",
              "D) Counts the characters in a text"
            ],
            "correct_answer": "C) Adds numbering to elements"
          },
          {
            "question": "10. How can you select only even rows of a table using CSS?",
            "options": [
              "A) tr:even",
              "B) tr:nth-child(even)",
              "C) tr:odd",
              "D) tr:nth-child(odd)"
            ],
            "correct_answer": "B) tr:nth-child(even)"
          },
          {
            "question": "11. Which CSS property is used to create a flexible grid layout?",
            "options": [
              "A) grid-template",
              "B) display: grid;",
              "C) layout: grid;",
              "D) grid-layout"
            ],
            "correct_answer": "B) display: grid;"
          },
          {
            "question": "12. What does the 'box-decoration-break' property in CSS control?",
            "options": [
              "A) The width of a box element",
              "B) The spacing within a box element",
              "C) How box decorations are split across lines",
              "D) The position of a box element"
            ],
            "correct_answer": "C) How box decorations are split across lines"
          },
          {
            "question": "13. Which CSS selector targets elements that are being hovered over by the mouse?",
            "options": [
              "A) :hover",
              "B) :active",
              "C) :focus",
              "D) :mouseover"
            ],
            "correct_answer": "A) :hover"
          },
          {
            "question": "14. How can you set a fixed background image that doesn't scroll with the content?",
            "options": [
              "A) background-attachment: fixed;",
              "B) background-scroll: none;",
              "C) background-type: fixed;",
              "D) image-attachment: fixed;"
            ],
            "correct_answer": "A) background-attachment: fixed;"
          },
          {
            "question": "15. Which CSS property is used to control the spacing between columns in a multi-column layout?",
            "options": [
              "A) column-width",
              "B) column-gap",
              "C) gap",
              "D) column-spacing"
            ],
            "correct_answer": "B) column-gap"
          },
          {
            "question": "16. What is the purpose of the 'ch' unit in CSS?",
            "options": [
              "A) Represents the width of a character",
              "B) Stands for 'child height'",
              "C) Measures the height of an element",
              "D) Represents a percentage value"
            ],
            "correct_answer": "A) Represents the width of a character"
          },
          {
            "question": "17. Which CSS value is used to create a radial gradient background?",
            "options": [
              "A) gradient-type: radial;",
              "B) background: radial-gradient(red, blue);",
              "C) background: linear-gradient(radial, red, blue);",
              "D) background: gradient(radial, red, blue);"
            ],
            "correct_answer": "B) background: radial-gradient(red, blue);"
          },
          {
            "question": "18. How can you create a shadow effect that appears underneath an element using CSS?",
            "options": [
              "A) shadow: bottom;",
              "B) box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);",
              "C) element-shadow: below;",
              "D) shadow: under;"
            ],
            "correct_answer": "B) box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);"
          },
          {
            "question": "19. Which CSS property is used to control the layout of a flex container's items?",
            "options": [
              "A) item-layout",
              "B) flex-items",
              "C) flex-flow",
              "D) flex-direction"
            ],
            "correct_answer": "D) flex-direction"
          },
          {
            "question": "20. What does the 'viewport' refer to in terms of responsive design?",
            "options": [
              "A) The maximum width of a web page",
              "B) The minimum width of a web page",
              "C) The visible area of a web page on a device's screen",
              "D) The area below the fold on a web page"
            ],
            "correct_answer": "C) The visible area of a web page on a device's screen"
          }
        ]

    return jsonify(data)

if "__main__" == __name__:
    app.run(debug=True)
