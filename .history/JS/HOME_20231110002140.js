// JS cho thông tin quán 
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplays) => {
//     let startVlue = 0;
//     let endVlue = parseInt(valueDisplays.getAttribute("data-val"));
//     let duration = Math.floor(interval / endVlue);
//     let counter = setInterval(function(){
//         startVlue += 1;
//         valueDisplays.textContent = startVlue;
//         if(startVlue == endVlue){
//             clearInterval(counter)
//         }
//     }, duration)
// });
// <!-- Javascript -->
<script src="https://code.jquery.com/jquery-3.7.0.js"></script>
    <script>
        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop()) {
                    $('header').addClass('sticky');
                }
                else {
                    $('header').removeClass('sticky');
                }
            });
        });