'use strict'

$(document).ready(function () {
    // リンクボタン群
    $('#linksTop').on('click', function () {
        $('.section').addClass('hidden');
        $('#top').toggleClass('hidden');
    });
    $('#linksProf').on('click', function () {
        $('.section').addClass('hidden');
        $('#prof').toggleClass('hidden');
    });
    $('#linksWebpage').on('click', function () {
        $('.section').addClass('hidden');
        $('#Webpage').toggleClass('hidden');
    });
    $('#linksphotograph').on('click', function () {
        $('.section').addClass('hidden');
        $('#photograph').toggleClass('hidden');
    });
    $('#linksother').on('click', function () {
        $('.section').addClass('hidden');
        $('#other').toggleClass('hidden');
    });
    // photogallary用モーダル
    const PhotoImg = document.querySelectorAll('.PhotoImg');
    PhotoImg.forEach(function (item, index) {
        item.onclick = function () {
            let picname = ('./img/' + this.dataset.image)
            let check = (this.dataset.check)
            document.getElementById('picSet').src = picname;
            $('#modalCase').toggleClass('hidden');
            let picname2 = picname.split('.').slice(0, -1).join('.');
            picname2 = (picname2 + '-satu.png')
            if (check === "1") {
                $('.modalIn2').toggleClass('hidden');
                document.getElementById('picSet2').src = picname2;
            }
        }

    });
    $('.picFreamOff').on('click', function () {
        $('#modalCase').toggleClass('hidden');
        $('.modalIn2').addClass('hidden');
    });
});

// webpage用swhich
const topic = document.querySelectorAll('.topicTop');
topic.forEach(function (item, index) {
    item.onclick = function () {
        let target = ('#' + this.dataset.name)
        let flag = document.getElementById(this.dataset.name).className
        if(flag !== ('topic2 hidden')) {
            $(target).addClass('hidden')
        } else {
        $('.topic2').addClass('hidden')
        $(target).toggleClass('hidden')
        const scrollName = document.getElementById(this.dataset.name)
        scrollName.scrollIntoView(false)
        }
    }
});