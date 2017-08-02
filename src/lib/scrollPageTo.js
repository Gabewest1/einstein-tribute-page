import $ from "jquery"

export default function scrollPageTo(scrollTop) {
    console.log("AYYYYYY", scrollTop)
    $("body").animate({ scrollTop })
}
