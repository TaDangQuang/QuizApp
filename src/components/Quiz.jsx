import React, { useEffect, useState } from "react";
import Results from "./Results";

const quizData = [
  {
    question: "Nhà Lý dời đô từ Hoa Lư ra Thăng Long vào năm nào?",
    options: [
      "1005",
      "1009",
      "1010",
      "1012"
    ],
    answer: "1010",
  },
  {
    question: "Chiến dịch Điện Biên Phủ năm 1954 do ai chỉ huy?",
    options: [
      "Võ Nguyên Giáp",
      "Phạm Văn Đồng",
      "Trường Chinh",
      "Hồ Chí Minh"
    ],
    answer: "Võ Nguyên Giáp",
  },
  {
    question: "Hiệp định Giơ-ne-vơ năm 1954 quy định gì về Việt Nam?",
    options: [
      "Việt Nam thống nhất ngay lập tức",
      "Chia Việt Nam thành hai miền tạm thời theo vĩ tuyến 17",
      "Thành lập chính phủ liên hiệp hai miền",
      "Pháp tiếp tục quản lý miền Nam"
    ],
    answer: "Chia Việt Nam thành hai miền tạm thời theo vĩ tuyến 17",
  },
  {
    question: "Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 kết thúc bằng chiến dịch nào?",
    options: [
      "Chiến dịch Hạ Lào",
      "Chiến dịch Hồ Chí Minh",
      "Chiến dịch Điện Biên Phủ trên không",
      "Chiến dịch Đường 14 - Phước Long"
    ],
    answer: "Chiến dịch Hồ Chí Minh",
  },
  {
    question: "Sự kiện khai sinh nước Việt Nam Dân chủ Cộng hòa diễn ra năm?",
    options: ["1942", "1945", "1954", "1975"],
    answer: "1945",
  },
  {
    question: "Ai là người đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình?",
    options: [
      "Võ Nguyên Giáp",
      "Hồ Chí Minh",
      "Phạm Văn Đồng",
      "Trần Phú"
    ],
    answer: "Hồ Chí Minh",
  },
  {
    question: "Phong trào Cần Vương do ai phát động?",
    options: [
      "Nguyễn Ái Quốc",
      "Tôn Thất Thuyết và vua Hàm Nghi",
      "Phan Bội Châu",
      "Phan Chu Trinh"
    ],
    answer: "Tôn Thất Thuyết và vua Hàm Nghi",
  },
  {
    question: "Nhà Trần ba lần đánh bại quân xâm lược nào?",
    options: [
      "Quân Minh",
      "Quân Mông - Nguyên",
      "Quân Thanh",
      "Quân Xiêm"
    ],
    answer: "Quân Mông - Nguyên",
  },
  {
    question: "Binh pháp ‘Hịch tướng sĩ’ do ai soạn?",
    options: [
      "Nguyễn Trãi",
      "Trần Hưng Đạo",
      "Lê Lợi",
      "Lê Thánh Tông"
    ],
    answer: "Trần Hưng Đạo",
  },
  {
    question: "Chiến thắng Bạch Đằng năm 938 do ai lãnh đạo?",
    options: [
      "Ngô Quyền",
      "Đinh Bộ Lĩnh",
      "Lê Hoàn",
      "Trần Quốc Tuấn"
    ],
    answer: "Ngô Quyền",
  },
  {
    question: "Ngô Quyền đánh bại quân Nam Hán bằng chiến thuật gì?",
    options: [
      "Mai phục trên núi",
      "Dùng tượng binh",
      "Cắm cọc trên sông",
      "Đánh biển xa bờ"
    ],
    answer: "Cắm cọc trên sông",
  },
  {
    question: "Chiến thắng ‘Điện Biên Phủ trên không’ diễn ra vào năm nào?",
    options: ["1968", "1972", "1975", "1980"],
    answer: "1972",
  },
];

const Quiz = () => {

  const [optionSelected, setOptionSelection] = useState("");
  const [userAnswers, setUserAnwers] = useState(
    Array.from({ length: quizData.length })
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);

  const [isQuizEnded, setIsQuizEnded] = useState(false);

  const handleSelectedOption = (option, index) => {
    if(option === quizData[currentQuestion].answer){
      setScore((prev) => prev + 1)
    }

    setOptionSelection(option);
    
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnwers(newUserAnswers);
  }
  
  const goNext = () => {
    if(currentQuestion === quizData.length - 1){
      setIsQuizEnded(true);
    } else{
      setCurrentQuestion((prev) => prev + 1);
    }
  }

  const goBack = () => {
    if(currentQuestion > 0){
      setCurrentQuestion((prev) => prev - 1);
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
    setOptionSelection("")
    setScore(0);
    setUserAnwers(Array.from({ length: quizData.length }))
  }

  const rewatchQuiz = () => {
    setCurrentQuestion(0);
    setIsQuizEnded(false);
  }
  /*useEffect(() => {
    if(optionSelected === quizData[currentQuestion].answer){
      setScore((prev) => prev + 1)
    }
  }, [currentQuestion, optionSelected]);*/

  useEffect (()=> {
    const answer = Number(userAnswers[currentQuestion]);
    const pastOptionSelected = quizData[currentQuestion].options[answer];
    if(answer !== undefined){
     setOptionSelection(pastOptionSelected);
    } else {
      setOptionSelection("");
    }
  }, [currentQuestion, userAnswers])

  if(isQuizEnded){
    return <Results 
      score = {score}
      totalQuestionNum = {quizData.length}
      restartQuiz={restartQuiz}
      rewatchQuiz={rewatchQuiz}
    />
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">Câu {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].question}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button 
        key={option}
        className={`option ${optionSelected === option ? "selected" : ""}`}
        disabled = {!!optionSelected && optionSelected !== option}
        onClick={() => handleSelectedOption(option, index)}
        >
          {option}
        </button>
        ))}

        {
           optionSelected ? (optionSelected === quizData[currentQuestion].answer ? (
            <p className="correct-answer">Câu trả lời của bạn chính xác</p>
          ) : (
            <p className="incorrect-answer">Câu trả lời của bạn chưa chính xác</p>
          )) : (
            ""
          )}
      <div className="nav-buttons">
        <button 
          onClick={goBack}
          disabled={currentQuestion === 0}
        >
          Quay lại
        </button>
        <button 
          onClick={goNext}
          disabled={!optionSelected}
        >
          {currentQuestion === quizData.length - 1 ? "Hoàn thành quiz": "Kế tiếp" }
          </button>
      </div>
    </div>
    
  )
}

export default Quiz

