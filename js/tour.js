const visit_links = [
    "https://www.google.com/maps/embed?pb=!4v1623057349763!6m8!1m7!1sCAoSLEFGMVFpcE84eXB3YkZEQnRWTEJGdV83OHR1TmJyai1TY1RvSGlUZENTUHVw!2m2!1d48.86130283722562!2d2.336347550153732!3f206.1437082760363!4f-5.992701913716829!5f0.7820865974627469",
    "https://www.google.com/maps/embed?pb=!4v1623054191605!6m8!1m7!1sCAoSLEFGMVFpcE5Sal9Dd1A0Y29ETVlkQ0hqNnFIZUJlSnBJMlZ4VTVCVXNPWDRG!2m2!1d48.8563254!2d2.3352706!3f111.37!4f11.329999999999998!5f0.5970117501821992",
    "https://www.google.com/maps/embed?pb=!4v1623054248782!6m8!1m7!1sCAoSLEFGMVFpcE5NWkdRdUVBLXBBVXZJR19lUF8yZjNnV1RLWkVKNlhMVkotUGdi!2m2!1d48.8601723!2d2.3395439!3f322.04!4f-5.75!5f0.440292882915489",
    "https://www.google.com/maps/embed?pb=!4v1623054293094!6m8!1m7!1sCAoSLEFGMVFpcFA3dUZablRJVFJlLTdBRVZBZ0hBZnFpQ0wtMDNndkJIY1lXZ0Yz!2m2!1d48.86018303140322!2d2.335615591987402!3f177.69!4f5.609999999999999!5f0.4000000000000002",
    "https://www.google.com/maps/embed?pb=!4v1623054336859!6m8!1m7!1sCAoSLEFGMVFpcE8xd2tVVWJ5enBQamotT1IwbVI1ZXRaSlQteGwtNDBYSzhyRFEz!2m2!1d48.85987877384653!2d2.335515730085149!3f7.53!4f4!5f0.5970117501821992",
    "https://www.google.com/maps/embed?pb=!4v1623054383699!6m8!1m7!1sCAoSLEFGMVFpcFBwR0Fvd1lhdFZ5azNNTUduWkFhUWtZbTJFVWstRGxjYTA2U1M1!2m2!1d48.8563254!2d2.3352706!3f21.26!4f-10.090000000000003!5f0.4000000000000002"
];

var cur_visit = parseInt(getCookie("tour"), 10);
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const frame = document.querySelector('iframe');
frame.setAttribute('src', visit_links[cur_visit]);
console.log(frame);
console.log()