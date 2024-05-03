    
  
    
    
    document.getElementById('quizButton').addEventListener('click', startQuiz);

    function startQuiz() {    

        var sectionToReveal = document.getElementById("mainQuestion");
         // scrolling
        var sectionTop = sectionToReveal.offsetTop; // Get the section's top position
        window.scroll({
          top: sectionTop,
          behavior: "smooth" // Optional: Smooth scrolling animation
        })
    }
    







    
    
    // Add event listeners to all options in section one
    const section1Options = document.querySelectorAll('#section1 .option');
    section1Options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    // Add event listeners to all options in section two
    const section2Options = document.querySelectorAll('#section2 .option');
    section2Options.forEach(option => {
        option.addEventListener('click', selectOption);
    });

    function selectOption() {
        // Check if any other option in the same question is selected
        const questionOptions = this.parentElement.querySelectorAll('.option');
        questionOptions.forEach(option => {
            option.classList.remove('selected');
        });
        // Add 'selected' class to the clicked option
        this.classList.add('selected');
        // Calculate total points for the current section
        calculatePoints();
    }


// VARIABLES___________________________________________________________________________________________________________
// WORDPLAY DISTRICT- AREA OF category MES (message-9)- pls reduce i beg of you- you overdoer- okay u reduced it- nice- 7 are active


const mes_minimal = "Congratulations! Your low score on this assessment indicates a low chance of developing an alcohol addiction later in life. This is likely due to your mindful choices regarding alcohol consumption and lifestyle choices. You prioritize activities you enjoy that don't involve alcohol, and you demonstrate a strong awareness of your limits. Maintaining these responsible habits contributes significantly to a healthy lifestyle. Remember, a healthy lifestyle benefits your entire body and mind. Keep up the excellent work! ";

const mes_low = "You're on the right track! Your current habits suggest a low potential for future alcohol dependence. This is likely due to your balanced and cautious approach towards alcohol. You demonstrate good self-awareness and prioritize your well-being. Staying vigilant and making informed choices about alcohol consumption, like pacing yourself and having alcohol-free days, can go a long way in safeguarding your long-term health.\n";

const mes_slight = "slight- going light"; // not in use

const mes_moderate = "Be mindful if seeking alcohol. Consider reducing your intake if you do consume and seek support if needed. This might be due to your social circles, personality traits or drinking history, even if your current consumption isn't high.  Taking proactive steps now can help you stay healthy and mitigate potential risks down the line. Being mindful and self aware about you habits may prove helpful in preventing escalation.";

const mes_elevated = "Test results show you have a higher chance of future alcohol dependence. This could be due to social circles, personality, or past drinking. Even if you don't drink much now, consider reducing triggers and talk to someone you trust. It's a sign of strength to seek help! Try pacing yourself and alcohol-free days to build awareness. \n\n\n";

const mes_high = "Your current lifestyle/attitude could lead to problematic drinking in the future, even if your alcohol consumption isn't high. Taking proactive measures to manage these factors and seeking support can be highly beneficial. Talking to a health professional at your student health center about your concerns and exploring strategies to manage your drinking habits could be a great step. Remember, prioritizing your well-being is essential, and support is readily available.";

const mes_significant = "High alcohol dependence risk! Social factors, personality, or drinking habits might be a concern. Current intake isn't the only indicator. Talk to trusted people or get on-campus support if you notice unhealthy patterns. Self-awareness is key! Recognizing this risk empowers you to take proactive steps towards a healthier future.  Consider tracking your drinks and keeping an eye on how you feel after consuming alcohol.";

const mes_severe = "severus snape- you need help"; // not in use

const mes_critical = "Your score reveals a critical risk for developing a severe alcohol addiction. Immediate intervention is crucial to safeguard your health and well-being. Don't hesitate to seek help or call emergency services if needed. Alcohol addiction ruins not just your life, but those who love you as well. This poison disguised as fun destroys body. Seek help and become self aware before the situation worsens.\n\n";

const mes_error = "There seems to be an error. Not all the questions were answered. Please answer all the questions to get an answer \n\n\n\n "; 


// COLORES A DOLORES- css list is still there. don't know why---got it- for reference purposes- incase i change the colors.

const color_minimal =     "#B5E553";

// const color_low =         "#5EEE99";

const color_low =      "#49E2F0";

const color_moderate =    "#66C0FD";

const color_elevated =    "#A28FFF";

const color_high =        "#FD9BB2";

const color_significant = "#BC3B64";

// const color_severe =      "#BC3B64";

const color_critical =    "#91166D";

// END DA VARIABLES________________________________________________________________________________________________________


    function calculatePoints() {
        let section1Total = 0;
        let section2Total = 0;
        let bonus = 0;
        
    
        const section1SelectedOptions = document.querySelectorAll('#section1 .option.selected');
        section1SelectedOptions.forEach(option => {
            section1Total += parseInt(option.getAttribute('data-points'));
        });
        // document.getElementById('section1Points').innerText = section1Total;

        const section2SelectedOptions = document.querySelectorAll('#section2 .option.selected');
        section2SelectedOptions.forEach(option => {
            section2Total += parseInt(option.getAttribute('data-points'));
        });
        // document.getElementById('section2Points').innerText = section2Total;

        // if then else condition application to secnd section of score --------------------------------

        if (section2Total <= 12) {
            bonus = 1;
        } else if (section2Total > 12 && section2Total <= 24) {
            bonus = 2;
        } else if (section2Total > 24) {
            bonus = 3;
        }


            // The final scoring and percentage at the mo-------------------------------------------------
            // max possible value = 241
            //  min possible value= 42
            // range- high-low= 199

            let fScore = bonus + section1Total;
            let range = 241-42;     
            //fScore = 193; //temporary
            let new_base = fScore-42;


            // pScore is percentage. Fscore is total
            let pScore = new_base * 100/(range);
            //pScore = 0;



        //    spare parts and correction center------------------------------------------------------------
            // document.getElementById('sectionTotalPoints').innerText = fScore;
            // document.getElementById('sectionPercentPoints').innerText = pScore.toFixed(1) + " %";

            // SAFETY NET OF 0 and 100 --------------------SAFETY-------------SAFETY-----------SAFETY------------SAFETY---------SAFETY-------------------------------
            

            if (pScore == 100) {
                pScore = 99.9 ;

            } else if (pScore == 0) {
                pScore = 0.1 ;

            } else {}




            // assigning the values and sending of to print_________the card section_________________________________________

            document.getElementById('result_percent').innerText = pScore.toFixed(1) + " %";
            
            // var for the if elsif
            const text_left = document.getElementById("result_classification_left");
            const text_right = document.getElementById("result_classification_right");
            const card = document.getElementById("img_result_container");
            const r_image = document.getElementById("result_img");




            if (pScore >= 90) {
                // the category
                text_left.innerText = "critical";
                text_right.innerText = "critical";
                // the message
                document.getElementById('result_message').innerText = mes_critical;
                // the image
                r_image.src = "assets/brainy7.svg";
                // the colors
                text_left.style.color = color_critical;
                text_right.style.color = color_critical;
                card.style.boxShadow = '0px 0px 60px 2px #91166D';
                




            // } else if (pScore >= 80) {
            //     text_left.innerText = "severe";
            //     text_right.innerText = "severe";
            //     // the message
            //     document.getElementById('result_message').innerText = mes_severe;
            //     // the image
            //     // the colors
            //     text_left.style.color = color_severe;
            //     text_right.style.color = color_severe;
            //     card.style.boxShadow = '0px 0px 60px 2px #BC3B64';



            } else if (pScore >= 75) {
                text_left.innerText = "significant";
                text_right.innerText = "significant";
                // the message
                document.getElementById('result_message').innerText = mes_significant;
                // the image
                r_image.src = "assets/brainy6.svg";
                // the colors
                text_left.style.color = color_significant;
                text_right.style.color = color_significant;
                card.style.boxShadow = '0px 0px 60px 2px #BC3B64';
                



            } else if (pScore >= 60) {
                text_left.innerText = "high";
                text_right.innerText = "high";
                // the message
                document.getElementById('result_message').innerText = mes_high;
                // the image
                r_image.src = "assets/brainy5.svg";
                // the colors
                text_left.style.color = color_high;
                text_right.style.color = color_high;
                card.style.boxShadow = '0px 0px 60px 2px #FD9BB2';



            } else if (pScore >= 50) {
                text_left.innerText = "elevated";
                text_right.innerText = "elevated";
                // the message
                document.getElementById('result_message').innerText = mes_elevated;
                // the image
                r_image.src = "assets/brainy4.svg";
                // the colors
                text_left.style.color = color_elevated;
                text_right.style.color = color_elevated;
                card.style.boxShadow = '0px 0px 60px 2px #A28FFF';



            } else if (pScore >= 40) {
                text_left.innerText = "Moderate";
                text_right.innerText = "Moderate";
                // the message
                document.getElementById('result_message').innerText = mes_moderate;
                // the image
                r_image.src = "assets/brainy3.svg";
                // the colors
                text_left.style.color = color_moderate;
                text_right.style.color = color_moderate;
                card.style.boxShadow = '0px 0px 60px 2px #66C0FD';



            // } else if (pScore >= 40) {
            //     text_left.innerText = "Slight";
            //     text_right.innerText = "Slight";
            //     // the message
            //     document.getElementById('result_message').innerText = mes_slight;
            //     // the image
            //     // the colors
            //     text_left.style.color = color_slight;
            //     text_right.style.color = color_slight;
            //     card.style.boxShadow = '0px 0px 60px 2px #49E2F0';



            } else if (pScore >= 20) {
                text_left.innerText = "Low";
                text_right.innerText = "Low";
                // the message
                document.getElementById('result_message').innerText = mes_low;
                // the image
                r_image.src = "assets/brainy2.svg";
                // the colors- getting replaced with slight as 9 became 7 
                text_left.style.color = color_low;
                text_right.style.color = color_low;
                card.style.boxShadow = '0px 0px 60px 2px #49E2F0';


              } else if (pScore >=0 ) {
                text_left.innerText = "minimal";
                text_right.innerText = "minimal";
                // the message
                document.getElementById('result_message').innerText = mes_minimal;
                // the image
                r_image.src = "assets/brainy1.svg";
                // the colors
                text_left.style.color = color_minimal;
                text_right.style.color = color_minimal;
                card.style.boxShadow = '0px 0px 60px 2px #B5E553';
              

            } else {
                text_left.innerText = "Error";
                text_right.innerText = "Error";
                // the message
                document.getElementById('result_message').innerText = mes_error;
                // the image
                r_image.src = "assets/brainy7.svg";
                // the colors
                text_left.style.color = color_critical;
                text_right.style.color = color_critical;
                card.style.boxShadow = '0px 0px 60px 2px #91166D';
              }





    
}





// showing hiding moving blocs-----------------------------------------------------------------------



   // Add event listener to the "Done" button
   document.getElementById('doneButton').addEventListener('click', showPoints);

   function showPoints() {    
       // Show score card result
       document.getElementById('score_card_container').style.display = 'flex';
       // Show score card refreshButton
       document.getElementById('refreshButton').style.display = 'block';




       var sectionToReveal = document.getElementById("score_card_container");
        // scrolling
       var sectionTop = sectionToReveal.offsetTop; // Get the section's top position
       window.scroll({
         top: sectionTop,
         behavior: "smooth" // Optional: Smooth scrolling animation
       })

       // Show links
        document.getElementById('containerLinks').style.display = 'block';
   }



// REFreshing quizzz-----------------------------------------------------------------------------------
const refreshButton = document.getElementById("refreshButton");



refreshButton.addEventListener("click", function() {
    // refresh page
    window.location.reload(); 
    window.scrollTo(0, 0); // Scroll to top explicitly 
  });











