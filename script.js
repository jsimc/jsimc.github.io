window.addEventListener('load', function() {
    var pocetna = document.getElementById('pocetna');
    pocetna.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    var ponuda = document.getElementById('ponuda');
    ponuda.addEventListener('click', function() {
        window.location.href = 'ponuda.html';
    });

    var web = document.getElementById('web-btn');
    web.addEventListener('click', function() {
        window.location.href = 'web_hosting.html';
    });

    var business = document.getElementById('business-btn');
    business.addEventListener('click', function() {
        window.location.href = 'business_hosting.html';
    });
});