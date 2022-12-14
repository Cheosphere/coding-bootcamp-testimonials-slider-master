const buttons = document.querySelectorAll('.buttons_btn')
const comment = document.getElementById('comment')
const userPhoto = document.getElementById('user_photo')
const userName = document.getElementById('user_name')
const events = ['click', 'keyup']


buttons.forEach(btn => {
    events.forEach(event => {
        btn.addEventListener(event, () => {
            // console.log(event)
            if (!comment.classList.contains('comment')) {
                comment.classList.add('comment')
                comment.innerHTML = `
                    “ If you want to lay the best foundation possible I’d recommend taking this course. 
                    The depth the instructors go into is incredible. I now feel so confident about 
                    starting up as a professional developer. ”
                    `
                userPhoto.classList.add('change_photo_user')
                userName.innerHTML = `
                        John Tarkpor<span class="content_comment_user_position" id="user_position">Junior Front-end Developer</span>
                    `
            } else {
                comment.classList.remove('comment')
                comment.innerHTML = `
                    “ I’ve been interested in coding for a while but never taken the jump, until now. 
                    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
                    excited about the future. ”
                    `
                userPhoto.classList.remove('change_photo_user')
                userName.innerHTML = `
                        Tanya Sinclair<span class="content_comment_user_position" id="user_position">UX Engineer</span>
                    `
            }
            anime({
                targets: '.content_comment',
                opacity: {
                    value: [0, 1],
                    duration: 800
                },
                easing: 'easeOutExpo'
            })
            anime({
                targets: '.user_image_photo',
                opacity: {
                    value: [0, 1],
                    duration: 1000
                },
                scale: {
                    value: [0, 1],
                    duration: 1000
                },
                easing: 'easeOutExpo'
            })
            anime({
                targets: '.content_comment_user',
                opacity: {
                    value: [0, 1],
                    duration: 800,
                    delay: 200
                },
                translateY: {
                    value: [-150, 0],
                    delay: 100
                },
                easing: 'easeOutExpo'
            })
        })
    });
});





