// loading artists

const artists = $('#artists');
var count_load = 3;

function load_more() {
    if (data.length > count_load) {
        if (count_load % 2 == 1)
            artists.append(
                '<div class="artist">' +
                '<div class="artist-des">' +
                '<h2 class="artist-title">' + data[count_load].name + '</h2>' +
                '<p class="artist-text"><br>' + data[count_load].main_descr + '</p>' +
                '<a href="artist.html" class="link nav-link" onclick="remember_current_artist(' + count_load + ')"><br>Подробнее &#129046;</a>' +
                '</div>' +
                '<img src="' + data[count_load].main_img_res + '" alt="" class="artist-img">' +
                '</div>'
            );
        else
            artists.append(
                '<div class="artist">' +
                '<img src="' + data[count_load].main_img_res + '" alt="" class="artist-img">' +
                '<div class="artist-des">' +
                '<h2 class="artist-title">' + data[count_load].name + '</h2>' +
                '<p class="artist-text"><br>' + data[count_load].main_descr + '</p>' +
                '<a href="artist.html" class="link nav-link" onclick="remember_current_artist(' + count_load + ')"><br>Подробнее &#129046;</a>' +
                '</div>' +
                '</div>'
            );

        count_load++;
        if (data.length == count_load)
            $('.load_more').hide()
    }
}

// saving current data

function remember_current_artist(cur) {
    document.cookie = "artist=" + cur;
}

function remember_current_tour(cur) {
    document.cookie = "tour=" + cur;
}