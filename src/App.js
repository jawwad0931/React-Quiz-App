import { useState } from "react";
import './App.css';

function App() {
  // Array of questions and answers
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "4",
    },
    {
      question: "Which is the largest planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Jupiter",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Picasso", "Da Vinci", "Monet"],
      answer: "Da Vinci",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: "Pacific",
    },
    {
      question: "What is the boiling point of water?",
      options: ["100°C", "50°C", "0°C", "25°C"],
      answer: "100°C",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Won", "Ringgit"],
      answer: "Yen",
    },
    {
      question: "Who is the first President of the United States?",
      options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
      answer: "George Washington",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Mount Kilimanjaro"],
      answer: "Mount Everest",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "What is the smallest country in the world?",
      options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      answer: "Vatican City",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Pb", "Fe"],
      answer: "Au",
    },
    {
      question: "Which continent is known as the Dark Continent?",
      options: ["Africa", "Asia", "Australia", "Antarctica"],
      answer: "Africa",
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      answer: "12",
    },
    {
      question: "In which year did World War II end?",
      options: ["1940", "1941", "1945", "1950"],
      answer: "1945",
    },
    {
      question: "What is the fastest land animal?",
      options: ["Lion", "Elephant", "Cheetah", "Horse"],
      answer: "Cheetah",
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Karakum", "Antarctic Desert"],
      answer: "Antarctic Desert",
    },
    {
      question: "What is the chemical symbol for oxygen?",
      options: ["O", "O2", "Ox", "O3"],
      answer: "O",
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Nikola Tesla", "Thomas Edison", "Marie Curie"],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Lion", "Tiger", "Elephant", "Giraffe"],
      answer: "Lion",
    }
  ];
  

  // State variables for the current question, score, and quiz completion
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Function to handle option selection
  const handleOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  // Function to restart the quiz
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <>
      {isFinished ? (
        <div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <img src="/images/quizimage.png" height={"150px"} width={"150px"}/>
          </div>
          <h1>Quiz Finished</h1>
          <h2>Score: {score} Out of 4</h2>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <div style={{display:"flex",justifyContent:"center"}}>
          <img src="/images/quizimage.png" height={"150px"} width={"150px"}/>
          </div>
          <h2 id="h2">{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
