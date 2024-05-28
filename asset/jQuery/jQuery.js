$(document).ready(function() {
    $('.tab-button').click(function() {
        var tabId = $(this).data('tab');

        $('.tab-button').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').addClass('hidden');
        $('#' + tabId).removeClass('hidden');
    });

    // 첫 번째 탭을 기본적으로 활성화 상태로 만듭니다.
    $('.tab-button').first().addClass('active');
    $('.tab-content').first().removeClass('hidden');
});
