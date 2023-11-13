import { gsap } from "gsap"

const DURATION = 0.5;

document.querySelectorAll(".list-item").forEach(item => {
    item.addEventListener("touchstart", (e) => {
        const video = document.querySelector(`.video_${e.target.dataset.id}`)
        const videoElement = video.querySelector(".video-element")
        const tl = gsap.timeline()
        tl.to(video, {
            y: "0%",
            duration: DURATION
        })
            .to(".logo", {
                scale: 0.65,
                transformOrigin: "top left",
                duration: 0.25
            }, "-=0.25")
            .from(videoElement, {
                opacity: 0,
                duration: DURATION,
                onComplete: () => {
                    videoElement.play()
                }
            })
    })
})

document.querySelectorAll(".video-close").forEach(button => {
    button.addEventListener("touchstart", (e) => {
        const wrapper = e.target.parentElement
        wrapper.style.transform = "translateY(150%)"
        const video = wrapper.querySelector(".video-element")
        video.pause();
        video.currentTime = 0;

        const tl = gsap.timeline()
        tl.to(wrapper, {
            y: "150%",
            duration: DURATION
        })
            .to(".logo", {
                scale: 1,
                transformOrigin: "top left",
                duration: 0.25
            }, "-=0.25")
    })
})